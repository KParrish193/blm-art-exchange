import React from 'react';
import AboutNav from './AboutNav';
import { Link } from 'react-router-dom';
import { AboutUsContainer, FAQTextContainer } from '../../global styles';

function FAQ(){
    return(
            <AboutUsContainer>
            <FAQTextContainer>
            <AboutNav/>
            <h2>Frequently Asked Questions</h2>
            <div>
                {/* Question 1 */}
                <h3><b>Where is my money going?</b></h3>

                <p>
                    ArtxBLM will be monitoring funds weekly to determine organizations that need monetary assistance. 
                    This means that week-by-week, urgency will be assessed and we will make sure that your donations 
                    are getting to the organizations and people who need it most. All donations will be distributed 
                    to uphold our value of supporting Black lives: this means money may be sent to bail funds, nonprofits, 
                    memorial funds and Black-owned businesses, among other recipients.
                </p>

                <p>
                    We are committed to transparency and understand the importance of knowing where your donations are going. 
                    Accordingly, we will publish weekly reports of how money is being distributed. You can see this progress 
                    updated on our home page.
                </p>

                {/* Question 2 */}
                <h3><b>How would I go about requesting custom artwork?</b></h3>

                <p>
                    Some artists in the collective will make custom artworks in exchange for demonstrations of support, 
                    including non-monetary demonstrations such as signing petitions or attending protests. If you are 
                    interested in requesting a custom artwork, you can filter by ‘non-monetary exchange’ on our artist 
                    page and reach out directly through the inquiry form on those artist’s pages.
                </p>

                {/* Question 3 */}
                <h3><b>How can I join ArtxBLM as an artist?</b></h3>

                <p>
                    We’re happy to have you! If you are interested in joining ArtxBLM as an artist, 
                    please complete the <Link to="/artist/sign-up" className="FAQ-link">Artist Registration </Link> form here.
                </p>

                {/* Question 4 */}
                <h3><b>Can I support ArtxBLM without money?</b></h3>

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

                {/* Question 5 */}
                <h3><b>How are the prints priced?</b></h3>
                <ul>
                    <li>$10 for a 5x7 print</li>
                    <li>$25 for an 8x10 print</li>
                    <li>$50 for an 11x14 print</li>
                </ul>
                <p><i>Note that sizes are in inches.</i></p>

                {/* Question 6 */}
                <h3><b>What forms of payment do you accept?</b></h3>
                <p>
                    We accept payments only through PayPal.
                </p>

                {/* Question 7 */}
                <h3><b>How much does shipping cost?</b></h3>
                <p>
                    Shipping is a flat rate of $5 per purchase within the US. If shipping costs less than what you paid 
                    for it, we will donate the difference. 
                </p>

                {/* Question 8 */}
                <h3><b>What is the quality of the prints?</b></h3>
                <p>
                    We are using Mpix to make our prints. All prints will be on Giclee paper with a textured matte finish. All prints will be 
                    260 dpi at minimum, unless otherwise noted.
                </p>

                {/* Question 9 */}
                <h3><b>Will the images be cropped?</b></h3>
                <p>
                    By default, the images will be full bleed and slightly cropped to fit the aspect ratio of your print. If a contributor specifically 
                    requested to maintain the original aspect ratio, it will be noted in the description and the print will maintain a half-inch white border.
                </p>

                {/* Question 10 */}
                <h3><b>How much will it cost to produce the prints?</b></h3>
                <p>
                    We want to make sure your prints are high-quality, but also maximize the proceeds donated from this sale. As such, 
                    the prints will cost a small percentage of your purchase. Our contributors have generously chipped in to cover a portion of 
                    the production cost, so that percentage will be very low.
                </p>

                {/* Question 11 */}
                <h3><b>How long will it take to get my prints?</b></h3>
                <p>
                    We will place orders every [day], from which point it should take an average of 10 days. Expect your print within two weeks of 
                    placing an order and we will send out updates.
                </p>

                {/* Question 12 */}
                <h3><b>Can I return or get a refund?</b></h3>
                <p>
                    Unfortunately we cannot accept returns or refunds, as profits will be donated directly to the recipients we choose. If there is an 
                    issue with your print or order, please contact us at <a href="mailto:artxblmcollective@gmail.com" className="FAQ-link">artxblmcollective@gmail.com</a>.
                </p>

                {/* Question 13 */}
                <h3><b>Any other questions?</b></h3>

                <p>
                    Get in touch at <a href="mailto:artxblmcollective@gmail.com" className="FAQ-link">artxblmcollective@gmail.com</a>.
                </p>

            </div>
        </FAQTextContainer>    
        </AboutUsContainer>
    )
}

export default FAQ