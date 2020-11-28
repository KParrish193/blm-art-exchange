import React from 'react';

import { Link } from 'react-router-dom';
import { } from 'react-hook-form';
import { CodeOfConductContainer, CodeOfConductTextContent, EmailLink} from '../../global styles/index';

function PrivacyPolicy () {
    return(
        <CodeOfConductContainer>
            <CodeOfConductTextContent>
                <div>
                    <h3><b>ARTXBLM Privacy Policy</b></h3>
                    <h5>
                        At ARTXBLM we take your privacy very seriously. We operate on the basis of transparency in our transactions 
                        with Artists, Buyers and Supporters. To find out how we use your data and the policies we have in place to 
                        protect your data, please read on.
                    </h5>
                    <br/>
                    <h3><b>1.0 EXPLICIT CONSENT</b></h3>
                    <p>
                        By agreeing to this policy, you agree that ARTXBLM may collect some of your personal data, as specified below 
                        (see 3. “What types of personal data we collect?”).
                    </p>
                    <h3><b>2.0 DEFINITIONS</b></h3>
                    <ol style={{listStyleType: 'lower-latin'}}>
                        <li>
                            The Organisers (or “We”, or “Our”): The members of the ARTXBLM collective, responsible for the 
                            strategic oversight and day-to-day operations of the ARTXBLM platform on all media outlets.
                        </li>
                        <li>
                            Buyer: a person who has entered (or intends to enter) into a sales transaction with ARTXBLM.
                        </li>
                        <li>
                            Defect: a condition that prevents the product from matching the quality per the website description, 
                            upon delivery to the Buyer. 
                        </li>
                        <li>
                            Product or Products: all items acquired by Buyer from Seller under this Agreement.
                        </li>
                        <li>
                            Artist: a person who donates Art to ARTXBLM.  
                        </li>
                        <li>
                            ARTXBLM (or the “Collective”, or the “Platform”): the entity led by the Organisers, whose mission it is to 
                            accept donations from Artists, sell their Art and donate the profits to Charity.
                        </li>
                        <li>
                            Art (or “Artwork”): original work created by Artists for purposes of donation to ARTXBLM.
                        </li>
                        <li>
                            Charity: one or many charities, organisations, or recipients that further the causes behind the BLM movement effectively, 
                            selected by the Organisers at regular intervals.
                        </li>
                        <li>
                            Supplier: <Link to="https://www.mpix.com/" style={{color: "#037963"}}>MPix</Link>, <Link to="https://www.theprintspace.co.uk/" style={{color: "#037963"}}>Printspace UK</Link>, 
                            or other specified external service provider, which provides multiple services to ARTXBLM  in order to deliver the product, which includes printing and sending the art to ARTXBLM’s Buyers.  
                        </li>
                        <li>
                            Submission: the point in time when the payment has been processed and ARTXBLM has received the Buyer's funds.
                        </li>
                    </ol>
                    <h3><b>3.0 WHAT TYPES OF PERSONAL DATA WE COLLECT?</b></h3>
                    <p>
                        We only collect personal data that you have provided to us on a voluntary basis for the purposes of using our services. 
                    </p>
                    <p>
                        From Artists, we collect types of personal data, which include: name, email address, social media handles, bank account details (where appropriate), 
                        shipping address and phone number. We may collect other data if it is necessary to our charitable operations.
                    </p>
                    <p>
                        From Buyers, we collect  types of personal data, which include: name, email address and phone number, shipping address, tax information (where appropriate), 
                        banking information (where appropriate). We may collect other data if it is necessary to our charitable operations.
                    </p>
                    <p><b>How do we use your personal data?</b></p>
                    <p>
                        We collect your personal data in order to provide you with our services, according to our Buyer’s Agreement and/or Artist Policy. In particular, this includes:
                    </p>
                    <p>
                        (a) to facilitate and coordinate purchases made through our website; 
                    </p>
                    <p>
                        (b) to enable and process communication relating to your purchase(s) via email in case of questions or problems; and
                    </p>
                    <p>
                        (c) provided that you have given your consent to send you platform updates, including updates on charity campaigns and ARTXBLM project updates. 
                    </p>
                    <p>
                        You may withdraw your consent at any time with future effect.
                    </p>
                    <p><b>No transfer of personal data to third parties that are not Suppliers</b></p>
                    <p>
                        ARTXBLM does not disclose your name, email address, shipping address, or any other personal data to third parties without your consent, 
                        except as specified in this clause.
                    </p>
                    <p>
                        In order to fulfil the sales process made via our website, we have to share your name and email address as well as your shipping address with 
                        our Suppliers, which will process this data in accordance with their own privacy policies. For details, please refer to <Link to="https://www.paypal.com/en/webapps/mpp/ua/privacy-full" style={{color: "#037963"}}>PayPal</Link>’s 
                        and <Link to="https://www.mpix.com/about/Privacy" style={{color: "#037963"}}>Mpix</Link>’s respective privacy policies. Please be aware that the provision of such personal data solely takes place to process the purchase of a product 
                        by a Buyer. Under no circumstances do we provide such personal data to our Suppliers for marketing purposes.
                    </p>
                    <p>
                        This processing is necessary for the performance of our contract.
                    </p>
                    <p><b>How do we keep your personal data secure?</b></p>
                    <p>
                        We ensure that only the ARTXBLM Organisers have access to the personal data supplied by Artists and Buyers. While we take all necessary and reasonable steps to keep your information secure, 
                        no security system is impenetrable and, due to the inherent nature of the internet and factors outside of ARTXBLM’s control, we cannot guarantee that information, during transmission through 
                        the internet or while stored on our systems or otherwise, will be absolutely safe from unauthorized access by others. 
                    </p>
                    <p><b>Your rights and choices</b></p>
                    <p>
                        If you would like to obtain an overview of the personal data we hold on you, or to ask us to remove or amend any personal data, please get in touch 
                        with us at <EmailLink><a href={"mailto:" + "artxblmcollective@gmail.com"}>artxblmcollective@gmail.com</a></EmailLink>. We will aim to respond to you within 30 days 
                        of your request.
                    </p>
                    <p><b>Storage time</b></p>
                    <p>
                        We will only store your personal data as long as necessary to fulfil the purposes for which they were collected or – where the law provides for longer retention periods – for the duration of the retention period 
                        required by law. After that your personal data will be deleted.
                    </p>
                    <p><b>Changes</b></p>
                    <p>
                        ARTXBLM reserves the right to change this privacy policy from time to time in compliance with legal requirements or platform developments.
                    </p>
                </div>
            </CodeOfConductTextContent>
        </CodeOfConductContainer>
    )
}
export default PrivacyPolicy