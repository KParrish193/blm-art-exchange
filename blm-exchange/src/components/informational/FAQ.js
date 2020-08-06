import React from 'react';
import AboutNav from './AboutNav';
import { Link } from 'react-router-dom';
import { AboutUsContainer, FAQTextContainer } from '../../global styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function FAQ(){
    return(
            <AboutUsContainer>
            <FAQTextContainer>
            <AboutNav/>
            <h3><b>Frequently Asked Questions</b></h3>
            <div>
                {/* Question 1 */}
                <ExpansionPanel style={{position: 'static'}}>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>   
                        <h6>Where is my money going?</h6>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{backgroundColor: 'black', color: 'white'}}>
                            <p>
                            ArtxBLM will be monitoring funds weekly to determine organizations that need monetary assistance. 
                            This means that week-by-week, urgency will be assessed and we will make sure that your donations 
                            are getting to the organizations and people who need it most. All donations will be distributed 
                            to uphold our value of supporting Black lives: this means money may be sent to bail funds, nonprofits, 
                            memorial funds and Black-owned businesses, among other recipients. We are committed to transparency and understand the importance of knowing where your donations are going. 
                            Accordingly, we will publish weekly reports of how money is being distributed. You can see this progress 
                            updated on our home page.
                            </p>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                {/* Question 2 */}
                <ExpansionPanel style={{position: 'static'}}>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h6>How would I go about requesting custom artwork?</h6>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>
                        Some artists in the collective will make custom artworks in exchange for demonstrations of support, 
                        including non-monetary demonstrations such as signing petitions or attending protests. If you are 
                        interested in requesting a custom artwork, you can filter by ‘non-monetary exchange’ on our artist 
                        page and reach out directly through the inquiry form on those artist’s pages.
                        </p>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                {/* Question 3 */}
                <ExpansionPanel style={{position: 'static'}}>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h6>How can I join ArtxBLM as an artist?</h6>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>
                            We’re happy to have you! If you are interested in joining ArtxBLM as an artist, 
                            please complete the <Link to="/artist/sign-up" className="FAQ-link">Artist Registration </Link> form here.
                        </p>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                {/* Question 4 */}
                <ExpansionPanel style={{position: 'static'}}>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h6>Can I support ArtxBLM without money?</h6>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>
                            Yes! Here at ArtxBLM we acknowledge that financial support is a privilege, and that there are many 
                            people who support the cause but are not able to make donations. Many of our artists are registered 
                            to accept non-monetary donations such as proof of:
                            <ul>
                                <li>Attending a local protest</li>
                                <li>Signing a specified number of petitions</li>
                                <li>Calling / emailing a representative</li>
                            </ul>
                            Just filter by ‘non-monetary exchange’ and reach out directly through the inquiry form on select artist’s 
                            pages. You can then communicate directly with artists to agree upon an exchange.
                        </p>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                {/* Question 5 */}
                <ExpansionPanel style={{position: 'static'}}>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h6>How are the prints priced?</h6>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>
                            <ul>
                                <li>$10 for a 5x7 print</li>
                                <li>$25 for an 8x10 print</li>
                                <li>$50 for an 11x14 print</li>
                            </ul>
                            <i>Note that sizes are in inches.</i>
                        </p>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                {/* Question 6 */}
                <ExpansionPanel style={{position: 'static'}}>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h6>What forms of payment do you accept?</h6>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>We accept payments only through PayPal.</p>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                {/* Question 7 */}
                <ExpansionPanel style={{position: 'static'}}>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h6>How much does shipping cost?</h6>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>
                            Shipping is a flat rate of $5 per purchase within the US. If shipping costs less than what you paid 
                            for it, we will donate the difference. 
                        </p>
                    </ExpansionPanelDetails>
                </ExpansionPanel>


                {/* Question 8 */}
                <ExpansionPanel style={{position: 'static'}}>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h6>What is the quality of the prints?</h6>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>
                            We are using Mpix to make our prints. All prints will be on Giclee paper with a textured matte finish. All prints will be 
                            260 dpi at minimum, unless otherwise noted.
                        </p>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                {/* Question 9 */}
                <ExpansionPanel style={{position: 'static'}}>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h6>Will the images be cropped?</h6>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>
                            By default, the images will be full bleed and slightly cropped to fit the aspect ratio of your print. If a contributor specifically 
                            requested to maintain the original aspect ratio, it will be noted in the description and the print will maintain a half-inch white border.
                        </p>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                {/* Question 10 */}
                <ExpansionPanel style={{position: 'static'}}>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h6>How much will it cost to produce the prints?</h6>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>
                            We want to make sure your prints are high-quality, but also maximize the proceeds donated from this sale. As such, 
                            the prints will cost a small percentage of your purchase. Our contributors have generously chipped in to cover a portion of 
                            the production cost, so that percentage will be very low.
                        </p>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                {/* Question 11 */}
                <ExpansionPanel style={{position: 'static'}}>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h6>How long will it take to get my prints?</h6>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>
                            We will place orders every [day], from which point it should take an average of 10 days. Expect your print within two weeks of 
                            placing an order and we will send out updates.
                        </p>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                {/* Question 12 */}
                <ExpansionPanel style={{position: 'static'}}>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h6>Can I return or get a refund?</h6>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>
                            Unfortunately we cannot accept returns or refunds, as profits will be donated directly to the recipients we choose. If there is an 
                            issue with your print or order, please contact us at <a href="mailto:artxblmcollective@gmail.com" className="FAQ-link">artxblmcollective@gmail.com</a>.
                        </p>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                {/* Question 13 */}
                <ExpansionPanel style={{position: 'static'}}>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h6>Any other questions?</h6>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{backgroundColor: 'black', color: 'white'}}>

                        <p>
                            Get in touch at <a href="mailto:artxblmcollective@gmail.com" className="FAQ-link">artxblmcollective@gmail.com</a>.
                        </p>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

            </div>
        </FAQTextContainer>    
        </AboutUsContainer>
    )
}

export default FAQ