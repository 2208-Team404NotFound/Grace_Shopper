import { createRoot } from 'react-dom/client';
import { useEffect, useState } from 'react';
import { Login, Register, Albums, Cart } from "./components"
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'

import { CgShoppingCart } from 'react-icons/cg';
import { BsDiscFill } from 'react-icons/bs';
import { ViewAlbum } from './components/ViewAlbum';

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
            <div>

                <header>
                    <h1 id='logo'>Decent Cassette Shop&nbsp;<BsDiscFill className='icon-disc rotating' /> </h1>
                    <Link id='login' to="Login"> Login </Link>
                    <Link id='register' to="Register"> Register </Link>
                    <Link id='albums' to="Albums"> Albums </Link>
                    <Link id='shopping-cart' to="Cart"> <CgShoppingCart /> </Link>
                </header>

                <main>
                    <Routes>
                        <Route path="Login" element={<Login setToken={setToken} />} />
                        <Route path="Register" element={<Register />} />
                        <Route path="Albums" element={<Albums token={token} />} />
                        <Route path="Cart" element={<Cart />} />
                    </Routes>
                </main>

            </div>
        </BrowserRouter>
    );
}

const container = document.getElementById('app')
const root = createRoot(container);
root.render(
    <App />
);