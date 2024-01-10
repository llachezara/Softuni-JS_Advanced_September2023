const BASE_URL = 'http://localhost:3030/';

export async function requester(method, url, data) {
    const URL = BASE_URL + url;
    try {

        const user = JSON.parse(localStorage.getItem('user'));
        const headers = {}
        const option = {
            method,
            headers,
        }

        if (data !== undefined) {
            headers["Content-Type"] = "application/json";
            option.body = JSON.stringify(data);
        }

        if (user) headers["X-Authorization"] = user.accessToken;

        const response = await fetch(URL, option);

        if (!response.ok) {

            if (response.status === 403) {
                throw new Error('You have to register first!')
            }
            const error = await response.json();
            throw new Error(error.message)
        }
        if (response.status == 204) {
            return response;
        }

        return response.json();

    } catch (error) {
        alert(error);
    }

}