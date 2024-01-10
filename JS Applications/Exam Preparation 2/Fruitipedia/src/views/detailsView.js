import { getItemById } from "../api/data.js";
import { userData } from "../api/userService.js";

let context;
export async function showDetailsView(ctx) {
  context = ctx;
  const user = userData.getUser();
  context.user = user;

  const itemId = context.params.id;
  const currentItem = await getItemById(itemId);
  debugger
  const isOwner = user._id == currentItem._ownerId;
  const template = createDetalisView(currentItem, isOwner);
  context.renderer(template);
}

function createDetalisView(object, isOwner) {

  return context.html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="..${object.imageUrl}" alt="example1" />
            <p id="details-title">${object.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p>${object.description}</p>
                    <p id="nutrition">Nutrition</p>
                   <p id = "details-nutrition">${object.nutrition}</p>
              </div>
               <!--Edit and Delete are only for creator-->
          ${isOwner ? context.html`
          <div id="action-buttons">
            <a href="/details/edit/${object._id}" id="edit-btn">Edit</a>
            <a href="/details/delete/${object._id}" id="delete-btn">Delete</a>
          </div>
          ` : ''}
            </div>
        </div>
      </section>
    `
}


