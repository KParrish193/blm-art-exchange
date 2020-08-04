import React, { useContext } from 'react';

import { ProductContext } from '../contexts/ProductContext';

import { Link } from 'react-router-dom';

import FilterListIcon from '@material-ui/icons/FilterList';
import { PhotoGrid, ProductCard, ProductImg } from '../global styles/index'


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
                <PhotoGrid className="product-card-container">
                    {products.map((product, id) => (
                        <ProductCard className ="product-card" key={product.id}>
                            <Link to="/prints/${product.id}">
                            <h4>{product.title}</h4>
                            <ProductImg src={`https://heroku.com/artxblm-backend/${product.image.url}`} />
                            {/* code for dark overlay */}
                            </Link>
                        </ProductCard>
                    ))}
                </PhotoGrid>
            </div>
        </div>
    )
}

export default Shop