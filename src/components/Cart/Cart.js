import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);


    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;

    }
    const tax = parseFloat((total * 10 / 100).toFixed(2));
    const grandTotal = total + shipping + tax;


    return (
        <div className='cart'>
            <h3>Cart container in shop</h3>
            <p>Selected items:{props.cart.length}</p>
            <p>Total Price:$ {total}</p>
            <p>Shipping price:$ {shipping}</p>
            <p>Tax:{tax}</p>
            <h5>Grand-total:{grandTotal}</h5>




        </div>
    );
};

export default Cart;