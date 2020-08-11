import React, { useContext, useState } from 'react';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';

import { PrimaryButton, TagButton, PrintForm, PrintDisplay, PrintContent, PrintContainer, PrintDetailContainer } from '../global styles'

function PrintDetail(){

    const { products } = useContext(ProductContext)
    const { addItem } = useContext(CartContext)
    const { id } = useParams()

    const [price, setPrice] = useState("$0.00");
    // TODO write function to dynamically render price on size selection

    console.log('print detail', products)

    // filter of products to narrow down product by id
    const printByID = products.filter(print => print.id == id);
        console.log('artist by id', printByID)

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    // TODO edit handlesubmit to send size, price, title, printID to cart


    return(
        <PrintDetailContainer >
        
        {printByID.map((detail) => (
        <PrintContainer>
        <PrintDisplay key={detail.id}>
            <img src={detail.image.formats.large.url}/>
            <div>
                <p>{detail.description}</p>
                <p>{detail.image.alternativeText}</p>
            </div>
            <div className="tags-container">
            
            {function TagLogic() {
                if (`${Object.values(detail.artistID.blackArtist)}` === true) {
                    return(
                        <TagButton>Black Artist</TagButton>
                    )}
            }}

            <TagButton>{detail.medium}</TagButton>

            </div>
        </PrintDisplay>

        <PrintContent>
            <div>
                <h3>{detail.title}</h3>
                <Link to="">
                <h4>{Object.values(detail.artistID.firstName)} {Object.values(detail.artistID.lastName)}</h4>
                </Link>
            </div>
                {/* form for submitting print details to cart */}
                <PrintForm>
                <form onSubmit={handleSubmit(onSubmit)}>
                <select name="Size" ref={register({ required: true })}>
                    <option value="size 1">size 1</option>
                    <option value="size 2">size 2</option>
                    <option value="size 3">size 3</option>
                </select>
                <input type="number" placeholder="Quantity" name="Quantity" ref={register({required: true})} />

                <p>{price}</p>

                <PrimaryButton onClick={addItem}>
                    Add to Cart
                </PrimaryButton>
                </form>
                </PrintForm>
        </PrintContent>

        </PrintContainer>

        ))}
        



        </PrintDetailContainer>

    
    )
}

export default PrintDetail