import React from 'react';
import { AboutUsContainer, AboutUsTextContent, MeetUs, AboutUsTeamContainer, AboutUsImg  } from '../../global styles/index'
import TeamNav from './TeamNav'
import AboutNav from './AboutNav'

import safiyyah from '../../assets/team/TEAM_CIR-SN.png';
import swathi from '../../assets/team/TEAM_CIR-SKR.png';

function Operations() {
    return(
        <AboutUsContainer>
            <AboutUsTextContent>
                <AboutNav />
                <TeamNav />
                <MeetUs>
                    <AboutUsTeamContainer>
                        <div className="title">
                            <h4>Safiyyah Nawaz</h4>
                            <a href="https://www.instagram.com/safiyahn/" >@safiyahn</a>
                        </div>
                        <div>
                            <AboutUsImg src={safiyyah} alt="photo of safiyyah"/>
                            <p>Safiyyah Nawaz (she/her) is a self-taught graphic designer and student currently completing her masters degree in the Psychology of Art, Neuroaesthetics, and Creativity in London. Through academic research about the impact of art on cognition and emotion, and through experience as chapter graphic designer at Sofar Sounds RDU, Safiyyah has developed an interest in all of the different ways that art builds community and individual well-being. She has oversight of ArtxBLM, works in the Social Media and Operational teams, and assists with graphic design.</p>
                        </div>
                    </AboutUsTeamContainer>
                    <AboutUsTeamContainer className="reverse">
                        <div className="title">
                            <h4>Swathi Krothapalli</h4>
                            <a href="https://www.instagram.com/skrothapalli" target="blank" >@skrothapalli</a>
                        </div>
                        <div>
                            <AboutUsImg src={swathi} alt="photo of swathi"/>
                            <p>Swathi Krothapalli (she/her) is a technology/strategy consultant based out of Washington D.C. Since she was a child, Swathi had a passion for art whether it was through painting, printmaking, or visual journaling, she loves to explore different styles and methods of expressing her creativity. Swathi acts on the Social Media Team and the Process Operations team.</p>
                        </div>
                    </AboutUsTeamContainer>
                </MeetUs>
            </AboutUsTextContent>
        </AboutUsContainer>
    )
}

export default Operations