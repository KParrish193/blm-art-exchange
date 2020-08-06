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

                    <div>
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

                    <div>
                        <label>Artist Bio:  </label>
                        <textarea placeholder="Bio" name="Bio" ref={register({required: true, maxLength: 500})} />
                    </div>

                    <label htmlFor="material-switch">
                        <span>I am a Black Artist</span>
                        <Switch
                            onColor="#86d3ff"
                            onHandleColor="#2693e6"
                            handleDiameter={30}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={20}
                            width={48}
                            className="react-switch"
                            id="material-switch"
                        />
                    </label>

                    <label htmlFor="material-switch">
                        <span>Are you willing to be contacted for non-monetary exchanges for your art?</span>
                        <Switch
                            onColor="#86d3ff"
                            onHandleColor="#2693e6"
                            handleDiameter={30}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={20}
                            width={48}
                            className="react-switch"
                            id="material-switch"
                        />
                    </label>
                    
                    <FormControlLabel label="I am a Black Artist" control={<Switch color="primary" />}/>

                    <FormControlLabel label="Are you willing to be contacted for non-monetary exchanges for your art?" control={<Switch color="primary" />}/>

                    <FormControlLabel label="Are you willing to allow people to digitally download your art?" control={<Switch color="primary" />}/>

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
                        <label>Social Media</label>
                        <input type="text" placeholder="Profile" name="Profile" ref={register} />
                    </div>

                    <div className="row">
                        <div className="column">
                            <label>Agree to Code of Conduct: </label>
                            <input type="checkbox" placeholder="CodeofConduct" name="CodeofConduct" ref={register} />
                        </div>
                    </div>

                    <PrimaryButton onclick={onSubmit} > Submit </PrimaryButton>
                    {/* modal to confirm code of conduct for new artists */}
                    </div>
                    
                    
            </Form>
        </div>
    )
}

export default ArtistForm