import React from 'react'

import { Link } from 'react-router-dom';
import { PrimaryButton, Form, ToggleSignUp, CustomSwitch } from '../../global styles/index';
import { useForm } from 'react-hook-form';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
                <p className="instructions">Explain our process here. Something about reading and agreeing to the Code of Conduct. Evaluating and stuff idk lots of words here. Def explain non-donation exchange.</p>
                <p className="instructions">Read the <Link to="/artist/coc" style={{color: "#037963"}}>Code of Conduct</Link>.</p>
                
                <div className="form-container">

                    <div className="row">
                        <div className="column">
                            <label className="text">First Name:</label> 
                            <input className="text" type="text" placeholder="First Name" name="FirstName" ref={register({required: true, max: 30, min: 2})} />
                        </div>
                        <div className="column">
                            <label className="text">Last Name:</label>
                            <input className="text" type="text" placeholder="Last Name" name="LastName" ref={register({max: 30, min: 2})} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="column">
                        <label className="text">E-mail:  </label>
                        <input className="text" type="text" placeholder="E-mail" name="E-mail" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                        </div>
                        <div className="column">
                            <label className="text" >Pronouns: </label>
                            <input className="text" type="text" placeholder="Pronouns" name="Pronouns" ref={register({required: true, min: 8})} />
                        </div>
                    </div>

                    {/* Checkbox group */}
                    <label className="text">Medium (check all that apply):</label>
                    <div>
                        <label>
                            <span>Design & Illustration</span><input className="checkbox" type="checkbox" />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Digital Art</span><input className="checkbox" type="checkbox" />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Drawing</span><input className="checkbox" type="checkbox" />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Painting & Mixed Media</span><input className="checkbox" type="checkbox" />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Photography</span><input className="checkbox" type="checkbox" />
                        </label>
                    </div>

                    <div>
                        <label className="text">Social Media Handles</label>
                        <input className="text" type="text" placeholder="@" name="Profile" rref={register({required: true, pattern: /^@/i })} />
                    </div>

                    <div>
                        <label className="text">Please provide 2-3 sentences about you as an artist.</label>
                        <textarea className="text" placeholder="Artist Bio" name="Bio" ref={register({required: true, maxLength: 500})} />
                    </div>

                    {/* Radio group. If you choose one, disable the other one. */}
                    <label className="text">We welcome all artists who support our cause. We especially want to highlight and celebrate Black artists. How do you identify?</label>
                    <div>
                        <label>
                            <input className="radio" type="radio" /><span>I identify as a Black Artist</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="radio" type="radio" /><span>I identify as a non Black Ally</span>
                        </label>
                    </div>

                    <div className="row">
                        <div clasName="column">
                            <label className="text">Where are you located?</label> 
                            <input className="text" type="text" placeholder="City, Country" name="location" ref={register({required: true, max: 30, min: 2})} />
                        </div>
                        <div className="column">
                            <label className="text">Is there anything else you'd like us to know?</label> 
                            <input className="text" type="text" placeholder="Other info" name="other" ref={register({required: false, max: 30, min: 2})} />
                        </div>
                    </div>

                    <div>
                        <label>
                            <span>Are you willing to be contacted for non-monetary exchanges for your art?</span><input className="checkbox" type="checkbox" />
                        </label>
                    </div>

                    <div>
                        <label>
                            <span>Are you willing to allow people to digitally download your art?</span><input className="checkbox" type="checkbox" />
                        </label>
                    </div>

                    <div>
                        <label>
                            <span>Agree to Code of Conduct </span><input className="checkbox" type="checkbox" placeholder="CodeofConduct" name="CodeofConduct" ref={register} />
                        </label>
                    </div>

                    <PrimaryButton onclick={onSubmit} > Submit </PrimaryButton>
                    {/* modal to confirm code of conduct for new artists */}
                    </div>
                    
                    
            </Form>
        </div>
    )
}

export default ArtistForm