import React from 'react';

import { } from 'react-hook-form';
import { CodeOfConductContainer, CodeOfConductTextContent, EmailLink } from '../../global styles/index';

function CoC(){
    return(
        <CodeOfConductContainer>
            <CodeOfConductTextContent>
                <div>
                    <h3><b>Code of Conduct: Our Values</b></h3>
                    <h4>
                        We expect all parties participating in ArtxBLM - including but not limited to leadership, 
                        artists, and supporters - to uphold our core values as laid out below. We take these values 
                        very seriously, as they guide the operations of ArtxBLM as a community.
                    </h4>
                    <ul>
                        <li>
                            <b>Reflexivity: </b>We believe that knowledge is dynamic, that one can never be done learning, and 
                            it is our responsibility to both ensure our decisions are founded in reliable information and to constantly 
                            be working to learn more. As we learn more, we are more than willing to revise our decisions and update them to 
                            reflect current knowledge. Our operations are guided by this principle, meaning that we will regularly 
                            review decisions regarding how we communicate with artists and distribute funds. We expect all artists participating 
                            in ArtxBLM to do the same, to consider how their artwork may be perceived and make decisions as creators to 
                            ensure that artwork is not offensive, tone-deaf, or disturbing.
                        </li>
                        <li>
                            <b>Accountability: </b>Because knowledge is dynamic, it is important to acknowledge our own learning process. 
                            It is imperative that as we accumulate knowledge and perspective, we reflect back on any harm our actions 
                            may have caused to our peers. Therefore, it is our responsibility to listen, hold ourselves accountable and 
                            change as we reflect. We vow to not just listen and change, but make this process as transparent as possible 
                            and apologize when we make mistakes. We do not expect perfect conduct from our artists, but we expect an 
                            atmosphere of accountability and mindfulness of any harm that can be done to people with or without intention. 
                            Where mistakes have been made we will encourage action-oriented apologies and limit artist’s access to the website.
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
                        </li>
                        <li>
                            <b>Community: </b>Here at ArtxBLM, we are a unified collective which operates through collaboration and mutual respect. 
                            It is important that all members of ArtXBLM feel a sense of belonging, that their opinions are valuable, they are 
                            respected, and are comfortable collaborating with other members. Within the leadership team, there is no authoritative 
                            voice; we guide decisions after thorough discussion as a group, and with a specific call for feedback from members of the 
                            community. Artists are encouraged to network within the community and to communicate freely with supporters. We support 
                            the autonomy of artists to set their specifications for how they wish to contribute, but expect that they adhere to the 
                            guidelines set forth in this document. 
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
                        </li>
                        <li>
                            <b>Longevity: </b>We believe real change is sustainable. ArtxBLM is not just a means to drive donations, but to highlight specific 
                            artists who are working to dismantle oppressive infrastructures within our communities and create an ongoing support system through 
                            funding and collaboration with one another. By bringing attention to artist instagrams and profiles, we hope to add to the BLM digital 
                            community and connect ethical buyers to new friends, mentors, and allies. ArtxBLM is in connection with local artists, organizations, 
                            and individuals to bolster dialogue and support long after protests have died down. The purpose of our website is to ensure the fight 
                            for anti-racism is accessible, continuous, and documented. 
                        </li>
                        <li>
                            <b>Charity: </b>We want to highlight that we are not-for-profit. We do not take credit for this movement, but we want to ensure that 
                            support for Black Lives Matter continues long past the current news-cycle. This is the driving principle in the creation of ArtxBLM, 
                            that we can consistently send financial support to the communities that need it most. ArtxBLM is built off of a group of artists who 
                            have volunteered their time and talent to contribute to the movement in a creative and valuable way. We have leveraged the belief 
                            that our actions have worth beyond the amount of money we are able to donate to create this platform.
                        </li>
                    </ul>
                </div>
            </CodeOfConductTextContent>
        </CodeOfConductContainer>
    )

}

export default CoC