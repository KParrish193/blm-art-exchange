import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { PrimaryButton, CartContainer, ProductContainer, AlignRight, AlignLeft } from '../global styles/index'
import StripeCheckout from 'react-stripe-checkout';

function Cart(){
    const {cart, removeItem} = useContext(CartContext);

    const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
    };
    
    function handleToken(token, addresses) {
        console.log({ token, addresses });
    }

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
                    <StripeCheckout 
                    stripeKey="pk_test_51HBjg8JUF4DG9VOula9dBwMNcMHCTJTDJhou4WwxtJTOaBb1F3nvjNBHV6h3o1v9NVY6sDaswXeCimAzlRRV8DxP00GGsNcZ79"
                    token={handleToken}/>
                </div>
            </AlignRight>
        </CartContainer>
    )

}

export default Cart