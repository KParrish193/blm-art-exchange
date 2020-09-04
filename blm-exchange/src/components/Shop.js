import React, { useContext } from 'react';

import { ProductContext } from '../contexts/ProductContext';

import { Link } from 'react-router-dom';
import Filter from './Filter';

import { PhotoGrid, ProductCard, ProductImg, ListPageContainer, ThumbnailContainer } from '../global styles/index';

function Shop(){
    const { products } = useContext(ProductContext)
    
    var _ = require("underscore");
    const shuffledProducts = _.shuffle(products)

    return(
        <ListPageContainer>
            {/* display all available products to buy */}
            <h3>Shop</h3>
            <Filter/>

            <div className="shop-container">
                <PhotoGrid className="product-card-container">
                    
                    {shuffledProducts.map((product) => (
                        <ProductCard className ="product-card" key={product.id}>
                            <Link to={`/shop/print/${product.id}`}>
                                <div className="mobile-card">
                                    <h4>{product.title}</h4>
                                    <h5 key={product.artistID}>
                                        {product.artistID.firstName} {product.artistID.lastName}
                                    </h5>
                                </div>
                                
                                <ThumbnailContainer>
                                    <div>
                                    <h4>{product.title}</h4>
                                    <h5 key={product.artistID}>
                                        {product.artistID.firstName} {product.artistID.lastName}
                                    </h5>
                                    </div>
                                    
                                    <ProductImg src={`${product.image.formats.small.url}`} />
                                </ThumbnailContainer>
                            </Link>
                        </ProductCard>
                    ))}
                </PhotoGrid>
            </div>
        </ListPageContainer>
    )
}

export default Shop