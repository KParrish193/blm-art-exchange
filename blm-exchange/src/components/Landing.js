import React from 'react';

import { Link } from 'react-router-dom';

import { LandingButton, LandingContainer, LandingTextContent, MobileLandingButtonContainer, DonationContainer, DonationPlaceholderContainer } from '../global styles/index'

function Landing(){
    return(
        <LandingContainer>
            <LandingTextContent>
            <div>
            <h3>Art x BLM</h3>
            <h2>
                Artists. Activists. Allies
            </h2>
            </div>

            <div>
            <h5>
                Welcome to ArtxBLM, a collective of artists and organizers who believe in the power 
                of art to enact social change. With every purchase, 100% of profits go towards anti-racist causes 
                that need financial support the most.
            </h5>
            <h5>
                Uplift Black voices.
            </h5>
            <h5>
                Share your work.
            </h5>
            <h5>
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
                <h3>Donations to Date</h3>
                <DonationPlaceholderContainer>

                </DonationPlaceholderContainer>
            </DonationContainer>
        </LandingContainer>
    )
}

export default Landing