import React from 'react'

import StripeCheckout from 'react-stripe-checkout';

import { } from 'react-hook-form';

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
                    stripeKey="pk_test_51HBjg8JUF4DG9VOula9dBwMNcMHCTJTDJhou4WwxtJTOaBb1F3nvjNBHV6h3o1v9NVY6sDaswXeCimAzlRRV8DxP00GGsNcZ79"
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