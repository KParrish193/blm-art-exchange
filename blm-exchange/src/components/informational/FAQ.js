import React from 'react';
import AboutNav from './AboutNav';
import { Link } from 'react-router-dom';
import { AboutUsContainer, FAQTextContainer } from '../../global styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function FAQ(){
    return(
            <AboutUsContainer>
            <FAQTextContainer>
            <AboutNav/>
            <h3><b>Frequently Asked Questions</b></h3>
            <div>
                {/* Question 1 */}
                <Accordion style={{position: 'static'}}>
                    <AccordionSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>   
                        <h5>Where is my money going?</h5>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor: 'black', color: 'white'}}>
                            <p>
                                ARTXBLM will be monitoring funds monthly to determine organizations that need monetary assistance. This means that month-by-month, urgency will be assessed and we 
                                will make sure that your money is getting to the organizations and people who need it most. All donations will be distributed to uphold our value of supporting 
                                Black lives: this means money may be sent to bail funds, non-profit organizations, memorial funds and Black-owned businesses, among other recipients.<br/>
                                <br/>
                                We are committed to transparency and understand the importance of knowing where your donations are going. Accordingly, we will publish monthly reports of how money is 
                                being distributed. You can see this progress updated on our home page. 
                            </p>
                    </AccordionDetails>
                </Accordion>

                {/* Question 2 */}
                <Accordion style={{position: 'static'}}>
                    <AccordionSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h5>How can I join ArtxBLM as an artist?</h5>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>
                            We’re happy to have you! If you are interested in joining ArtxBLM as an artist, 
                            please complete the <Link to="/artist/sign-up" className="FAQ-link">Artist Registration </Link> form here.
                        </p>
                    </AccordionDetails>
                </Accordion>


                {/* Question 3 */}
                <Accordion style={{position: 'static'}}>
                    <AccordionSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h5>How are the prints priced?</h5>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>Prints are priced solely off of print size as listed below:<br/>
                            <br/>
                            <ul>
                                <li>$15 for a 5x7 in/ 13 x 18 cm</li>
                                <li>$25 for an 8x10 in / 20.3 x 25.4 cm</li>
                                <li>$25 for 8 x 8 in/ 20.3 x 20.3 cm</li>
                                <li>$50 for an 11x14 in/ 27.9 x 35.6</li>
                            </ul>
                        </p>
                    </AccordionDetails>
                </Accordion>

                {/* Question 4 */}
                <Accordion style={{position: 'static'}}>
                    <AccordionSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h5>What is included in the cost of my print?</h5>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>
                            The cost of your print includes the cost of printing, shipping, and transaction fees. All additional costs are going to our recipients.
                        </p>
                    </AccordionDetails>
                </Accordion>

                {/* Question 5 */}
                <Accordion style={{position: 'static'}}>
                    <AccordionSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h5>What forms of payment do you accept?</h5>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>
                            We accept payments with any major credit or debit card including Visa, MasterCard, Maestro, American Express, Apple Pay, and Google Pay. We also accept payment through PayPal.
                        </p>
                    </AccordionDetails>
                </Accordion>

                {/* Question 6 */}
                <Accordion style={{position: 'static'}}>
                    <AccordionSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h5>What is the quality of the prints?</h5>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>
                        Printing is done by <a href="https://www.mpix.com/" className="FAQ-link">MPix</a> for quality fine art prints. All prints are printed using the Giclee process on paper with a high gloss finish to provide vibrant high-resolution prints! 
                        Images will be full bleed with no border or frame included. Images will be cropped to fit the aspect ratio of prints as necessary.
                        </p>
                    </AccordionDetails>
                </Accordion>

                {/* Question 7 */}
                <Accordion style={{position: 'static'}}>
                    <AccordionSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h5>How long will it take to get my prints?</h5>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>
                            We will place orders twice a week, from which point it takes 1 – 2 business days in lab plus an average of 10 days shipping. Expect your print within 2-3 weeks of placing an order; however, 
                            delays due to COVID-19 and changes to the U.S. Postal Service may cause this time to be longer. We appreciate your patience in these situations, and will keep you informed with tracking details 
                            when your order has been shipped.
                        </p>
                    </AccordionDetails>
                </Accordion>

                {/* Question 8 */}
                <Accordion style={{position: 'static'}}>
                    <AccordionSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h5>What do I do if there is an issue with my print?</h5>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <p>
                            If there are issues with your print or order, you can reach out directly to <a href="https://www.mpix.com/help/contact" className="FAQ-link">MPix Customer Support</a> with your order for support. 
                            If you encounter any issues with MPix, please also reach out to us at <a href="mailto:artxblmcollective@gmail.com" className="FAQ-link">artxblmcollective@gmail.com</a> and we will be happy to help.
                        </p>
                    </AccordionDetails>
                </Accordion>

                {/* Question 9 */}
                <Accordion style={{position: 'static'}}>
                    <AccordionSummary 
                    expandIcon={<ExpandMoreIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>  
                        <h5>Any other questions?</h5>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor: 'black', color: 'white'}}>

                        <p>
                            Get in touch at <a href="mailto:artxblmcollective@gmail.com" className="FAQ-link">artxblmcollective@gmail.com</a>!
                        </p>
                    </AccordionDetails>
                </Accordion>

            </div>
        </FAQTextContainer>    
        </AboutUsContainer>
    )
}

export default FAQ