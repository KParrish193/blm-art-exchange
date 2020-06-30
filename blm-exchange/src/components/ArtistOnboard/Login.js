import React from 'react';

import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { PrimaryButton, Form, ToggleSignUp } from '../../global styles/index';

function Login() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    // edit onsubmit to post to login endpoint
    // direct to artist dashboard

    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
            
                <div>
                <label>E-mail:  </label>
                <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                </div>

                <div>
                <label>Password:  </label>
                <input type="text" placeholder="Password" name="Password" ref={register({required: true, min: 8})} />
                </div>
                
            <PrimaryButton>Submit</PrimaryButton>
            </Form>

            <ToggleSignUp> Don't have an artist account? Sign up for one<Link to="/artist/sign-up">here</Link>.</ToggleSignUp>
        </div>
    )
}

export default Login