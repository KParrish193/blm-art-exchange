import React from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';
import { PrimaryButton, Form} from '../../global styles/index';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import { CodeOfConductContainer, CodeOfConductTextContent, EmailLink } from '../../global styles/index';



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
    if (!validMedium) {
        document.getElementById('error-message-checkbox').innerHTML = "Please check at least one medium.";
    } else {
        //Clear the error once at least one selection has been made
        document.getElementById('error-message-checkbox').innerHTML = null;
    }

    {/* Custom validation for Black artist radio button group. */}
    var blackArtistRadio = document.getElementsByName("blackArtist");
    var validArtistResponse = false;
    
    var j = 0;
    while (!validArtistResponse && j < blackArtistRadio.length) {
        if (blackArtistRadio[j].checked) validArtistResponse = true;
        j++;
    }
    if (!validArtistResponse) {
        document.getElementById('error-message-radio').innerHTML = "Please select one option.";
    } else {
        //Clear the error once at least one selection has been made
        document.getElementById('error-message-radio').innerHTML = null;
    }
}

function ArtistForm(props){
    const { register, handleSubmit, errors } = useForm();

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open]);
    
    const onSubmit = data => 
        axios
            .post("https://artxblm-backend.herokuapp.com/artist", data)
            .then (response => {
                console.log(response);
                props.history.push('/artist/thank-you')
            })
            .catch(err => 
                console.log(err.response)
            )
    // edit onsubmit to post to artist endpoint

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
                            <label for="firstName" className="text main">First Name: *</label> 
                            <input className="text" type="text" placeholder="First Name" name="firstName" ref={register({ required: true, maxLength: 30, minLength: 2 })} />
                            {errors.firstName && errors.firstName.type === "required" && <span className="error">First name is required.</span>}
                            {errors.firstName && errors.firstName.type === "maxLength" && <span className="error">Length of first name must be between 2 and 30 characters.</span>}
                            {errors.firstName && errors.firstName.type === "minLength" && <span className="error">Length of first name must be between 2 and 30 characters.</span>}
                        </div>
                        <div className="column">
                            <label className="text main">Last Name: *</label>
                            <input className="text" type="text" placeholder="Last Name" name="lastName" ref={register({ required: true, maxLength: 30, minLength: 2})} />
                            {errors.lastName && errors.lastName.type === "required" && <span className="error">Last name is required.</span>}
                            {errors.lastName && errors.lastName.type === "maxLength" && <span className="error">Length of last name must be between 2 and 30 characters.</span>}
                            {errors.lastName && errors.lastName.type === "minLength" && <span className="error">Length of last name must be between 2 and 30 characters.</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="column">
                            <label className="text main">E-mail: *</label>
                            <input className="text" type="text" placeholder="E-mail" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                            {errors.email && errors.email.type === "required" && <span className="error">E-mail is required.</span>}
                            {errors.email && errors.email.type === "pattern" && <span className="error">Please use proper e-mail format.</span>}
                        </div>
                        <div className="column">
                            <label className="text main">Pronouns: *</label>
                            <input className="text" type="text" placeholder="Pronouns" name="pronouns" ref={register({required: true})} />
                            {errors.pronouns && errors.pronouns.type === "required" && <span className="error">Pronouns are required.</span>}
                        </div>
                    </div>

                    {/* Checkbox group. User must select at least one medium. */}
                    <label className="text main">Medium (check all that apply): *</label><span id="error-message-checkbox" className="error"></span>
                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" name="medium" ref={register({validate: validateForm})}/><span>Design & Illustration</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" name="medium" ref={register({validate: validateForm})}/><span>Digital Art</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" name="medium" ref={register({validate: validateForm})}/><span>Drawing</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" name="medium" ref={register({validate: validateForm})}/><span>Painting & Mixed Media</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" name="medium" ref={register({validate: validateForm})}/><span>Photography</span>
                        </label>
                    </div>

                    <div>
                        <label className="text main">Social Media Handles</label>
                        <input className="text" type="text" placeholder="@" name="profile" ref={register({required: false, pattern: /^[^@]+$/ })} />
                        {errors.profile && errors.profile.type === "pattern" && <span className="error">Do not include the @ symbol in your entry.</span>}
                    </div>

                    <div>
                        <label className="text main">Please provide 2-3 sentences about you as an artist. *</label>
                        <textarea className="text" placeholder="Artist Bio" name="bio" ref={register({required: true, maxLength: 500})} />
                        {errors.bio && errors.bio.type === "required" && <span className="error">Artist bio is required.</span>}
                        {errors.bio && errors.bio.type === "maxLength" && <span className="error">Bio must be shorter than 500 characters.</span>}
                    </div>

                    {/* Radio group. If you choose one, disable the other one. */}

                    <div className="row">
                        <div className="column">
                            <label className="text main">We welcome all artists who support our cause. We especially want to highlight and celebrate Black artists. How do you identify? *</label><span id="error-message-radio" className="error"></span>
                        </div>

                        <div className="column">
                            <div>
                                <label>
                                    <input className="radio" type="radio" name="blackArtist" ref={register({validate: validateForm})}/><span>I identify as a Black Artist.</span>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input className="radio" type="radio" name="blackArtist" ref={register({validate: validateForm})}/><span>I identify as a non Black Ally.</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="text main">Where are you located?</label> 
                        <input className="text" type="text" placeholder="City, Country" name="location" ref={register({required: true, max: 30, min: 2})} />
                    </div>

                    { /* File upload */}
                    {/* will need to likely nest a second form into the first form to submit to prints end point */}
                    <label className="text main">Upload your work here along with the respective titles and descriptions. You are required to upload at least one work.</label>
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
                        <input className="text" type="text" placeholder="Description of Work 1" name="description1" ref={register({ required: true, maxLength: 140})}/>
                        {errors.description1 && errors.description1.type === "required" && <span className="error">Description is required.</span>}
                        {errors.description1 && errors.description1.type === "maxLength" && <span className="error">Description must be shorter than 140 characters.</span>}
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
                        <input className="text" type="text" placeholder="Description of Work 2" name="description2" ref={register({maxLength: 140})}/>
                        {errors.description2 && errors.description2.type === "maxLength" && <span className="error">Description must be shorter than 140 characters.</span>}
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
                        <input className="text" type="text" placeholder="Description of Work 3" name="description3" ref={register({maxLength: 140})}/>
                        {errors.description3 && errors.description3.type === "maxLength" && <span className="error">Description must be shorter than 140 characters.</span>}
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
                        <input className="text" type="text" placeholder="Description of Work 4" name="description4" ref={register({maxLength: 140})}/>
                        {errors.description4 && errors.description4.type === "maxLength" && <span className="error">Description must be shorter than 140 characters.</span>}
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
                        <input className="text" type="text" placeholder="Description of Work 5" name="description5" ref={register({maxLength: 140})}/>
                        {errors.description5 && errors.description5.type === "maxLength" && <span className="error">Description must be shorter than 140 characters.</span>}
                    </div>

                    <div>
                        <label className="main">
                            <input className="checkbox" type="checkbox" placeholder="CodeofConduct" name="coc" ref={register({ required: true })} /><span>Agree to <a className="coc" onClick={handleClickOpen('paper')} style={{color: "#037963", fontWeight: "bold" }}>Code of Conduct</a></span>
                            {errors.coc && errors.coc.type === "required" && <span className="error">You must agree to the Code of Conduct.</span>}
                        </label> 
                        
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          scroll={scroll}
                          aria-labelledby="scroll-dialog-title"
                          aria-describedby="scroll-dialog-description"
                        >
                          <DialogTitle id="scroll-dialog-title">Code of Conduct: Our Values</DialogTitle>
                          <DialogContent dividers={scroll === 'paper'}>
                            <DialogContentText
                              id="scroll-dialog-description"
                              ref={descriptionElementRef}
                              tabIndex={-1}
                            >
                            <p>
                                We expect all parties participating in ArtxBLM - including but not limited to leadership, 
                                artists, and supporters - to uphold our core values as laid out below. We take these values 
                                very seriously, as they guide the operations of ArtxBLM as a community.
                            </p>
                            <ul>
                                <li>
                                    <b>Reflexivity: </b>We believe that knowledge is dynamic, that one can never be done learning, and 
                                    it is our responsibility to both ensure our decisions are founded in reliable information and to constantly 
                                    be working to learn more. As we learn more, we are more than willing to revise our decisions and update them to 
                                    reflect current knowledge. Our operations are guided by this principle, meaning that we will regularly 
                                    review decisions regarding how we communicate with artists and distribute funds. We expect all artists participating 
                                    in ArtxBLM to do the same, to consider how their artwork may be perceived and make decisions as creators to 
                                    ensure that artwork is not offensive, tone-deaf, or disturbing.
                                    <br />
                                </li>
                                <li>
                                    <b>Accountability: </b>Because knowledge is dynamic, it is important to acknowledge our own learning process. 
                                    It is imperative that as we accumulate knowledge and perspective, we reflect back on any harm our actions 
                                    may have caused to our peers. Therefore, it is our responsibility to listen, hold ourselves accountable and 
                                    change as we reflect. We vow to not just listen and change, but make this process as transparent as possible 
                                    and apologize when we make mistakes. We do not expect perfect conduct from our artists, but we expect an 
                                    atmosphere of accountability and mindfulness of any harm that can be done to people with or without intention. 
                                    Where mistakes have been made we will encourage action-oriented apologies and limit artist’s access to the website.
                                    <br />
                                </li>
                                <li>
                                    <b>Transparency: </b>It is critical that we are transparent in our actions and decisions, because every member of 
                                    the community has a right to this knowledge. We at ArtxBLM will personally vet each of the recipients of our 
                                    donations following periodic discussions about where funds will have the most impact. The pathway of how funds 
                                    are distributed will be made readily accessible, as displayed on our home page. We will use our website and/or 
                                    social media to highlight the importance of donating to the parties identified, and include links back to 
                                    websites and profiles for supporters to learn more. We understand the importance of making these transactions 
                                    transparent so that every person using the website feels confident that their donations are without fail being 
                                    donated to worthy causes. With every purchase, we will communicate through receipt specific information about 
                                    where their money is going.
                                    <br />
                                </li>
                                <li>
                                    <b>Accessibility/Transparency: </b>ArtxBLM strives to be an inclusive and accessible environment for artists, 
                                    supporters, and organizers. We expect artists and organizers to consider accessibility 
                                    & inclusivity regarding the art that is created and shared, the language used, and interactions with one another.  
                                    We must carefully consider how our decisions include or exclude groups and work to combat any inequities proactively. 
                                    For example, we will include image descriptions on artworks, work to provide translations to our ability, and seek to 
                                    highlight artists from underrepresented groups. Any concerns about ArtxBLM being inaccessible or exclusive can 
                                    be directed to <EmailLink><a href="mailto:artxblmcollective@gmail.com">artxblmcollective@gmail.com</a></EmailLink>, 
                                    where we will discuss issues and work to resolve them.
                                    <br />
                                </li>
                                <li>
                                    <b>Community: </b>Here at ArtxBLM, we are a unified collective which operates through collaboration and mutual respect. 
                                    It is important that all members of ArtXBLM feel a sense of belonging, that their opinions are valuable, they are 
                                    respected, and are comfortable collaborating with other members. Within the leadership team, there is no authoritative 
                                    voice; we guide decisions after thorough discussion as a group, and with a specific call for feedback from members of the 
                                    community. Artists are encouraged to network within the community and to communicate freely with supporters. We support 
                                    the autonomy of artists to set their specifications for how they wish to contribute, but expect that they adhere to the 
                                    guidelines set forth in this document. 
                                    <br />
                                </li>
                                <li>
                                    <b>Mindfulness: </b>There is much pain to be expressed and shared and there is power in doing so. We do not want to impose 
                                    toxic positivity on our artists, however we also do not want to excessively traumatize communities that do not need more trauma. 
                                    While we recognize that this narrows the framework for artists to work in, we believe the artists participating in ArtxBLM must 
                                    ask themselves whether the trauma an image may convey is worth the message they want to convey, and whether they are the right 
                                    person to convey this message. We are aware that what may be empowering to one person may be disturbing to another and we do not 
                                    want to silence voices, especially the voices of Black artists. However if we believe an artwork is excessively tone deaf, 
                                    or traumatizing we will seek discourse with the artist and make decisions on whether to keep their artwork on the site based 
                                    on those conversations.
                                    <br />
                                </li>
                                <li>
                                    <b>Longevity: </b>We believe real change is sustainable. ArtxBLM is not just a means to drive donations, but to highlight specific 
                                    artists who are working to dismantle oppressive infrastructures within our communities and create an ongoing support system through 
                                    funding and collaboration with one another. By bringing attention to artist instagrams and profiles, we hope to add to the BLM digital 
                                    community and connect ethical buyers to new friends, mentors, and allies. ArtxBLM is in connection with local artists, organizations, 
                                    and individuals to bolster dialogue and support long after protests have died down. The purpose of our website is to ensure the fight 
                                    for anti-racism is accessible, continuous, and documented. 
                                    <br />
                                </li>
                                <li>
                                    <b>Charity: </b>We want to highlight that we are not-for-profit. We do not take credit for this movement, but we want to ensure that 
                                    support for Black Lives Matter continues long past the current news-cycle. This is the driving principle in the creation of ArtxBLM, 
                                    that we can consistently send financial support to the communities that need it most. ArtxBLM is built off of a group of artists who 
                                    have volunteered their time and talent to contribute to the movement in a creative and valuable way. We have leveraged the belief 
                                    that our actions have worth beyond the amount of money we are able to donate to create this platform.
                                </li>
                            </ul>
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose} color="primary">
                              Cancel
                            </Button>
                            <Button onClick={handleClose} color="primary">
                              I AGREE
                            </Button>
                          </DialogActions>
                        </Dialog>
                    </div>
                </div> 

                <PrimaryButton onclick={onSubmit}>Submit</PrimaryButton>
                {/* modal to confirm code of conduct for new artists */}
            </Form>
        </div>
    )
}

export default ArtistForm