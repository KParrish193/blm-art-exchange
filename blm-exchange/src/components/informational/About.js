import React from 'react';
import Divider from '@material-ui/core/Divider';

import AboutNav from './AboutNav';
import { AboutUsContainer, AboutUsTextContent } from '../../global styles';

function About(){
    return (
        <AboutUsContainer>
            <AboutUsTextContent>
            <AboutNav />
                <div>
                    <h3><b>What is ArtxBLM?</b></h3>

                    <p>
                        With ArtxBLM, we aim to encourage and facilitate a collaborative exchange of art to raise money for anti-racist 
                        action. We understand that there are many ways to show support: by having conversations with those close to you, 
                        attending protests, signing petitions, contacting representatives, organizing locally, and donating to the 
                        organizations that need funds. We have created this platform as a way to connect a community of artists and 
                        art-lovers who believe in the power of art to affect social change, and to make direct action efficient and 
                        straightforward.
                    </p>

                    <p>
                        <b>Who is ArtxBLM for?</b> For artists, activists, and allies who share our belief that all Black lives matter. 
                        This includes Black women, trans Black lives, Black lives with disabilities, Black lives of all religions, of all 
                        gender expressions, sexualities, immigration statuses, socioeconomic statuses, educational backgrounds, 
                        and intersecting-identities. We know that not everyone is able to leave the house or contribute financially, 
                        so we have developed this platform for those who wish to show support in more accessible ways. There is a massive amount of 
                        information circulating online; consequently, we aim to research and identify the places where funds will have the greatest 
                        impact. We want to make support for the movement streamlined and positive.
                    </p>

                    <p>
                        <b>Why art?</b> Art is a powerful force. Movements are defined by art. Moments in history are taught through art. 
                        The choices we make every day are driven by the art we engage with. Art is a vehicle for change. It’s a way to make people 
                        see things differently. It’s a way to express our emotions, beliefs, hopes, and fears. Historically, art has given a 
                        voice to marginalized groups when their voices were silenced. Art contains the insular experience of the marginalized 
                        artist - even when popular media neglects that narrative. In the past ten years, social media has made art, and 
                        underrepresented narratives more accessible than ever before. We believe this is both important and healing.
                    </p>

                    <p>
                        In a time when we are overwhelmed with traumatic images, art becomes a necessary tool to express and to connect. We can express rage 
                        through the art we make; we can share knowledge through our art; we can use the process of creating art to meditate. And now, 
                        by supporting this cycle, we are not only promoting art-making during a time when it is important that art be made, but we are contributing 
                        financially to support activists, protestors, families of victims, local businesses, and individuals who need funds.
                    </p>

                    <p>
                        ArtxBLM is committed to sustaining a network of artists whose art will be used to facilitate action. Join the community and make your voice heard.
                    </p>

                    <Divider variant="middle" />
                </div>

                <div>
                    <p> </p>
                    <h3><b>Meet the Team</b></h3>

                    <AboutUsTeamContainer>

                    </AboutUsTeamContainer>


                    <AboutUsTeamContainer>

                    </AboutUsTeamContainer>


                    <AboutUsTeamContainer>

                    </AboutUsTeamContainer>
                </div>


            </AboutUsTextContent>
        </AboutUsContainer>
    );
}

export default About