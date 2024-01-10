const BASE_URL = 'http://localhost:3030/';

export async function requester(method, url, data) {
    
    const headers = {};
    const options = {
        method,
        headers,
    };

    const user = JSON.parse(sessionStorage.getItem('user'));

    if (data) {
        headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    if (user) {
        headers['X-Authorization'] = user.accessToken;
    }

    try {
        const response = await fetch(BASE_URL + url, options);
        if (response.ok !== true) {
            throw new Error(response.status);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (error) {
        window.alert(error)
    }

}

export function get(url) {
    return requester('GET', url);
}

export function post(url, data) {
    return requester('POST', url, data);
}

export function put(url, data) {
    return requester('PUT', url, data);
}

export function del(url) {
    return requester('DELETE', url);
}