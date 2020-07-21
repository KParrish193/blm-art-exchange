import React from 'react'

import { Link } from 'react-router-dom';
import { PrimaryButton, Form, ToggleSignUp } from '../../global styles/index';
import { useForm } from 'react-hook-form';

function ArtistForm(){

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    // edit onsubmit to post to artist endpoint
    // direct to artist dashboard
    
    return(
        <div>
            {/* artist sign-up form */}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h3>Artist Registration</h3>
                <p className="instructions">You can register to become an artist and work with ArtxBLM here. Pleas make sure you read through the Code of Conduct below before submitting your application. We're so excited for you to join us!</p>
                <p className="instructions">Read the <Link to="/artist/coc">Code of Conduct</Link>.</p>
                <ToggleSignUp> Already have an artist account?<Link to="/artist/login"> Login </Link></ToggleSignUp>
                
                
                <div className="form-container">

                    <div className="row">
                        <div className="column">
                            <label>First Name:</label> 
                            <input type="text" placeholder="First Name" name="FirstName" ref={register({required: true, max: 30, min: 2})} />
                        </div>
                        <div className="column">
                            <label>Last Name:</label>
                            <input type="text" placeholder="Last Name" name="LastName" ref={register({max: 30, min: 2})} />
                        </div>
                    </div>

                    <div className="row">
                        <label>E-mail:  </label>
                        <input type="text" placeholder="E-mail" name="E-mail" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                    </div>

                    <div className="row">
                        <div className="column">
                            <label>Password:  </label>
                            <input type="text" placeholder="Password" name="Password" ref={register({required: true, min: 8})} />
                        </div>
                        <div className="column">
                            <label>Confirm Password: </label>
                            <input type="text" placeholder="Confirm Password" name="Confirm Password" ref={register({required: true, min: 8})} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="column">
                            <label>Artist Bio:  </label>
                            <textarea placeholder="Bio" name="Bio" ref={register({required: true, maxLength: 500})} />
                        </div>
                        <div className="column">
                            <label>I am a Black Artist</label>
                            <input type="checkbox" placeholder="BlackArtist" name="BlackArtist" ref={register} />
                        </div>
                    </div>



                    <div>
                        <p>Are you willing to be contacted for non-monetary exchanges for your art?</p>
                        <input type="checkbox" placeholder="Exchange" name="Exchange" ref={register} />
                    </div>

                    <div>
                        <p>Are you willing to allow people to digitally download your art?</p>
                        <input type="checkbox" placeholder="Digital" name="Digital" ref={register} />
                    </div>

                    <div>
                    <label>Medium:  </label>
                    <select name="ProfileType" ref={register({ required: true })}>
                        <option value="Photography">Photography</option>
                        <option value="Digital">Digital</option>
                        <option value="Painting">Painting</option>
                        <option value="Drawing">Drawing</option>
                        <option value="Other">Other</option>
                    </select>
                    </div>

                    <div>
                    <input type="text" placeholder="Profile" name="Profile" ref={register} />
                    </div>

                    <div>
                        <label>Agree to Code of Conduct: </label>
                        <input type="checkbox" placeholder="CodeofConduct" name="CodeofConduct" ref={register} />
                    </div>

                    {/* modal to confirm code of conduct for new artists */}
                    </div>
                    <PrimaryButton onclick={onSubmit} > Submit </PrimaryButton>
                    
            </Form>
        </div>
    )
}

export default ArtistForm