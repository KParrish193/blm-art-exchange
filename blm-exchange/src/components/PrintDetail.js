import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';

import { useForm } from 'react-hook-form';

import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';

import { PrimaryButton, PrintForm, PrintDisplay, PrintDetailContainer } from '../global styles'

function PrintDetail(){

    const { products } = useContext(ProductContext)
    const { addItem } = useContext(CartContext)
    const { id } = useParams()

    const [price, setPrice] = useState("$0.00");
    // function to dynamically render price on size selection

    console.log('print detail', products)
    console.log('id', id)

    const printByID = products.filter(print => print.id == id);
        console.log('artist by id', printByID)


    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    // edit handlesubmit to send size, price, title, printID to cart


    return(


        <PrintDetailContainer >
        
        {printByID.map((detail) => (
        <PrintDisplay key={detail.id}>
        <h4>{detail.title}</h4>
            <img src={detail.image.formats.large.url}/>
        </PrintDisplay>
        ))}
        

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

        </PrintDetailContainer>

    
    )
}

export default PrintDetail