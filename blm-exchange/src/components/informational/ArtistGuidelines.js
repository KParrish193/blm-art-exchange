import React from 'react';

import { } from 'react-hook-form';
import { Link } from "react-router-dom";
import { CodeOfConductContainer, CodeOfConductTextContent, EmailLink} from '../../global styles/index';

function ArtistGuidelines() {
    return(
        <CodeOfConductContainer>
            <CodeOfConductTextContent>
                <div>
                <h3><b>Code of Conduct: Our Values</b></h3>
                    <h5>
                        We expect all parties participating in ArtxBLM - including but not limited to leadership, 
                        artists, and supporters - to uphold our core values as laid out below. We take these values 
                        very seriously, as they guide the operations of ArtxBLM as a community.
                    </h5>
                    <hr style={{color: 'white', backgroundColor: 'white'}}/>
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
                            Supporter: a person who interacts with ARTXBLM Organisers or Artists on any media outlet, 
                            online or in person. 
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
                            BLM (or “Black Lives Matter”, or “the Movement”), a political and social movement, emphasizing basic human rights and 
                            racial equality for Black people and campaigning against various forms of racism.
                        </li>
                    </ol>
                    <hr style={{color: 'white', backgroundColor: 'white'}}/>
                    <b>As a participating Artist with ARTXBLM, you agree to the guidelines outlined below:</b>
                    <ol>
                        <br/>
                        <li>
                            You will adhere to the nine key values of Reflexivity, Accountability, Transparency, Inclusivity & Accessibility, Community, Mindfulness, Longevity, Charity and Equity as outlined in our <Link to="/coc" style={{color: "#037963", fontWeight: "bold" }}>Code of Conduct</Link>.
                        </li>
                        <li>
                            ARTXBLM has the right to replicate and sell your Art on our website and by accepting these guidelines you grant ARTXBLM the express permission to do so. Your permission may be withdrawn at any time (see clause 14).  
                        </li>
                        <li>
                            Unless otherwise specified, you will not receive any of the profits generated from your artwork. Black artists have the option to receive up to 50% of profits as commission. Funds will be donated to Charities selected by ARTXBLM Organisers.
                        </li>
                        <li>
                            You will represent yourself accurately and honestly. Information about yourself will be published in your artist bio on the ARTXBLM website.
                        </li>
                        <li>
                            Artwork that is uploaded is and remains at all times your own, meaning that you retain the copyright for photographs, and compositions created by you. If an artwork involves collaboration with other artists, you must credit any collaborators.If your artwork draws significant inspiration from any source, you must flag this with the ARTXBLM team upon submission. 
                        </li>
                        <li>
                            Your artwork is <b>not</b> owned by ARTXBLM upon uploading to the website. If you wish to remove your artwork from the website, we will honor your request to do so.
                        </li>
                        <li>
                            You are responsible for ensuring that you have all the necessary rights to your content, and are not committing copyright or intellectual property infringement. You agree to raise any issues that may arise regarding the ownership of your art and intellectual property concerns at the time of submission.
                        </li>
                        <li>
                            You will communicate respectfully with other ARTXBLM Organisers and Supporters. Spam and harassment are strictly prohibited. 
                        </li>
                        <li>
                            If you engage in discriminatory, harmful, and offensive behaviour, ARTXBLM reserves the right to remove your artwork from Our website and to take other proportionate measures to halt or sanction your behaviour.
                        </li>
                        <li>
                            You are responsible for protecting your personal information. This means that your disclosure of any identifying information beyond what is required for our site is up to your discretion.
                        </li>
                        <li>
                            In line with our value of Mindfulness, you will seriously consider the content of your Artwork to ensure it is appropriate (i.e. not excessively vulgar, misleading, or tone deaf) before uploading. It always remains at the full discretion of ARTXBLM to choose not to accept your art work due to its content or otherwise.
                        </li>
                        <li>
                            If you become aware of possible inadvertent misconduct on your part or on the part of any other participating Artist, you will bring up your concerns to the ARTXBLM team for a collaborative discussion about required action.
                        </li>
                        <li>
                            Artwork that you submit to the ARTXBLM website can be posted on ARTXBLM promotional materials such as social media posts or flyers unless specifically requested from you as an artist. If artwork is selected, ARTXBLM must credit the artist(s) on all promotional materials.
                        </li>
                        <li>
                            ARTXBLM will maintain and use the files you send to the Organisation for increments of six months, at which point we will request for you to confirm permission for ARTXBLM to use your Art for an additional six months. If you no longer grant ARTXBLM permission to use your Art, your Art shall be removed from the ARTXBLM website with immediate effect.
                        </li>
                    </ol>
                </div>
            </CodeOfConductTextContent>
        </CodeOfConductContainer>
    )
}

export default ArtistGuidelines