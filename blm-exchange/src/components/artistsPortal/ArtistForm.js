import React from 'react'

import { Link } from 'react-router-dom';
import { PrimaryButton, Form} from '../../global styles/index';
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
                <div className="form-container">
                    <h3>Artist Registration</h3>
                    <p className="instructions">Explain our process here. Something about reading and agreeing to the Code of Conduct. Evaluating and stuff idk lots of words here. Def explain non-donation exchange.</p>
                    <p className="instructions">Read the <Link to="/artist/coc" style={{color: "#037963"}}>Code of Conduct</Link>.</p>
                    <div className="row">
                        <div className="column">
                            <label className="text"><b>First Name:</b></label> 
                            <input className="text" type="text" placeholder="First Name" name="FirstName" ref={register({required: true, max: 30, min: 2})} />
                        </div>
                        <div className="column">
                            <label className="text"><b>Last Name:</b></label>
                            <input className="text" type="text" placeholder="Last Name" name="LastName" ref={register({max: 30, min: 2})} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="column">
                        <label className="text"><b>E-mail: </b></label>
                        <input className="text" type="text" placeholder="E-mail" name="E-mail" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                        </div>
                        <div className="column">
                            <label className="text"><b>Pronouns:</b></label>
                            <input className="text" type="text" placeholder="Pronouns" name="Pronouns" ref={register({required: true, min: 8})} />
                        </div>
                    </div>

                    {/* Checkbox group */}
                    <label className="text"><b>Medium (check all that apply):</b></label>
                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" /><span>Design & Illustration</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" /><span>Digital Art</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" /><span>Drawing</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" /><span>Painting & Mixed Media</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" /><span>Photography</span>
                        </label>
                    </div>

                    <div>
                        <label className="text"><b>Social Media Handles</b></label>
                        <input className="text" type="text" placeholder="@" name="Profile" rref={register({required: true, pattern: /^@/i })} />
                    </div>

                    <div>
                        <label className="text"><b>Please provide 2-3 sentences about you as an artist.</b></label>
                        <textarea className="text" placeholder="Artist Bio" name="Bio" ref={register({required: true, maxLength: 500})} />
                    </div>

                    {/* Radio group. If you choose one, disable the other one. */}
                    <label className="text"><b>We welcome all artists who support our cause. We especially want to highlight and celebrate Black artists. How do you identify?</b></label>
                    <div>
                        <label>
                            <input className="radio" type="radio" /><span>I identify as a Black Artist.</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="radio" type="radio" /><span>I identify as a non Black Ally.</span>
                        </label>
                    </div>

                    <label className="text"><b>We want to highlight art by the LGBTQIA+ community as well. How do you identify?</b></label>
                    <div>
                        <label>
                            <input className="radio" type="radio" /><span>I identify as an LGBTQIA+ artist.</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="radio" type="radio" /><span>I do not identify as an LGBTQIA+ artist.</span>
                        </label>
                    </div>

                    <div>
                        <label className="text"><b>Where are you located?</b></label> 
                        <input className="text" type="text" placeholder="City, Country" name="location" ref={register({required: true, max: 30, min: 2})} />
                    </div>

                    { /* File upload */}
                    <label><b>Upload your work here along with the respective titles and descriptions. You are required to upload at least one work.</b></label>
                    <div className="row">
                        <div className="column">
                            <label className="text">Title of Work 1:</label>
                            <input className="text" type="text" placeholder="Title of Work 1"/>
                        </div>
                        <div className="column">
                            <label className="text">Upload Work 1 here:</label>
                            <input type="file" />
                        </div>
                    </div>

                    <div>
                        <label className="text">Description of Work 1:</label>
                        <input className="text" type="text" placeholder="Description of Work 1"/>
                    </div>

                    <div className="row">
                        <div className="column">
                            <label className="text">Title of Work 2:</label>
                            <input className="text" type="text" placeholder="Title of Work 2"/>
                        </div>
                        <div className="column">
                            <label className="text">Upload Work 2 here:</label>
                            <input type="file" />
                        </div>
                    </div>

                    <div>
                        <label className="text">Description of Work 2:</label>
                        <input className="text" type="text" placeholder="Description of Work 2"/>
                    </div>

                    <div className="row">
                        <div className="column">
                            <label className="text">Title of Work 3:</label>
                            <input className="text" type="text" placeholder="Title of Work 3"/>
                        </div>
                        <div className="column">
                            <label className="text">Upload Work 3 here:</label>
                            <input type="file" />
                        </div>
                    </div>

                    <div>
                        <label className="text">Description of Work 3:</label>
                        <input className="text" type="text" placeholder="Description of Work 3"/>
                    </div>

                    <div className="row">
                        <div className="column">
                            <label className="text">Title of Work 4:</label>
                            <input className="text" type="text" placeholder="Title of Work 4"/>
                        </div>
                        <div className="column">
                            <label className="text">Upload Work 4 here:</label>
                            <input type="file" />
                        </div>
                    </div>

                    <div>
                        <label className="text">Description of Work 4:</label>
                        <input className="text" type="text" placeholder="Description of Work 4"/>
                    </div>

                    <div className="row">
                        <div className="column">
                            <label className="text">Title of Work 5:</label>
                            <input className="text" type="text" placeholder="Title of Work 5"/>
                        </div>
                        <div className="column">
                            <label className="text">Upload Work 5 here:</label>
                            <input type="file" />
                        </div>
                    </div>

                    <div>
                        <label className="text">Description of Work 5:</label>
                        <input className="text" type="text" placeholder="Description of Work 5"/>
                    </div>

                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" placeholder="CodeofConduct" name="CodeofConduct" ref={register} /><span><b>Agree to Code of Conduct</b></span>
                        </label>
                    </div>
                </div> 

                <PrimaryButton onclick={onSubmit}>Submit</PrimaryButton>
                {/* modal to confirm code of conduct for new artists */}
            </Form>
        </div>
    )
}

export default ArtistForm