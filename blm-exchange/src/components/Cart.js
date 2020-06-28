import React, { useContext } from 'react';

import { CartContext } from '../contexts/CartContext'

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { PrimaryButton, CartContainer, ProductContainer, AlignRight, AlignLeft } from '../global styles/index'

function Cart(){
    const {cart, removeItem} = useContext(CartContext);

    const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

    return(
        <CartContainer>
            {/* cart */}
            <AlignLeft>
                <h3> Shopping Cart</h3>
            </AlignLeft>

            <div className="labelrow">
                <p>Item</p>
                <p>Quantity</p>
                <p>Price</p>
            </div>

            <ProductContainer className="cart-container">
            {cart.map(item => (
				console.log(item),
                <div>
                    {/* item info */}
                    <button onClick={() => removeItem(item)}>
                        <HighlightOffIcon />
                    </button>
                </div>
			))}
            
            </ProductContainer>
            <AlignRight>
                <div className="total">
                    <p>Subtotal: ${getCartTotal()}</p>
                    <PrimaryButton>Checkout</PrimaryButton>
                </div>
            </AlignRight>
        </CartContainer>
    )

}

export default Cart