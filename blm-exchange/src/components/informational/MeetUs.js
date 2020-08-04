import React from 'react';

import { AboutUsContainer, AboutUsTextContent, MeetUs, AboutUsTeamContainer, AboutUsImg  } from '../../global styles/index'
import AboutNav from './AboutNav'

import kp from '../../assets/team/kp.jpg';
import ayesha from '../../assets/team/ayesha.jpg';
import safiyyah from '../../assets/team/safiyyah.jpg';
import emily from '../../assets/team/emily.jpg';
import shilpa from '../../assets/team/shilpa.jpg';
import shirleen from '../../assets/team/shirleen.jpg';
import swathi from '../../assets/team/swathi.jpg';
// import sydney from '../../assets/team/sydney.jpg';


// get instagram feed

function Insta() {
    return(
        <AboutUsContainer>
        <AboutUsTextContent>
            <AboutNav />
            <MeetUs>
                    <p> </p>
                    <h3><b>Meet the Team</b></h3>

                    <AboutUsTeamContainer>
                        <div className="title">
                        <h4>
                        Safiyyah Nawaz
                        </h4>
                        <a href="https://www.instagram.com/safiyahn/" >
                            @safiyahn
                        </a>
                        </div>
                        <div>
                        <AboutUsImg src={safiyyah} alt="photo of safiyyah"/>
                        <p>
                        Safiyyah Nawaz (she/her) is a self-taught graphic designer and student currently completing her masters degree in the Psychology of Art, Neuroaesthetics, and Creativity in London. Through academic research about the impact of art on cognition and emotion, and through experience as chapter graphic designer at Sofar Sounds RDU, Safiyyah has developed an interest in all of the different ways that art builds community and individual well-being. She has oversight of ArtxBLM, works in the Social Media and Operational teams, and assists with graphic design.
                        </p>
                        </div>
                    </AboutUsTeamContainer>

                    <AboutUsTeamContainer className="reverse">
                        <div className="title">
                        <h4>
                            Shirleen Bredée
                        </h4>
                        <a href="https://www.instagram.com/shir_lynx/" target="blank" >
                            @shir_lynx
                        </a>
                        </div>
                        <div>
                        <AboutUsImg src={shirleen} alt="photo of shirleen"/>
                        <p>
                        Shirleen Bredée (she/her) is a German-Turkish mixed media artist and neuroaesthetics master student in London. She has a background in psychology and neuroscience and is particularly interested in the intersection of art, neuroscience and philosophy. She works primarily in the Social Media team and in the Process team. 
                        </p>
                        </div>
                    </AboutUsTeamContainer>
                    <AboutUsTeamContainer>
                        <div className="title">
                        <h4>
                            Ayesha Faisal
                        </h4>
                        <a href="https://www.instagram.com/ayeshafaxsal/" target="blank" >
                            @ayeshafaxsal
                        </a>
                        </div>
                        <div>
                        <AboutUsImg src={ayesha} alt="photo of ayesha"/>
                        <p>
                        Ayesha Faisal (she/her) is a software product manager living and working in NYC. After her 9-5 in tech, she works as a freelance portrait and cityscape photographer. Her series entitled “Melanin” exclusively features “dark skinned” POC models as a commentary on racial prejudice and colorism in mainstream creative media. Ayesha combined her passion for social justice, art and technology and acts as the development, testing and launch lead for the ArtxBLM website.
                        </p>
                        </div>
                    </AboutUsTeamContainer>

                    <AboutUsTeamContainer className="reverse">
                        <div className="title">
                        <h4>
                            Emily Yoo
                        </h4>
                        <a href="https://www.instagram.com/emilyyoo/" target="blank" >
                            @emilyyoo
                        </a>
                        </div>
                        <div>
                        <AboutUsImg src={emily} alt="photo of emily"/>
                        <p>
                        Emily Yoo (she/her) is finishing her UX design program at Lambda School before beginning the dreaded job search. Currently residing in Charlotte, NC, she hopes to relocate to NYC or San Francisco post-pandemic. Emily is passionate about inclusivity and accessibility in design and works on the website team. When she’s not at her desk, you can find her playing with wigs and roller skating around town.
                        </p>
                        </div>
                    </AboutUsTeamContainer>

                    <AboutUsTeamContainer>
                        <div className="title">
                        <h4>
                        Shilpa Kancharla
                        </h4>
                        <a href="https://www.instagram.com/shilpakancharlastudio/" target="blank" >
                        @shilpakancharlastudio    
                        </a>
                        </div>
                        <div>
                        <AboutUsImg src={shilpa} alt="photo of shilpa"/>
                        <p>
                        Shilpa Kancharla (she/her) is a South Asian visual artist and software engineer based in Raleigh, North Carolina. She is currently working towards her MS in Computer Science. Her passions include art, fashion, and understanding how technology and design can positively impact social justice movements. She worked on developing the website for ArtxBLM.
                        </p>
                        </div>
                    </AboutUsTeamContainer>

                    <AboutUsTeamContainer className="reverse">
                        <div className="title">
                        <h4>
                        Swathi Krothapalli
                        </h4>
                        <a href="https://www.instagram.com/skrothapalli" target="blank" >
                        @skrothapalli
                        </a>
                        </div>
                        <div>
                        <AboutUsImg src={swathi} alt="photo of swathi"/>
                        <p>
                        Swathi Krothapalli (she/her) is a technology/strategy consultant based out of Washington D.C. Since she was a child, Swathi had a passion for art whether it was through painting, printmaking, or visual journaling, she loves to explore different styles and methods of expressing her creativity. Swathi acts on the Social Media Team and the Process Operations team.
                        </p>
                        </div>
                    </AboutUsTeamContainer>

                    <AboutUsTeamContainer>
                        <div className="title">
                        <h4>
                        Sydney Hale
                        </h4>
                        <a href="https://www.instagram.com/" target="blank">
                        @
                        </a>
                        </div>
                        <div>
                        {/* <AboutUsImg /> */}
                        <p>
                        Sydney “Bijou” Hale (she/her) is a Black Brooklyn-based artist/nanny on the ARTxBLM social media team. She has been drawing all her life,    
                        </p>
                        </div>
                    </AboutUsTeamContainer>

                    <AboutUsTeamContainer className="reverse">
                        <div className="title">
                        <h4>
                        Kristin "KP" Parrish
                        </h4>
                        <a href="https://www.instagram.com/rito_thetattooed_burrito/" target="blank" >
                        @rito_thetattooed_burrito
                        </a>
                        </div>
                        <div>
                        <AboutUsImg src={kp} alt="photo of KP"  />
                        <p>
                        Kristin “KP” Parrish (she/they) is currently finishing their coursework in the Full Stack Web Development program at Lambda School remotely from Salt Lake City, Utah after having completed a Bachelor’s degree in Marketing at Boise State University. They serve as a Full Stack Web Developer for ArtxBLM and when not building websites they can be found skating with Wasatch Roller Derby, paddleboarding on a calm lake with their pitbull, Tallahassee, or cuddling their three cats, Arbi, Hemingway, and Kip.
                        </p>
                        </div>
                    </AboutUsTeamContainer>
                </MeetUs>
        </AboutUsTextContent>
        </AboutUsContainer>
    )
}

export default Insta