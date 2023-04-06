import React from 'react';
import './Cart.css'

const Cart = ({ cart , handleRemoveToCart }) => {
    let message ;
    if(cart.length === 0){
        message = <p>Please add some product</p> 
    }
    else{
        message = <div>
            <h3>Boroloks</h3>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red' }>Order Summary: {cart.length}</h2>
            <p className={`bold ${cart.length ===3 ? 'green' : 'yellow'} `}>Somting</p>
            
            {message}
            {cart.length > 2 
            ? <span className='purple'>Aro kino</span> 
            : <span>Fokira</span>}
            {
                cart.length === 2 && <h3>Double bonanza !!!</h3>
            }
            {
                cart.length === 3 || <h3>Tinta to hoilo na</h3>
            }
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>
                    {tshirt.name}
                    <button
                        onClick={() => handleRemoveToCart(tshirt._id)}
                    >X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;