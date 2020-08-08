import React from 'react';

import { Link } from 'react-router-dom';

import { LandingButton, LandingContainer, LandingContent, LandingTextContent, MobileLandingButtonContainer, DonationContainer, DonationPlaceholderContainer, CallToAction, PrimaryButton } from '../../global styles/index'

function Landing(){
    return(
        <LandingContainer>
            <LandingContent>
            <LandingTextContent>
            <div>
            <h2>Art x BLM</h2>
            <h5>
                Artists. Activists. Allies
            </h5>
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

            <CallToAction className="causes">
                <h4>Causes</h4>
                <h6>Information about causes to donate to.</h6>
            </CallToAction>

            <CallToAction>
                <h4>Want your work to be featured? </h4>
                    <h6>We're looking for talented artists to contribute to the cause. </h6>
                    <p>
                        <Link to="/artist/sign-up">
                        <PrimaryButton>Sign Up</PrimaryButton>
                        </Link>
                    </p>
            </CallToAction>
            </LandingContent>
        </LandingContainer>
    )
}

export default Landing