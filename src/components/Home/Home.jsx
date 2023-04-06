import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirts => {
        const exists = cart.find(ts => ts._id === tshirts._id)
        if (exists) {
            toast('hi brother already added t-Shirt')
        }
        else {
            const newCart = [...cart, tshirts];
            setCart(newCart);
        }


    }
    const handleRemoveToCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining)
    }

    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveToCart={handleRemoveToCart}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;