import React from 'react';

import { Link } from 'react-router-dom';

import { LandingButton, LandingContainer, LandingTextContent, MobileLandingButtonContainer, DonationContainer, DonationPlaceholderContainer, ArtistCallToAction, PrimaryButton } from '../../global styles/index'

function Landing(){
    return(
        <LandingContainer>
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

            <DonationContainer 
                style={{
                    display: 'none',
                }}>
                {/* visual donation piece */}
                <h3 style={{color: 'white'}}>Donations to Date</h3>
                <DonationPlaceholderContainer>
                </DonationPlaceholderContainer>
            </DonationContainer>

            <ArtistCallToAction>
                <h4>Want your work to be featured? </h4>
                    <h5>We're looking for talented artists to contribute to the cause. </h5>
                    <p>
                        <Link to="/artist/sign-up">
                        <PrimaryButton>Sign Up</PrimaryButton>
                        </Link>
                    </p>
            </ArtistCallToAction>
        </LandingContainer>
    )
}

export default Landing