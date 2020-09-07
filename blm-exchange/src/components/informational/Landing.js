import React from 'react';

import { Link } from 'react-router-dom';

import { LandingButton, LandingContainer, LandingContent, LandingTextContent, MobileLandingButtonContainer, CallToActionCarousel, DonationContainer, DonationPlaceholderContainer, CallToAction, PrimaryButton, CharityImg } from '../../global styles/index'

import { Carousel } from 'react-bootstrap';

import Charity1 from '../../assets/charities/AMF-logo.png';
import Charity2 from '../../assets/charities/alp-logo.png';
import Charity3 from '../../assets/charities/NBO-logo.png';

function Landing(){
    return(
        <LandingContainer>
            <LandingContent>
                <LandingTextContent>
                    <div style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.25)'
                    }}>
                        <h3>Art x BLM</h3>
                        <h5>Artists. Activists. Allies.</h5>
                    </div>

                    <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.25)'
                    }}>
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

            <MobileLandingButtonContainer className="mobile">
                <LandingButton>
                    <Link to="/shop">Shop</Link>
                </LandingButton>
                <LandingButton>
                    <Link to="/artists">Artists</Link>
                </LandingButton>
            </MobileLandingButtonContainer>

            <CallToAction className="reg">
                    <div>
                    <h4>Want your work to be featured? </h4>
                    <h6>We're looking for talented artists to contribute to the cause. </h6>
                    <p>
                        <Link to="/artist/sign-up">
                        <PrimaryButton>Sign Up</PrimaryButton>
                        </Link>
                    </p>
                    </div>
            </CallToAction>

            </LandingTextContent>



            <CallToActionCarousel>
            <Carousel
                style={{
                    width: '100%',
                    height: '45vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                
                <Carousel.Item
                    style={{
                        borderRadius: '15px'
                    }}>
                    <CallToAction>
                    <CharityImg src={Charity1} />
                    <div>
                    <h5>Meet the first round of organizations we'll be donating to:</h5>
                    <a href="">
                    <h4>Activist Medical Fund</h4>
                    </a>
                    <h6>
                    The Activist Medical Fund is currently in the Dallas-Fort Worth area and is looking to expand to other cities in Texas. They help activists who have been injured in protests against police brutality by contributing to their medical bills. The fund was created in response to excessive force against protestors.
                    </h6>
                    </div>
                    </CallToAction>
                </Carousel.Item>
            
                <Carousel.Item
                    style={{
                        borderRadius: '15px'
                    }}>
                    <CallToAction>
                    <CharityImg src={Charity2} />
                    <div>
                    <h5>Meet the first round of organizations we'll be donating to:</h5>
                    <a href="">
                    <h4>The Audre Lorde Project</h4>
                    </a>
                    <h6>
                    The Audre Lorde Project is an LGBTQI+  organization specific to people of color in the NYC area. They have a multitude of projects that need funding right now including an anti-violence program challenging hate and police violence by using community-based strategies, rather than police or political outreach programmes to promote trans justice. 
                    </h6>
                    </div>
                    </CallToAction>
                </Carousel.Item>

                <Carousel.Item
                style={{
                    borderRadius: '15px'
                }}>
                    <CallToAction>
                    <CharityImg className="nbo" src={Charity3} />
                    <div>
                    <h5>Meet the first round of organizations we'll be donating to:</h5>
                    <a href="">
                    <h4>National Bail Out</h4>
                    </a>
                    <h6> National Bail Out is a Black-led and Black-centered collective of abolitionist organizers, lawyers and activists. They provide bail for people of color, who have been arrested and work to create fellowship and employment opportunities for the people they have bailed out. </h6>
                    </div>
                    </CallToAction>
                </Carousel.Item>
            </Carousel>
            </CallToActionCarousel>


            </LandingContent>
        </LandingContainer>
    )
}

export default Landing