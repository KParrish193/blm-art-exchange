import React from 'react';
import { AboutUsContainer, AboutUsTextContent, MeetUs, AboutUsTeamContainer, AboutUsImg  } from '../../global styles/index'
import TeamNav from './TeamNav'
import AboutNav from './AboutNav'

import shirleen from '../../assets/team/TEAM_CIR-SB.png';
import emily from '../../assets/team/TEAM_CIR-EY.png';
import sydney from '../../assets/team/TEAM_CIR-SH.png';
import zuriya from '../../assets/team/TEAM_SQ-ZH-18.png';

function DigitalMarketing() {
    return(
        <AboutUsContainer>
        <AboutUsTextContent>
            <AboutNav />
            <TeamNav />
            <MeetUs>
                    <AboutUsTeamContainer>
                        <div className="title">
                            <h4>Shirleen Bredée</h4>
                            <a href="https://www.instagram.com/shir_lynx/" target="blank" >@shir_lynx</a>
                        </div>
                        <div>
                            <AboutUsImg src={shirleen} alt="photo of shirleen"/>
                            <p>Shirleen Bredée (she/her) is a German-Turkish mixed media artist and neuroaesthetics master student in London. She has a background in psychology and neuroscience and is particularly interested in the intersection of art, neuroscience and philosophy. She works primarily in the Social Media team and in the Process team.</p>
                        </div>
                    </AboutUsTeamContainer>
                    <AboutUsTeamContainer className="reverse">
                        <div className="title">
                            <h4>Emily Yoo</h4>
                            <a href="https://www.instagram.com/emilyyoo/" target="blank" >@emilyyoo</a>
                        </div>
                        <div>
                            <AboutUsImg src={emily} alt="photo of emily"/>
                            <p>Emily Yoo (she/her) is finishing her UX design program at Lambda School before beginning the dreaded job search. Currently residing in Charlotte, NC, she hopes to relocate to NYC or San Francisco post-pandemic. Emily is passionate about inclusivity and accessibility in design and works on the website team. When she’s not at her desk, you can find her playing with wigs and roller skating around town.</p>
                        </div>
                    </AboutUsTeamContainer>
                    <AboutUsTeamContainer>
                        <div className="title">
                            <h4>Sydney Hale</h4>
                            <a href="https://www.instagram.com/bijou_opalfolio" target="blank">@bijou_opalfolio</a>
                        </div>
                        <div>
                            <AboutUsImg src={sydney} alt="photo of sydney"  />
                            <p>Sydney “Bijou” Hale (she/her) is a Black artist and baby nanny living her best life in Flatbush, Brooklyn. She draws and sells portraits of all the happy families she works for in Prospect Park and reads about Stacey Abrams, Michelle Obama, and Ava Duvernay when she puts her nanny children down for naps. She is working on a children's book and an Angela Davis-sized afro. You can find her at work on the ARTXBLM social media and marketing team.</p>
                        </div>
                    </AboutUsTeamContainer>
                    <AboutUsTeamContainer className="reverse">
                        <div className="title">
                            <h4>Zuriya Haider</h4>
                            <a href="https://www.instagram.com/zurixart/" target="blank" >@zurixart</a>
                            <a href="https://www.instagram.com/zuripics/" target="blank" >@zuripics</a>
                        </div>
                        <div>
                            <AboutUsImg src={zuriya} alt="photo of zuriya"/>
                            <p>Zuriya Haider (she/her) is a data analyst working in the retail tech space currently based out of Raleigh, North Carolina. She has a background in statistics and analytics and is interested in the intersection of social justice, art and design, and behavioral analytics. Outside of working her 9-5, she spends her free time as a photographer and digital artist and is always looking for ways to expand her creativity.  Zuriya works on the Social Media team.</p>
                        </div>
                    </AboutUsTeamContainer>
                    <AboutUsTeamContainer className="reverse">
                        <div className="title">
                            <h4>Siena Scarbrough</h4>
                            <a href="https://www.instagram.com/sienascar/" target="blank" >@sienascar</a>
                        </div>
                        <div>
                            {/* <AboutUsImg src={siena} alt="photo of siena"/> */}
                            <p>Siena Scarbrough (she/her) is a public relations professional with a special passion for UX and UI design. While finishing her UX design program through DesignLab, she is helping to design an accessible, enjoyable, informative website as well as supporting digital marketing efforts. Siena is currently located in Inglewood, CA where she can be found hiking, beach walking, and trying to fill her home with plants without killing them.</p>
                        </div>
                    </AboutUsTeamContainer>
                </MeetUs>
        </AboutUsTextContent>
        </AboutUsContainer>
    )
}

export default DigitalMarketing