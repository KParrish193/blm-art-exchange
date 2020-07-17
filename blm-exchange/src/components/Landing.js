import React from 'react';

import { Link } from 'react-router-dom';

import { LandingButton, LandingContainer, LandingTextContent, MobileLandingButtonContainer, DonationContainer, DonationPlaceholderContainer } from '../global styles/index'

function Landing(){
    
    var bg = require('../assets/landing_background.png')

    return(
        <LandingContainer style={{ backgroundImage: "url("+bg+")" }}>
            <LandingTextContent>
            <div>
            <h3 style={{color: 'white'}}>Art x BLM</h3>
            <h2 style={{color: 'white'}}>
                Artists. Activists. Allies
            </h2>
            </div>

            <div>
            <h5 style={{color: 'white'}}>
                Welcome to ArtxBLM, a collective of artists and organizers who believe in the power 
                of art to enact social change. With every purchase, 100% of profits go towards anti-racist causes 
                that need financial support the most.
            </h5>
            <h5 style={{color: 'white'}}>
                Uplift Black voices.
            </h5>
            <h5 style={{color: 'white'}}>
                Share your work.
            </h5>
            <h5 style={{color: 'white'}}>
                Support artists.
            </h5>
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
                <h3 style={{color: 'white'}}>Donations to Date</h3>
                <DonationPlaceholderContainer>

                </DonationPlaceholderContainer>
            </DonationContainer>
        </LandingContainer>
    )
}

export default Landing