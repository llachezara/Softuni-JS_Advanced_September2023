async function onRegister(ev) {
    const baseURL = 'http://localhost:3030';
    try {
        const response = await fetch(`${baseURL}/users/register`);
        console.log(response);
        const data = await response.json();
        console.log(data);
    }catch (error){
        console.log(error);
    }
    
}
onRegister()
//'X-Authorization': { token }