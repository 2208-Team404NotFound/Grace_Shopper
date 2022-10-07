import { registerUser } from './api';
import { useState } from 'react';

export const Register = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');

    const submitRegister = async (event) => {
        event.preventDefault();

        const user = await registerUser(username, password);

        if (user.username) {
            alert(`${user.username} already exists!`);

        } 
        alert('Registered successfully!');
        setToken(result);
        localStorage.setItem('markgeeharrison', `${result}`); 
    };
    return (
        <div>
            <form id='register-form'>
                <input required placeholder='Username' type='text' />
                <input required placeholder='Password' minLength='8' type='password' />
                <input required placeholder='Confirm Password' minLength='8' type='password' />
                <button onClick={(event) => submitRegister(event)}>Register</button>
            </form>
        </div>
    )
}
