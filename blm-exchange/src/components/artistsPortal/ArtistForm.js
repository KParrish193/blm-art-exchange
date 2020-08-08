import React from 'react'

import { Link } from 'react-router-dom';
import { PrimaryButton, Form} from '../../global styles/index';
import { useForm } from 'react-hook-form';

function validateForm() {
    {/* Custom validation for medium checkbox group. */}
    var mediumCheckboxes = document.getElementsByName("medium");
    var validMedium = false;

    for (var i = 0, len = mediumCheckboxes.length; i < len; i++) {
        if (mediumCheckboxes[i].checked) {
            validMedium = true;
            break;
        }
    }
    if (!validMedium) console.error('Please check at least one medium.');

    {/* Custom validation for Black artist radio button group. */}
    var blackArtistRadio = document.getElementsByName("blackArtist");
    var validArtistResponse = false;

    var j = 0;
    while (!validArtistResponse && j < blackArtistRadio.length) {
        if (blackArtistRadio[j].checked) validArtistResponse = true;
        j++;
    }
    if (!validArtistResponse) console.error("Please check one option.");

    {/* Custom validation for LGBTQIA+ artist radio button group. */}
    var lgbtqiaArtistRadio = document.getElementsByName("lgbtqiaArtist");
    var validLgbtqiaRadio = false;

    var k = 0;
    while (!validLgbtqiaRadio && k < lgbtqiaArtistRadio.length) {
        if (validLgbtqiaRadio[k].checked) validLgbtqiaRadio = true;
        k++;
    }
    if (!validLgbtqiaRadio) console.error("Please check one option.");

}

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
                    
                    <p className="instructions">
                        Join our team of artists and help make an impact! If you are interested in being a featured artist on the ArtxBLM website, 
                        please fill out this form. For any questions, reach out to artxblmcollective@gmail.com. We cannot accept artworks that have 
                        copyrighted material (cartoon characters, branded logos, etc.). Please also note that dimensions for prints will be 5x7", 8x10", 
                        and 11x14" so make sure that your artwork will be able to fit these dimensions. You may upload 1 - 5 works. * indicates a required field.</p>
                    
                    <p className="instructions">Read the <Link to="/coc" style={{color: "#037963"}}>Code of Conduct</Link>.</p>

                    <div className="row">
                        <div className="column">
                            <label for="firstName" className="text main"><b>First Name: *</b></label> 
                            <input className="text" type="text" placeholder="First Name" name="firstName" ref={register({ required: true, maxLength: 30, minLength: 2 })} />
                            {errors.firstName && errors.firstName.type === "required" && <span className="error">First name is required.</span>}
                            {errors.firstName && errors.firstName.type === "maxLength" && <span className="error">Length of first name must be between 2 and 30 characters.</span>}
                            {errors.firstName && errors.firstName.type === "minLength" && <span className="error">Length of first name must be between 2 and 30 characters.</span>}
                        </div>
                        <div className="column">
                            <label className="text main"><b>Last Name: *</b></label>
                            <input className="text" type="text" placeholder="Last Name" name="lastName" ref={register({ required: true, maxLength: 30, minLength: 2})} />
                            {errors.lastName && errors.lastName.type === "required" && <span className="error">Last name is required.</span>}
                            {errors.lastName && errors.lastName.type === "maxLength" && <span className="error">Length of last name must be between 2 and 30 characters.</span>}
                            {errors.lastName && errors.lastName.type === "minLength" && <span className="error">Length of last name must be between 2 and 30 characters.</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="column">
                            <label className="text main"><b>E-mail: *</b></label>
                            <input className="text" type="text" placeholder="E-mail" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                            {errors.email && errors.email.type === "required" && <span className="error">E-mail is required.</span>}
                            {errors.email && errors.email.type === "pattern" && <span className="error">Please use proper e-mail format.</span>}
                        </div>
                        <div className="column">
                            <label className="text main"><b>Pronouns: *</b></label>
                            <input className="text" type="text" placeholder="Pronouns" name="pronouns" ref={register({required: true})} />
                            {errors.pronouns && errors.pronouns.type === "required" && <span className="error">Pronouns are required.</span>}
                        </div>
                    </div>

                    {/* Checkbox group. User must select at least one medium. */}
                    <label className="text main"><b>Medium (check all that apply): *</b></label>
                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" name="medium" ref={register({required: false, validate: validateForm })}/><span>Design & Illustration</span>
                            {errors.medium && errors.medium.type === "validate" && <span className="error">Please check at least one medium.</span>}
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" name="medium" ref={register({required: false, validate: validateForm })}/><span>Digital Art</span>
                            {errors.medium && errors.medium.type === "validate" && <span className="error">Please check at least one medium.</span>}
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" name="medium" ref={register({required: false, validate: validateForm })}/><span>Drawing</span>
                            {errors.medium && errors.medium.type === "validate" && <span className="error">Please check at least one medium.</span>}
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" name="medium" ref={register({required: false, validate: validateForm })}/><span>Painting & Mixed Media</span>
                            {errors.medium && errors.medium.type === "validate" && <span className="error">Please check at least one medium.</span>}
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" name="medium" ref={register({required: false, validate: validateForm })}/><span>Photography</span>
                            {errors.medium && errors.medium.type === "validate" && <span className="error">Please check at least one medium.</span>}
                        </label>
                    </div>

                    <div>
                        <label className="text main"><b>Social Media Handles</b></label>
                        <input className="text" type="text" placeholder="@" name="profile" ref={register({required: false, pattern: /^[^@]+$/ })} />
                        {errors.profile && errors.profile.type == "pattern" && <span className="error">Do not include the @ symbol in your entry.</span>}
                    </div>

                    <div>
                        <label className="text main"><b>Please provide 2-3 sentences about you as an artist. *</b></label>
                        <textarea className="text" placeholder="Artist Bio" name="bio" ref={register({required: true, maxLength: 500})} />
                        {errors.bio && errors.bio.type === "required" && <span className="error">Artist bio is required.</span>}
                        {errors.bio && errors.bio.type === "maxLength" && <span className="error">Bio must be shorter than 500 characters.</span>}
                    </div>

                    {/* Radio group. If you choose one, disable the other one. */}

                    <div className="row">
                        <div className="column">
                            <label className="text main"><b>We welcome all artists who support our cause. We especially want to highlight and celebrate Black artists. How do you identify? *</b></label>
                        </div>

                        <div className="column">
                            <div>
                                <label>
                                    <input className="radio" type="radio" name="blackArtist"/><span>I identify as a Black Artist.</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input className="radio" type="radio" name="blackArtist"/><span>I identify as a non Black Ally.</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="column">
                            <label className="text main"><b>We want to highlight art by the LGBTQIA+ community as well. How do you identify?</b></label>
                        </div>
                        
                        <div className="column">
                            <div>
                                <label>
                                    <input className="radio" type="radio" name="lgbtqiaArtist"/><span>I identify as an LGBTQIA+ artist.</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input className="radio" type="radio" name="lgbtqiaArtist"/><span>I do not identify as an LGBTQIA+ artist.</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="text main"><b>Where are you located?</b></label> 
                        <input className="text" type="text" placeholder="City, Country" name="location" ref={register({required: true, max: 30, min: 2})} />
                    </div>

                    { /* File upload */}
                    <label className="text main"><b>Upload your work here along with the respective titles and descriptions. You are required to upload at least one work.</b></label>
                    <div className="row">
                        <div className="column">
                            <label className="text">Title of Work 1: *</label>
                            <input className="text" type="text" placeholder="Title of Work 1" name="title1" ref={register({ required: true, maxLength: 50})}/>
                            {errors.title1 && errors.title1.type === "required" && <span className="error">Title is required.</span>}
                            {errors.title1 && errors.title1.type === "maxLength" && <span className="error">Title must be shorter than 50 characters.</span>}
                        </div>
                        <div className="column">
                            <label className="text">Upload Work 1 here: *</label>
                            <input type="file" name="file1" ref={register({ required: true })}/>
                            {errors.file1 && errors.file1.type === "required" && <span className="error">You must upload at least one work.</span>}
                        </div>
                    </div>

                    <div>
                        <label className="text">Description of Work 1: *</label>
                        <input className="text" type="text" placeholder="Description of Work 1" name="description1" ref={register({ required: true, maxLength: 250})}/>
                        {errors.description1 && errors.description1.type === "required" && <span className="error">Description is required.</span>}
                        {errors.description1 && errors.description1.type === "maxLength" && <span className="error">Description must be shorter than 250 characters.</span>}
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
                        <label className="main">
                            <input className="checkbox" type="checkbox" placeholder="CodeofConduct" name="coc" ref={register({ required: true })} /><span><b>Agree to <Link to="/coc" style={{color: "#037963", fontWeight: "bold" }}>Code of Conduct</Link></b></span>
                            {errors.coc && errors.coc.type === "required" && <span className="error">You must agree to the Code of Conduct.</span>}
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