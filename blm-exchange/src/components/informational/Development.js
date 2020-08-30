import React from 'react';
import { AboutUsContainer, AboutUsTextContent, MeetUs, AboutUsTeamContainer, AboutUsImg  } from '../../global styles/index'
import TeamNav from './TeamNav'
import AboutNav from './AboutNav'

import kp from '../../assets/team/TEAM_CIR-KP.png';
import ayesha from '../../assets/team/TEAM_CIR-AF.png';
import shilpa from '../../assets/team/TEAM_CIR-SKA.png';
import xiaohan from '../../assets/team/TEAM_CIR-XH.png';

function Development() {
    return(
        <AboutUsContainer>
        <AboutUsTextContent>
            <AboutNav />
            <TeamNav />
            <MeetUs>
                <AboutUsTeamContainer>
                    <div className="title">
                        <h4>Ayesha Faisal</h4>
                        <a href="https://www.instagram.com/ayeshafaxsal/" target="blank" >@ayeshafaxsal</a>
                    </div>
                    <div>
                        <AboutUsImg src={ayesha} alt="photo of ayesha"/>
                        <p>Ayesha Faisal (she/her) is a software product manager living and working in NYC. After her 9-5 in tech, she works as a freelance portrait and cityscape photographer. Her series entitled “Melanin” exclusively features “dark skinned” POC models as a commentary on racial prejudice and colorism in mainstream creative media. Ayesha combined her passion for social justice, art and technology and acts as the development, testing and launch lead for the ArtxBLM website.</p>
                    </div>
                </AboutUsTeamContainer>
                <AboutUsTeamContainer className="reverse">
                    <div className="title">
                        <h4>Shilpa Kancharla</h4>
                        <a href="https://www.instagram.com/shilpakancharlastudio/" target="blank" >@shilpakancharlastudio</a>
                    </div>
                    <div>
                        <AboutUsImg src={shilpa} alt="photo of shilpa"/>
                        <p>Shilpa Kancharla (she/her) is a South Asian visual artist and software engineer based in Raleigh, North Carolina. She is currently working towards her MS in Computer Science. Her passions include art, fashion, and understanding how technology and design can positively impact social justice movements. She worked on developing the website for ArtxBLM.</p>
                    </div>
                </AboutUsTeamContainer>
                <AboutUsTeamContainer>
                    <div className="title">
                        <h4>Kristin "KP" Parrish</h4>
                        <a href="https://www.instagram.com/rito_thetattooed_burrito/" target="blank" >@rito_thetattooed_burrito</a>
                    </div>
                    <div>
                        <AboutUsImg src={kp} alt="photo of KP"  />
                        <p>Kristin “KP” Parrish (she/they) is currently finishing their coursework in the Full Stack Web Development program at Lambda School remotely from Salt Lake City, Utah after having completed a Bachelor’s degree in Marketing at Boise State University. They serve as a Full Stack Web Developer for ArtxBLM and when not building websites they can be found skating with Wasatch Roller Derby, paddleboarding on a calm lake with their pitbull, Tallahassee, or cuddling their three cats, Arbi, Hemingway, and Kip.</p>
                    </div>
                </AboutUsTeamContainer>
                <AboutUsTeamContainer className="reverse">
                    <div className="title">
                        <h4>Xiaohan Liu</h4>
                        <a href="https://www.instagram.com//" target="blank" >@</a>
                    </div>
                    <div>
                        <AboutUsImg src={xiaohan} alt="photo of xiaohan"/>
                        <p></p>
                    </div>
                </AboutUsTeamContainer>
            </MeetUs>
        </AboutUsTextContent>
        </AboutUsContainer>
    )
}

export default Development