import React, { useContext } from 'react';

import { CartContext } from '../contexts/CartContext'

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { PrimaryButton, CartContainer, ProductContainer, AlignRight, AlignLeft, CartLabels } from '../global styles/index'
import { Link }  from 'react-router-dom'

function Cart(){
    const {cart, removeItem} = useContext(CartContext);

    const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
    };

    return(
        <div>

        <CartContainer>
        <AlignLeft>
        <h3> Shopping Cart</h3>
        </AlignLeft>
            {/* cart */}

            <CartLabels className="labelrow">
                <p>Item</p>
                <p>Size</p>
                <p>Quantity</p>
                <p>Price</p>
            </CartLabels>

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
                    <PrimaryButton>
                        <Link to="/checkout">
                            Checkout
                        </Link>
                    </PrimaryButton>
                </div>
            </AlignRight>
        </CartContainer>
        </div>
    )

}

export default Cart