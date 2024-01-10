import { addToBoughtCount, getBuysFromCurrentUser, getItemById, getTotalCountById } from "../api/data.js";
import { userData } from "../api/userService.js";

let context;
let counter = 0;
let canBuy = true;
export async function showDetailsView(ctx) {
  context = ctx;
  const user = userData.getUser();
  context.user = user;

  const itemId = context.params.id;
  const currentItem = await getItemById(itemId);

  const isOwner = user && user._id == currentItem._ownerId;
  if (user) {
    const data = await getBuysFromCurrentUser(itemId, user._id)
    if (data == 0) {
      canBuy = true;
    }
  }
  
  counter = await getTotalCountById(itemId);
  debugger
  const template = createDetalisView(currentItem, isOwner, counter, canBuy);
  context.renderer(template);
  context.updateNav();
}


function createDetalisView(object, isOwner, counter, canBuy) {
  //console.log(context.user._id !== object._ownerId);
  return context.html`
            <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="..${object.imageUrl}" alt="example1" />
            <p id="details-title">${object.name}</p>
            <p id="details-category">
              Category: <span id="categories">${object.category}</span>
            </p>
            <p id="details-price">
              Price: <span id="price-number">${object.price}</span>$</p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Bought: <span id="buys">${counter}</span> times.</h4>
                <span
                  >${object.description}</span
                >
              </div>
            </div>

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
            ${isOwner ? context.html`
              <a href="/details/edit/${object._id}" id="edit-btn">Edit</a>
              <a href="/details/delete/${object._id}" id="delete-btn">Delete</a> ` : ``}
            ${context.user && context.user._id !== object._ownerId && canBuy ? context.html` <a href="" @click=${onClickBtn} id="buy-btn">Buy</a>` : ``}
            </div>

              <!--Bonus - Only for logged-in users ( not authors )-->
              
          </div>
        </section>
    `
}

///buy/${object._id}
async function onClickBtn(e) {
  const currentBuyBtn = document.getElementById('buy-btn');

  const itemId = context.params.id;
  const user = userData.getUser();

  await addToBoughtCount({ productId: itemId });
  const data = await getBuysFromCurrentUser(itemId, user._id)
  if (data > 0) {
    currentBuyBtn.style.display = 'none';
    canBuy = false;
  }

  counter = await getTotalCountById(itemId);
  const currentItem = await getItemById(itemId);
  const isOwner = user && user._id == currentItem._ownerId;

  counter = await getTotalCountById(itemId);
  const template = await createDetalisView(currentItem, isOwner, counter, canBuy);
  context.renderer(template);
  context.updateNav();
}


