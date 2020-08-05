import React, { useEffect, useContext } from 'react';

import { ProductContext } from '../contexts/ProductContext';

function PrintDetail(){
    const { products } = useContext(ProductContext)

    return(
        <div>
            {/* display print details */}
        <h4>{products.title}</h4>

        
        </div>
    )
}

export default PrintDetail