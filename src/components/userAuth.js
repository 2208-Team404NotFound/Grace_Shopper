import { login, register } from './api';
import { useState } from 'react';

export const Auth = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitLogin = async (event) => {
        event.preventDefault();

        const result = await login(username, password)
        if (!result) {
            alert('Oops, incorrect username or password!')
            return;
        }
        setToken(results);
        localStorage.setItem('markgeeharrison', `${results}`);
    };

    const submitRegister = async (event) => {
        event.preventDefault();
        if (password.length < 8) {
            alert('Password must be atleast 8 characters!')
            return;
        }

        const results = await register(username, password);
        setToken(results);
        localStorage.setItem('markgeeharrison', `${results}`);
    };

    const submitLogout = (event) => {
        event.preventDefault();

        setToken('');
        localStorage.removeItem('markgeeharrison');
    };

    return (
        <div>
            <form id='login-form'>
                <input required type="text" placeholder="Username " value={username} onChange={(event) => {
                    setUsername(event.target.value)
                }} />
                <input required type="password" placeholder="Password " value={password} onChange={(event) => {
                    setPassword(event.target.value)
                }} />
                <button onClick={(event) => submitLogin(event)}>Login</button>
                <button onClick={(event) => submitLogout(event)}>Logout</button>
            </form>
        </div>
    )
};