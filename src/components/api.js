const BASE_URL = 'http://localhost:4000/api';

export const login = async (username, password, setToken, setLogin, setUser) => {
    let returnMessage;
    let success;

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

        if (!results.error) {
            setToken(results.token)
            setLogin(true)
            setUser(username)
            localStorage.setItem('markgeeharrison', results.token)
            localStorage.setItem('markgeeharrison', username)
            success = true
            returnMessage = results.message
        } else {
            success = false
            returnMessage = results.message
        }

        alert(returnMessage);
        return success;

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

