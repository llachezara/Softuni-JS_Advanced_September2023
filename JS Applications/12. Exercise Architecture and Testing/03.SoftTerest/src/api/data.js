//http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc

import { requester } from "./requester.js";

export async function getAllIdeas(){
    const data = await requester('GET', 'data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
    return data;
}

export async function getIdeaDetails(ideaId){
    //http://localhost:3030/data/ideas/:id 
    const data = await requester('GET', `data/ideas/${ideaId}`);
    return data;
}

export async function deleteIdea(ideaId){
   const data = await requester('DELETE',`data/ideas/${ideaId}`);
}

