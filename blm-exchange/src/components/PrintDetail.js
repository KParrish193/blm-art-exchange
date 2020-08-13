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
            <img src={detail.image.formats.small.url}/>
            <div>
                <p>{detail.description}</p>
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
            <div className="container">
            <div className="print-heading">
                <h3>{detail.title}</h3>
                <Link to="">
                <h4>{Object.values(detail.artistID.firstName)} {Object.values(detail.artistID.lastName)}</h4>
                </Link>
            </div>
                {/* form for submitting print details to cart */}
            <PrintForm>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <label>Size:</label>
                <select 
                    name="Size"
                    ref={register({ required: true })}
                    placeholder="select"
                    style={{
                        width: '35%',
                        backgroundColor: '#151515',
                        color: '#fff',
                        border: 'solid 1px #808080',
                        borderRadius: '5px',
                        paddingLeft: '.2rem',
                        letterSpacing: '.09rem'
                    }}>
                    <option value='5x7'>5x7"</option>
                    <option value='8x10'>8x10"</option>
                    <option value='11x14'>11x14"</option>
                </select>
                </div>

                <div>
                    {/* TODO logic to have no negative numbers */}
                <label>Quantity:</label>
                <input 
                    type="number" 
                    placeholder="0" 
                    name="Quantity" 
                    ref={register({required: true})}
                    style={{
                        width: '20%',
                        backgroundColor: '#151515',
                        color: '#fff',
                        border: 'solid 1px #808080',
                        borderRadius: '5px',
                        paddingLeft: '.3rem'
                    }} />
                </div>
                
                <div className="price">
                <label>Price: {price}</label>
                </div>

                <PrimaryButton onClick={addItem}>
                    Add to Cart
                </PrimaryButton>
                </form>
            </PrintForm>
            </div>
        </PrintContent>

        </PrintContainer>

        ))}
        



        </PrintDetailContainer>

    
    )
}

export default PrintDetail