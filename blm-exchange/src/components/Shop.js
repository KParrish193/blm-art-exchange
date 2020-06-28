import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

import { Link } from 'react-router-dom';

import FilterListIcon from '@material-ui/icons/FilterList';


function Shop(){
    const { products } = useContext(ProductContext)

    return(
        <div>
            {/* display all available products to buy */}

            <h3>Shop</h3>

            {products.map(product => (
				<div>
                    <Link to="/prints/:id">
                    <img src={product} />
                    {/* code for dark overlay */}
                    </Link>
                </div>
			))}
        </div>
    )
}

export default Shop