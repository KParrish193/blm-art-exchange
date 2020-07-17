import React, { useContext } from 'react';

import { ProductContext } from '../contexts/ProductContext';

import { Link } from 'react-router-dom';

import FilterListIcon from '@material-ui/icons/FilterList';


function Shop(){
    const { products } = useContext(ProductContext)

    return(
        <div className="shop-page-container">
            {/* display all available products to buy */}
            <div className="search">
            <FilterListIcon />
            {/* filter/search */}
            </div>

            <div className="shop-container">
            <h3>Shop</h3>
                <div className="product-card-container">
                    {products.map(product => (
                        <div className ="product-card">
                            <Link to="/prints/${product.id}">
                            <img src={product} />
                            {/* code for dark overlay */}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop