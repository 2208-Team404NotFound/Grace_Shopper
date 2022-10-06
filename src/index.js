import { createRoot } from 'react-dom/client';
import { useEffect, useState } from 'react';
import { Auth } from "./components"
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('markgeeharrison'));
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState('');

    useEffect(() => {
        if (localStorage.getItem('markgeeharrison') && !token) {
            setLogin(true);
            setToken(localStorage.getItem('markgeeharrison'));
            setUser(localStorage.getItem('markgeeharrison'));
        }
    }, [])

    return (
        <BrowserRouter>
            <div id='container'>
                <div id='nav'>
                    <h1>The Cassette Shop</h1>
                    <Link to="Login">Login</Link>
                </div>
                <div id='main'>
                    <Routes>
                        <Route path="Login" element={<Auth setToken={setToken} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

const container = document.getElementById('app')
const root = createRoot(container);
root.render(
    <App />
);