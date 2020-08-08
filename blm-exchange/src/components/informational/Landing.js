import React from 'react';

import { Link } from 'react-router-dom';

import { LandingButton, LandingContainer, LandingContent, LandingTextContent, MobileLandingButtonContainer, DonationContainer, DonationPlaceholderContainer, CallToAction, PrimaryButton } from '../../global styles/index'

function Landing(){
    return(
        <LandingContainer>
            <LandingContent>
                <LandingTextContent>
                    <div>
                        <h3>Art x BLM</h3>
                        <h5>Artists. Activists. Allies.</h5>
                    </div>

                    <div>
                        <h6>
                            Welcome to ArtxBLM, a collective of artists and organizers who believe in the power 
                            of art to enact social change. With every purchase, 100% of profits go towards anti-racist causes 
                            that need financial support the most.
                        </h6>
                        <h6>
                            Uplift Black voices.
                        </h6>
                        <h6>
                            Share your work.
                        </h6>
                        <h6>
                            Support artists.
                        </h6>
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