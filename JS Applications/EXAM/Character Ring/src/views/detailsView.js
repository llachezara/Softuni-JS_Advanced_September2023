import { addLike, getItemById, getLikesForCharacterFromCurrUser, getLikesForCurrentCharacter } from "../api/data.js";
import { userData } from "../api/userService.js";

let context;

export async function showDetailsView(ctx) {
  context = ctx;
  const user = userData.getUser();
  context.user = user;

  const itemId = context.params.id;
  const currentItem = await getItemById(itemId);

  let isOwner = undefined;
  let likes = await getLikesForCurrentCharacter(itemId);
  let userLikedCurrCharacter;
  let showLikeBtn;
  if (user) {
    isOwner = user && user._id == currentItem._ownerId;
    userLikedCurrCharacter = await getLikesForCharacterFromCurrUser(itemId, user._id);
    showLikeBtn = !isOwner && userLikedCurrCharacter == 0;
  }

  const template = createDetalisView(currentItem, isOwner, likes, showLikeBtn);
  context.renderer(template);
  context.updateNav();
}

function createDetalisView(object, isOwner, likes, showLikeBtn) {

  return context.html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="..${object.imageUrl}" alt="example1" />
            <div>
            <p id="details-category">${object.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${object.description}</p>
                   <p id ="more-info">${object.moreInfo}</p>
              </div>
            </div>
              <h3>Is This Useful:<span id="likes">${likes}</span></h3>

          <div id="action-buttons">
            ${isOwner ?
      context.html`<a href="/details/edit/${object._id}" id="edit-btn">Edit</a>
                        <a href="/details/delete/${object._id}" id="delete-btn">Delete</a>` : ``}

            ${showLikeBtn ?  context.html`<a href="" @click=${onClickBtn} id="like-btn">Like</a>` : ``}
          </div >
            </div >
        </div >
    `
}


async function onClickBtn(e) {
  const currLikeBtn = e.target;
  const itemId = context.params.id;
  const currentItem = await getItemById(itemId);
  const user = context.user;

  await addLike(itemId);

  let isOwner = undefined;
  let likes = await getLikesForCurrentCharacter(itemId);
  let userLikedCurrCharacter;
  let showLikeBtn;
  if (user) {
    isOwner = user && user._id == currentItem._ownerId;
    userLikedCurrCharacter = await getLikesForCharacterFromCurrUser(itemId, user._id);
    showLikeBtn = !isOwner && userLikedCurrCharacter == 0;
  }

  const template = createDetalisView(currentItem, isOwner, likes, showLikeBtn);
  context.renderer(template);
}


