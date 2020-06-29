import React from 'react';

import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { PrimaryButton, Form } from '../../global styles/index';

function Login() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    // edit onsubmit to post to login endpoint
    // direct to upload/artist dashboard?

    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <span>Need to <Link to="/sign-up">sign-up</Link> instead?</span>
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
        </div>
    )
}

export default Login