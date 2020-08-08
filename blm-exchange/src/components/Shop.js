import React, { useContext } from 'react';

import { ProductContext } from '../contexts/ProductContext';

import { Link } from 'react-router-dom';
import Filter from './Filter';

import { PhotoGrid, ProductCard, ProductImg, ListPageContainer, ThumbnailContainer } from '../global styles/index';

function Shop(){
    const { products } = useContext(ProductContext)
    console.log('shop line 13', ProductContext) 

    return(
        <ListPageContainer>
            {/* display all available products to buy */}
            <h3>Shop</h3>
            <Filter/>

            <div className="shop-container">
                <PhotoGrid className="product-card-container">
                    {products.map((product, id) => (
                        <ProductCard className ="product-card" key={product.id}>
                            <Link to={`/shop/print/${product.id}`}>
                                <div className="mobile-card">
                                    <h4>{product.title}</h4>
                                </div>
                                <ThumbnailContainer>
                                    <ProductImg src={`${product.image.formats.small.url}`} />
                                </ThumbnailContainer>
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