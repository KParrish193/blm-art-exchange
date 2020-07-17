import React from 'react'

import CoC from './CodeOfConduct';

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
                <h3>Artist Sign-Up</h3>
                <p className="instructions">Instructions. Artist Sign up. Or whatever. Directions Directions directions.</p>
                <p>Read the <Link to="/artist/coc">Code of Conduct</Link>.</p>
                <ToggleSignUp> Already have an artist account?<Link to="/artist/login"> Login </Link></ToggleSignUp>
                
                
                <div className="form-container">

                <div>
                <label>E-mail:  </label>
                <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                </div>

                <div>
                <label>Password:  </label>
                <input type="text" placeholder="Password" name="Password" ref={register({required: true, min: 8})} />
                </div>

                <div>
                <label>First Name:  </label>
                <input type="text" placeholder="First Name" name="FirstName" ref={register({required: true, max: 30, min: 2})} />
                </div>

                <div>
                <label>Last Name:  </label>
                <input type="text" placeholder="Last Name" name="LastName" ref={register({max: 30, min: 2})} />
                </div>

                <div>
                <label>Artist Bio:  </label>
                <input type="text" placeholder="Bio" name="Bio" ref={register({required: true, maxLength: 500})} />
                </div>

                <div>
                <p>Are you a Black Artist?</p>
                <input type="checkbox" placeholder="BlackArtist" name="BlackArtist" ref={register} />
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
                <label>Media Profiles:  </label>
                <select name="ProfileType" ref={register({ required: true })}>
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Dribbble">Dribbble</option>
                    <option value="Portfolio">Personal Portfolio Site</option>
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