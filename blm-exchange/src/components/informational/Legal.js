import React from 'react';
import { AboutUsContainer, AboutUsTextContent, MeetUs, AboutUsTeamContainer, AboutUsImg  } from '../../global styles/index'
import TeamNav from './TeamNav'
import AboutNav from './AboutNav'

function Legal() {
    return(
        <AboutUsContainer>
            <AboutUsTextContent>
                <AboutNav />
                <TeamNav />
                <MeetUs>
                    <p>placeholder test</p>
                </MeetUs>
            </AboutUsTextContent>
        </AboutUsContainer>
    )
}
export default Legal