import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router';

import { ProductContext } from '../contexts/ProductContext';

function PrintDetail(){
    const { id } = useParams()

    const { products } = useContext(ProductContext)
    console.log('print detail', products)
    
    return(
        <div key={products.id}>
            {/* display print details */}
        <h4>{products.title}</h4>


        
        </div>
    )
}

export default PrintDetail