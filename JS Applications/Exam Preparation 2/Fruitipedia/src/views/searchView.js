import { getArrayForSearch } from "../api/data.js";
import { userData } from "../api/userService.js";

let context;
export async function search(ctx) {
    context = ctx;
    const user = userData.getUser();
    context.user = user;


    const template = createSearchViewTemp();
    context.renderer(template);

}

function createSearchViewTemp(items) {
    return context.html`
    <section id="search">

<div class="form">
  <h2>Search</h2>
  <form @submit=${onSubmit} class="search-form">
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button class="button-list">Search</button>
  </form>
</div>
<h4>Results:</h4>
  <div class="search-result">
    ${items && items.length > 0 ? items.map((el) => createItemTemp(el)) : context.html` <p class="no-result">No result.</p>`}

  </div>
        </section>
    `
}

async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const { search } = Object.fromEntries(formData);
    const query = search;

    if (query) {
        const items = await getArrayForSearch(query);

        const template = createSearchViewTemp(items);
        context.renderer(template);
    }else{
        alert('Fill in the search bar!')
    }

}

function createItemTemp(object) {
    return context.html`
    <div class="fruit">
  <img src="..${object.imageUrl}" alt="example1" />
  <h3 class="title">${object.name}</h3>
  <p class="description">${object.description}</p>
  <a class="details-btn" href="/details/${object._id}">More Info</a>
</div>
    `
}