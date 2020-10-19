import React from 'react';
import { AboutUsContainer, AboutUsTextContent, MeetUs, AboutUsTeamContainer, AboutUsImg  } from '../../global styles/index'
import TeamNav from './TeamNav'
import AboutNav from './AboutNav'

import julide from '../../assets/team/TEAM_CIR-JB.png';
import jasmin from '../../assets/team/TEAM_CIR-JH.png';
import ashmita from '../../assets/team/TEAM_CIR-AG.png';
// import shiela from ;

function Legal() {
    return(
        <AboutUsContainer>
            <AboutUsTextContent>
                <AboutNav />
                <TeamNav />
                <MeetUs>
                    <AboutUsTeamContainer>
                        <div className="title">
                            <h4>Jülide Bredée</h4>
                            <a href="https://www.instagram.com/jxlide/" target="blank" >@jxlide</a>
                        </div>
                        <div>
                            <AboutUsImg src={julide} alt="photo of julide"/>
                            <p>Jülide Bredée (she/her) is of German and Turkish origin and is based in Brussels and London. She is fascinated by questions surrounding the integration of social and climate justice issues in legal and financial systems. When she is not enjoying her favourite waffles with a strong espresso in the Brussels café scene, she runs, sketches portraits of her friends and writes short stories. She leads ARTxBLM’s legal team.</p>
                        </div>
                    </AboutUsTeamContainer>
                    <AboutUsTeamContainer className="reverse">
                        <div className="title">
                            <h4>Jasmin Hansohm</h4>
                            <a href="https://www.instagram.com/jasminlenanadja/" target="blank" >@jasminlenanadja</a>
                        </div>
                        <div>
                            <AboutUsImg src={jasmin} alt="photo of jasmin"/>
                            <p>Jasmin (she/her) is a German-Sudanese legal adviser and researcher based in Brussels, Belgium.  Outside of work, she can be found listening to podcasts, scouring local flea markets and exploring the outdoors on foot or by bike. She works in the ArtxBLM legal team.</p>
                        </div>
                    </AboutUsTeamContainer>
                    <AboutUsTeamContainer>
                        <div className="title">
                            <h4>Ashmita Gopalan</h4>
                            <a href="https://www.instagram.com/go_ash/" target="blank" >@go_ash</a>
                        </div>
                        <div>
                            <AboutUsImg src={ashmita} alt="photo of ashmita"/>
                            <p>Ashmita Gopalan (she/her) is a Research Analyst and Sales Coordinator based out of Morrisville, NC. Her background in global relations and innate interest in social justice, diversity and inclusion in the arts, and collaborative experiences lead her to be a part of the Legal Team for ArtxBLM. Outside of her day job, Ashmita can be found watching true crime documentaries, reading, and searching for the perfect scoop of ice cream.</p>
                        </div>
                    </AboutUsTeamContainer>
                    <AboutUsTeamContainer>
                        <div className="title">
                            <h4>Shiela Cato</h4>
                            <a href="https://www.instagram.com/justshiela19/" target="blank" >@justshiela19</a>
                        </div>
                        <div>
                            {/* <AboutUsImg src={shiela} alt="photo of shiela"/> */}
                            <p>Shiela Cato (she/her) is a Tanzanian-Guyanese flight attendant based out of New York, New York. Her background in global relations studies and being a student ambassador for the African American Cultural Center at her university drive her passion for social justice and appreciation for expression of protest in the form of art. In her free time she enjoys listening to true crime podcasts, participating in dance workshops, and working on her crochet and embroidery stitches. Shiela works in the ArtxBLM legal team.</p>
                        </div>
                    </AboutUsTeamContainer>
                </MeetUs>
            </AboutUsTextContent>
        </AboutUsContainer>
    )
}
export default Legal