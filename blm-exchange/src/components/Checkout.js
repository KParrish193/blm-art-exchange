import React from 'react'

import StripeCheckout from 'react-stripe-checkout';

import { } from 'react-hook-form';

{ /* secret key - sk_test_51HF2vAF40cwvgCWze38IjgUiR2zEOy15sdsEjzoqkcTMzigv5D3FqDoHq7w90vm1pqCTppD1SkdcxyizAfDZAAl700oGIL7GOR */ }

function Checkout(){

    const [product] = React.useState({
        name: 'Example',
        size: 'A4',
        price: 1000,
    })

    function handleToken(token, addresses) {
        console.log({ token, addresses });
    }

    return(
        <div>
            {/* checkout of cart */}
            <StripeCheckout 
                    stripeKey="pk_test_51HF2vAF40cwvgCWzh3DJ6E6yfQMrIptkpRB3K7yFIwS6cxS7Kafdhd8jUJb5O03C3ItnPTEY7TbzOiEKDVd0TjOE00VJNqAysZ"
                    token={handleToken}
                    billingAddress
                    shippingAddress
                    amount={product.price}
                    size={product.size}
                    name={product.name}/>
        </div>
    )
}

export default Checkout