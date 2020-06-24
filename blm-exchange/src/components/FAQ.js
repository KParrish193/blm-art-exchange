import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 80%;

    p {
        padding-bottom: 30px;
    }
`

function FAQ(){
    return(
            <Container>
            <h2>Frequently Asked Questions</h2>
            
            <TextContainer>
            <div>
            <h3>I'm an artist interested in having my work featured on this site. How do I join?</h3>
            <p>
            
            <Link to="sign-up">
            Click here 
            </Link> for the artist registration form.
            </p>
            </div>

            <div>
            <h3>What causes do you support?</h3>
            <p>
                Important ones. Add Links and such.
            </p>
            </div>

            <div>
            <h3>How do I know where my money is going?</h3>
            <p>
                We'll post updates.
            </p>
            </div>

            <div>
            <h3>What forms of payment do you accept?</h3>
            <p>
                Cash. Money. Bitcoin
            </p>
            </div>

            <div>
            <h3>What kind of quality can I expect from my prints? How much does it cost to produce the prints?</h3>
            <p>
                Idk. MPix or something.
            </p>
            </div>

            <div>
            <h3>I can't afford a print, but I want to help support the cause.</h3>
            <p>
                Answer here.
            </p>
            </div>

            <div>
            <h3>How do I request a custom print?</h3>
            <p>
                Artists  filter. Reach out. Whatevs
            </p>
            </div>

            <div>
            <h3>I still have more questions. How can I get in touch?</h3>
            <p>
                Email us or something.
                [Link email] artxblmcollective@gmail.com
            </p>

            </div>

        </TextContainer>
        </Container>
    )
}

export default FAQ