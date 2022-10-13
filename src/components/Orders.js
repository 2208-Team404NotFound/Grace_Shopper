import { getAllOrders, createOrders } from "./api";
import { useState } from 'react'

export const Orders = ({ token }) => {
    const [orders, setOrders] = useState([]);
    const [price, setPrice] = useState('');
    const [is_active, setIsActive] = useState(false);
    const [user_id, setUserId] = useState('');


    // const submitOrder = async (event) => {
    //     event.preventDefault();
    //     const results = await createOrders(token, user_id, is_active, price);

    // };

    return (
        <div className='orders-container'>
            <h1>Your Orders:</h1>

        </div>
    )
}