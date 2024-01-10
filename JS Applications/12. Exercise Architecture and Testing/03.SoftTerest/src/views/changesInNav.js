//Navbar
const nav = document.querySelector('nav');
const registerLink = nav.querySelector('a[href="/register"]');
const loginLink = nav.querySelector('a[href="/login"]');
const createLink = nav.querySelector('a[href="/create"]');
const logoutLink = nav.querySelector('a[href="/logout"]');

export function showUserNavbar(){
   registerLink.style.display='none';
   loginLink.style.display='none';
   createLink.style.display='block';
    logoutLink.style.display='block';
}
export function showGuestNavbar(){
    createLink.style.display='none';
    logoutLink.style.display='none';
    registerLink.style.display='block';
   loginLink.style.display='block';
}

