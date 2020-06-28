import React from 'react'

import { PrimaryButton } from '../global styles/index'

import { useForm } from 'react-hook-form';


function Inquiry(){
    
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
    return(
        <div>
            {/* form to contact artist for specific requests */}
            {/* dynamically populate artist contact info from artist context/filter based on artist opt-in */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" name="Name" ref={register({required: true, max: 30, min: 2})} />
                <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                <input type="text" placeholder="Request" name="Request" ref={register({required: true, maxLength: 1000})} />

                <PrimaryButton> Submit </PrimaryButton>
            </form>
        </div>
    )
}

export default Inquiry