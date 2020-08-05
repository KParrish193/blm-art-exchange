import React, { useContext } from 'react';

import { ProductContext } from '../contexts/ProductContext';

import { Link } from 'react-router-dom';
import Filter from './Filter';

import { PhotoGrid, ProductCard, ProductImg, ListPageContainer } from '../global styles/index'


function Shop(){
    const { products } = useContext(ProductContext)
    console.log('shop line 13', ProductContext) 

    return(
        <ListPageContainer>
            {/* display all available products to buy */}
            <h3>Shop</h3>
            <Filter />

            <div className="shop-container">
                <PhotoGrid className="product-card-container">
                    {products.map((product, id) => (
                        <ProductCard className ="product-card" key={product.id}>
                            <Link to={`/shop/print/${product.id}`}>
                            <h4>{product.title}</h4>
                            <ProductImg src={`https://heroku.com/artxblm-backend/${product.image.url}`} />
                            {/* code for dark overlay */}
                            </Link>
                        </ProductCard>
                    ))}
                </PhotoGrid>
            </div>
        </ListPageContainer>
    )
}

export default Shop