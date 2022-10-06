const BASE_URL = 'https://localhost:4000/api';

export const login = async (username, userpass) => {
    const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: userpass
        })
    });
    const results = await response.json();
    console.log(results)
    return results.token;
};

export const register = async (username, password) => {
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

