import React from 'react';

import { Link } from 'react-router-dom';
import { } from 'react-hook-form';
import { CodeOfConductContainer, CodeOfConductTextContent, EmailLink} from '../../global styles/index';


function BuyersAgreement() {
    return(
        <CodeOfConductContainer>
            <CodeOfConductTextContent>
                <div>
                    <h3><b>Returns Policy</b></h3>
                    <h5>
                        (1) If a product is delivered to a customer in printed format and this product has a defect (the
                        product is incorrect to description, physically damaged, has poor image quality, or the customer
                        is not satisfied with the product), the customer may be entitled to receive a replacement copy of
                        the product or a refund. The customer must notify ARTXBLM of the defect within 24 hours of receipt
                        as a general rule. At the discretion of ARTXBLM the customer may entitled to replacement after that 
                        period.
                    </h5>
                    <h5>
                        (2) The customer should contact ARTXBLM and provide information about the defect, including reasonable
                        proof of damage or fault. Reasonable proof must include pictures of the packaging and/or product and an
                        email description of the discrepancies between the product received and the product ordered. ARTXBLM will
                        then provide the customer with a new product or a refund upon determination of the nature of the damage and
                        eligibility for a replacement or refund.
                    </h5><br/>
                    <h3><b>ARTXBLM Terms of Service</b></h3>
                    <h5>
                        Please see the below details that explain your rights and expectations as a Buyer. As a Buyer, I understand 
                        that I am not buying directly from ARTXBLM but that ARTXBLM will place an order with their preferred Supplier 
                        or another supplier it sees fit on my behalf.
                    </h5>
                    <h5>
                        ARTXBLM serves to facilitate the exchange of artwork for charitable donations. ARTXBLM operates as a volunteer-based 
                        organisation and social space with the goals of sustainability, spreading knowledge, and promoting art. By agreeing 
                        to these Terms of Service, I agree to the ARTXBLM’s Code of Conduct.
                    </h5><br/>
                    <h3><b>1.0 DEFINITIONS</b></h3>
                    <h3>Key Terms</h3>
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
                    <h3><b>2.0 PURCHASING A PRODUCT ON ARTXBLM</b></h3>
                    <ol style={{listStyleType: 'lower-latin'}}>
                        <li>
                            ARTXBLM is a non-profit organisation that will donate  100% of the profits to charitable organisations chosen by the Organisers, save for profits essential to sustain ARTXBLM as an organisation. 
                            ARTXBLM reserves the right to choose these organisations at their discretion. 
                        </li>
                        <li>
                            Users can purchase products on the ARTXBLM website using a valid credit card, PayPal, or any other valid payment system.
                        </li>
                        <li>
                            When you purchase a product through ARTXBLM, you are supporting charitable organisations that have been chosen by the organisers. 
                            By making a purchase you agree that you have:
                        </li><br/>
                        <ol>
                            <li>
                                Read the item description and shipping policies prior to making a purchase;
                            </li>
                            <li>
                                Submitted appropriate payment for product(s) purchased; and
                            </li>
                            <li>
                                Provided accurate shipping information.
                            </li>
                        </ol><br/>
                        <li>
                            After receiving your order, ARTXBLM will submit your order to an external service provider, MPIX. MPIX is responsible for the printing and delivery of the products offered 
                            on the ARTXBLM website. The team at ARTXBLM will do everything in its power to ensure a smooth delivery process by upholding efficient channels of communication with our 
                            third-party suppliers, but due tothird-party many factors outside of ARTXBLM’s control, this can unfortunately not be guaranteed. 
                        </li>
                        <li>
                            By agreeing to these guidelines, you also agree to <Link to="https://www.mpix.com/about/TermsAndConditions" style={{color: "#037963"}}>MPix’s terms and conditions</Link> and 
                            <Link to="https://www.mpix.com/about/PurchAgree" style={{color: "#037963"}}>purchaser's agreement</Link> as well as <Link to="https://www.theprintspace.co.uk/hubusertermsandconditions" style={{color: "#037963"}}>PrintSpaceUK’s terms and conditions</Link>.
                        </li>
                        <li>
                            For details regarding payment conversion please refer to <Link to="https://www.paypal.com/sm/smarthelp/article/where-can-i-find-paypal's-currency-exchange-rates-faq1976" style={{color: "#037963"}}>PayPal</Link> currency conversion policy. 
                        </li>
                        <li>
                            You may not cancel an order once it has been submitted (“Submission”). 
                        </li>
                        <li>
                            It is the customer’s responsibility to ensure the product delivery address is correct. ARTXBLM takes no responsibility for any product a customer does not receive because of errors in the delivery address or any other data provided. The organisation will not 
                            issue a refund or replacement due to the submission of erroneous information.
                        </li>
                        <li>
                            We strive to provide the products in a quality format and timely manner. However, we are a volunteer-based, charitable organisation. In the case there are external causes for delays, ARTXBLM will do its best to ensure you receive the product in a timely manner, 
                            but cannot assume responsibility for external events, whether they are caused by our Suppliers, third parties, or other unforeseeable external circumstances. 
                        </li>
                    </ol>
                    <h3><b>3.0 DELIVERY</b></h3>
                    <ol style={{listStyleType: 'lower-latin'}}>
                        <li>
                            Delivery will be facilitated pursuant to the Buyer’s instructions by postal or courier service and will be paid for by the Buyer at the price indicated at the time of purchase. ARTXBLM will deduct shipping charges, which are included in the cost of the product. 
                        </li>
                        <li>
                            If delivery to the specified address is not possible (i.e. the destination cannot be reached by the postal service, or if the address was input incorrectly), then the product will be sent back. A refund will be issued to the Buyer. 
                        </li>
                        <li>
                            If there is a discrepancy between the ARTXBLM Buyer’s Agreement and MPix’s terms and/or PrintSpaceUK’s terms, then MPix’s/PrintSpaceUK’s terms will prevail.
                        </li>
                    </ol>
                    <h3><b>4.0 RETURNS POLICY</b></h3>
                    <ol style={{listStyleType: 'lower-latin'}}>
                        <li>
                            If a product is delivered to a customer in printed format and this product has a defect (the product is incorrect to description, physically damaged, has poor image quality, or the customer is not satisfied with the product) the customer may be entitled to receive a 
                            replacement copy of the product or a refund. The customer must notify ARTXBLM of the defect <b>within a period of 25 days</b>. 
                        </li>
                        <li>
                            The customer should contact ARTXBLM and provide information about the defect, including reasonable proof of damage or fault. Reasonable proof must include pictures of the packaging and/or product and an email description 
                            of the discrepancies between the product received and the product ordered. ARTXBLM will then provide the customer with a new product or a refund upon determination of the nature of the damage and eligibility for a replacement or refund. 
                        </li>
                    </ol>
                    <h3><b>5.0 MINORS POLICY</b></h3>
                    <ol style={{listStyleType: 'lower-latin'}}>
                        <li>
                            ARTXBLM’s Terms of Service require individuals with accounts to be at least 18 years of age. Those under the age of 18 are considered to be minors on the ARTXBLM website.
                        </li>
                        <li>
                            Minors are allowed to use ARTXBLM’s services if they have the permission and proper guidance from a parent or legal guardian. The parent or legal guardian must be the account holder. As the owner for the account, the parent or legal guardian is held responsible for any and all activity that is done by a minor with access to the account. 
                        </li><br/>
                        <h3>Selling on ARTXBLM</h3>
                        <li>
                            All billing information must belong to the parent or legal guardian responsible for the account.
                        </li><br/>
                        <h3>Accounts on ARTXBLM</h3>
                        <p>The following pertains to both buyers and sellers.</p>
                        <li>
                            All financial information on the account, including information related to PayPal, must be that of the parent or legal guardian.
                        </li>
                        <li>
                            Minors cannot make purchases unless they are authorized by the account owner (parent or legal guardian).  
                        </li>
                    </ol>
                    <h3><b>6.0 CHANGES</b></h3>
                    <ol style={{listStyleType: 'lower-latin'}}>
                        <li>
                            ARTXBLM reserves the right to change these Terms of Service from time to time in compliance with the legal requirements or platform developments.
                        </li>
                    </ol>
                    <h3><b>7.0 GOVERNING LAW</b></h3>
                    <ol style={{listStyleType: 'lower-latin'}}>
                        <li>
                            This Agreement shall be governed by, and construed in accordance with, the laws of the State of North Carolina.
                        </li>
                    </ol>
                </div>
            </CodeOfConductTextContent>
        </CodeOfConductContainer>
    )
}

export default BuyersAgreement