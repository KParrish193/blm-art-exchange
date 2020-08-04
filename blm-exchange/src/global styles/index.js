import styled from 'styled-components'

import background from '../assets/landing_background.png'

// home container - adjusted for fixed header
export const HomeContainer =styled.div`
    padding: 100px 0 2.5rem 0;
    position: relative;
    background-color: #000;
    color: white;
    min-height: 100vh;
`
// buttons
export const PrimaryButton = styled.button`
    border-radius: 10px;
    color: #fff;
    background-color: #990000;
    font-size: 1.2rem;
    letter-spacing: .1rem;
    padding: .2rem;
    width: 30%;
    min-width: 150px;
    border: #450008 1px solid;

    a {
        text-decoration: none;
        color: #fff;
    }

    .stripe-button-el { display: none }
`

export const TagButton = styled.button`
    border: solid #800000 2px;
    border-radius: 10px;
    color: #800000;
    background: #fff;
`

// landing styling
export const LandingButton = styled.button`
    text-color: white;
    border-bottom: solid 3px #037963;
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: rgba(78, 78, 78, 0.05);
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
`

export const MobileLandingButtonContainer = styled.div`
    display: none;
    margin: 50px 0px;

    a {
        text-decoration: none;
        color: #fff;
    }

    @media (max-width: 500px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

export const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 3rem 30px 2.5rem;
    color: #fff;
    min-height: 90vh;
    background-image: url(${background});

    @media (max-width: 800px){
        display: flex;
        flex-direction: column;
        padding: 15px 30px 30px 30px;
    }
`

export const LandingTextContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    
    @media (max-width: 800px){
        width: 100%;
    }
`

export const CallToAction = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-top: 5rem;

    @media (max-width: 800px){
        margin-top: 3rem;
        width: 100%;
    }

    @media (max-width: 500px)
    {
        margin-top: 1.5rem;
    }

    h5 {
        margin-top: 1rem;
    }

    p {
        margin-top: 1rem;
    }
`

export const DonationContainer = styled.div`
    width: 45%;

    @media (max-width: 800px){
        width: 100%;
    }
`

export const DonationPlaceholderContainer = styled.div`
    border: solid black 2px;
    background-color: #800000;
    height: 500px;
`



// code of conduct styling
export const CodeOfConductContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 35px 30px 100px 30px;

    @media (max-width: 800px){
        display: flex;
        flex-direction: column;
        padding: 15px 30px 30px 30px;
    }
`

export const CodeOfConductTextContent = styled.div`
    display: flex;
    text-align: justify;
    text-justify: inter-word;

    @media (max-width: 800px){
        width: 100%;
    }
`


// about us styling
export const AboutNavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0 2rem;
    width: 100%;
    text-align: center;

    a {
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
        width: 25%;
        padding-bottom: 0.5rem;
    }
`

export const AboutUsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 35px 30px 100px 30px;

    @media (max-width: 800px){
        display: flex;
        flex-direction: column;
        padding: 15px 30px 30px 30px;
    }
`

export const AboutUsTextContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;

    @media (max-width: 800px){
        width: 100%;
    }
`

export const AboutUsImg = styled.img`
    height: 250px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;

    @media (max-width: 600px){
        height: 200px;
    }
`

export const MeetUs = styled.div`
    display: flex;
    flex-direction: column;

    .reverse {
        flex-direction: column;

        .title {
            flex-direction: row;
            width: 100%;
            justify-content: flex-end;
            text-align: left;
            margin: 1rem 0 0.5rem;
    
            @media( max-width: 650px) {
                justify-content: center;
                width: 100%;
            }
        }

        div {
            flex-direction: row-reverse;
        }
    }
`

export const AboutUsTeamContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
        flex-direction: row;
        width: 100%;
        justify-content: flex-start;
        text-align: left;
        margin: 1rem 0 0.5rem;

        @media( max-width: 650px) {
            justify-content: center;
            width: 100%;
        }
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    h4 {
        color: #800000;
        padding-right: .5rem;
        font-weight: 500;
    }

    a {
        text-decoration: none;
        color: #037963;
        font-size: 1.3rem;
        letter-spacing: .1rem;
    }

    p { 
        width: 70%;
        text-align: left;
        
        @media (max-width: 600px){
            width: 57%;
        }
    }
`

// FAQ Styling
export const FAQContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 30px 100px 30px;
`

export const FAQTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 75%;
    position: static;
    
    h2 {
        text-align: center;
        margin-bottom: 1rem;
    }

    p {
        display: inline, block;
        padding-bottom: 30px;
    }

    .FAQ-link {
        text-decoration: none;
        color: #037963;
        font-weight: 700;
    }

    @media (max-width: 800px){
        width: 100%;
    }
