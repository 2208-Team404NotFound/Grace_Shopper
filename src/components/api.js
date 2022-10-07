const BASE_URL = 'http://localhost:5000/api';

export const login = async (username, password) => {

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