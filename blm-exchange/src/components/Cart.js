import React, { useContext } from 'react';

import { CartContext } from '../contexts/CartContext'

import { PrimaryButton } from '../global styles/index'

function Cart(){
    const {cart} = useContext(CartContext);

    const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

    return(
        <div>
            {/* cart */}
            <h3>Cart</h3>

            <div className="cart-container">
            {cart.map(item => (
				console.log(item),
                <div>
                    {/* item info */}
                </div>
			))}
            </div>

            <div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<PrimaryButton>Checkout</PrimaryButton>
			</div>
        </div>
    )

}

export default Cart