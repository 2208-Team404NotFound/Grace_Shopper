const BASE_URL = 'http://localhost:5000/api';

export const loginUser = async (username, password) => {

    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const results = await response.json();
        return results.token;

    } catch (error) {
        console.log(error);
    }
};

export const registerUser = async (username, password) => {
    const response = await fetch(`${BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    });
    const results = await response.json();
    return results.token;
};

export const getAllAlbums = async () => {
    const response = await fetch(`${BASE_URL}/albums`, {
        'Content-Type': 'application/json'
    })
    const results = await response.json();
    return results;
};

export const createAlbums = async (token, artist, album_name, year, album_price, img_url) => {
    const response = await fetch(`${BASE_URL}/Albums`, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            artist, album_name, year, album_price, img_url
        })
    });
    const results = await response.json();
    return results;
};