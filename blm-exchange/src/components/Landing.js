import React from 'react';

import { Link } from 'react-router-dom';

import { LandingButton, LandingContainer, LandingTextContent, MobileLandingButtonContainer, DonationContainer, DonationPlaceholderContainer } from '../global styles/index'

function Landing(){
    return(
        <LandingContainer>
            <LandingTextContent>
            <div>
            <h3> Art x BLM</h3>
            <p>
                This is where the tagline goes
            </p>
            </div>

            <div>
            <h3> Mission</h3>
            <p>
                This is where the mission goes. This is where the mission goes. This is where the mission goes. This is where the mission goes. This is where the mission goes. This is where the mission goes.This is where the mission goes. This is where the mission goes.This is where the mission goes. This is where the mission goes. This is where the mission goes. This is where the mission goes.
            </p>
            </div>
            </LandingTextContent>

            <MobileLandingButtonContainer className="mobile">
                <LandingButton>
                    <Link to="/shop">Shop</Link>
                </LandingButton>
                <LandingButton>
                    <Link to="/artists">Artists</Link>
                </LandingButton>
            </MobileLandingButtonContainer>

            <DonationContainer>
                {/* visual donation piece */}
                <h3>Donations to Date</h3>
                <DonationPlaceholderContainer>

                </DonationPlaceholderContainer>
            </DonationContainer>
        </LandingContainer>
    )
}

export default Landing