`
    
//footer styling
export const FooterContainer = styled.div`
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 1.5rem;
    height: 2.5rem;  

    a {
        color: #fff;
        text-decoration: none;
    }

    .footer-contact{
        display: flex;
        flex-direction: row;
        width: 45%;
    }

    .footer-codeofconduct{
        width: 45%;
        text-align: right;
    }
    `

// header styling
export const HeaderContainer = styled.div`     
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    background-color: #000;
    color: #fff;
    width: 100%;

    a {
        text-decoration: none;
        color: #fff;
        font-size: 1.4rem;
        margin: 0;
        padding: 10px;
    }

        a.home{
            padding: 0px;
            margin: 0px;
            
            :hover {
                border-bottom: none;
                transition: .16s all 0.025s;
            }
        }

        a.cart {
            text-decoration: none;
            margin: 0 20px;
            padding: 0px;
            color: #fff;
            font-size: 1.3rem;

            :hover {
                color: #000000;
                border-bottom: none;
                transition: .16s all 0.025s;
            }
        }

        a:hover {
            border-bottom: 2px solid #800000;
            transition: .16s all 0.025s;
        }

        .mobile-home{
            display: none;
        }

        @media (max-width: 500px){
            display: none;
`

export const Nav = styled.div`
    display: flex; 
    justify-content: space-around;
    align-items: center;
    width: 90%;

    @media (max-width: 500px){
        display: flex;
        flex-direction: column;
        width: 100%;

        a {
            width: 100%;
            border-bottom: 1px solid #222222;
        }
    }
`

export const Logo = styled.img`
    height: auto;
    width: 100px;
`

export const ArtistMenuButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

// mobile header styling
export const MobileContainer = styled.div`
    display: none;

    @media(max-width: 500px){
        position: fixed;
        top: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;
        align-items: center;
        background-color: #000;
        color: #fff;
        border-bottom: solid #4E4E4E 1px;
    }

    a.cart {
        text-decoration: none;
        color: #fff;
        font-size: 1.3rem;
        margin-right: 20px;
    }

    .mobile-hover:hover {
        font-weight: 800;
        transition: .16s all 0.025s;
    }
`

export const MenuButton = styled.div`
    margin-left: 20px;

    :hover {
        cursor: pointer;
    }
`

//grid display
export const PhotoGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 30px 0px 0px 30px;

    div {
        width: 50%;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-weight: 900;
    }
`

export const ProductCard = styled.div`

`

export const ProductImg = styled.img`
    height: 200px;
`

// form styling
export const Form = styled.form`
    max-width: 1000px;
    margin: 0 auto;

    label {
        float: left;
        text-align: left;
        display: inline-block;
        padding-left: 15px;
        text-indent: -15px;
    }

    input {
        box-sizing: border-box;
        width: 100%;
        border-radius: 4px;
        padding: 10px 15px;
        margin-bottom: 10px;
        font-size: 14px;
        margin-top: 10px; 
        display: block;
    }

    textarea {
        box-sizing: border-box;
        width: 100%;
        border-radius: 4px;
        padding: 10px 15px;
        margin-bottom: 10px;
        font-size: 14px;
    }

    .form-container {
        display: flex;
        flex-direction: column;
        width: 90%;
        padding: 20px;
        
        @media(max-width: 500px){
            padding: 20px 50px 50px;
        }
    }

    div {
        display: inline-block, flex;
        flex-direction: row;
        justify-content: flex-start;
        padding: .2rem;
    }

    p {
        margin: 0;
    }

    .instructions{
        text-align: center;
        margin-bottom: 40px;
    }

    .column {
        float: left;
        width: 50%;
        padding: 10px;
    }


    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    .checkboxes label {
        display: block;
        padding-right: 10px;
        padding-left: 22px;
        text-indent: -22px;
    }

    .checkboxes input {
        vertical-align: middle;
    }
    .checkboxes label span {
        vertical-align: middle;
    }
`

export const EmailLink = styled.div`
    display: inline-block;
    a {
        color: #037963;
    }
`

export const ToggleSignUp = styled.div`
    margin-top: 20px;
    font-size: .8rem;

    a{ 
        color: #037963;
        padding-left: 5px;
    }
`

// cart styling
export const CartContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    .total {
        width: 60%;
    }
`

export const CartLabels = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    color: #000;
    
    p {
        padding: 0;
        margin: 0.3rem 0;
        font-size: 1.1rem;
    }
`

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #111111;
    border-bottom: 1px solid #111111;
    align-items: flex-end;
`

export const AlignRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const AlignLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`