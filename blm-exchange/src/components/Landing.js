import React from 'react';

import { Link } from 'react-router-dom';

import { LandingButton, LandingContainer, MobileLandingButtonContainer, DonationContainer } from '../global styles/index'

function Landing(){
    return(
        <LandingContainer>
            <h3> Art x BLM</h3>
            <p>
                This is where the tagline goes
            </p>

            <h4> Mission</h4>
            <p>
                This is where the mission goes. This is where the mission goes. This is where the mission goes. This is where the mission goes. This is where the mission goes. This is where the mission goes.This is where the mission goes. This is where the mission goes.This is where the mission goes. This is where the mission goes. This is where the mission goes. This is where the mission goes.
            </p>

            <MobileLandingButtonContainer className="mobile">
                <LandingButton>
                    <Link to="/shop">Shop</Link>
                </LandingButton>
                <LandingButton>
                    <Link to="/artists">Artists</Link>
                </LandingButton>
            </MobileLandingButtonContainer>

            <div>
                {/* visual donation piece */}
                <h4>Donations</h4>
                <DonationContainer>

                </DonationContainer>
            </div>
        </LandingContainer>
    )
}

export default Landing