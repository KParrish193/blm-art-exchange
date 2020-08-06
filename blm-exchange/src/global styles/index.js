import styled from 'styled-components'

// home container - adjusted for fixed header
export const HomeContainer =styled.div`
    padding-top: 100px;
    background-color: #000;
    color: white;
    height: 100vh
`
// buttons
export const PrimaryButton = styled.button`
    border-radius: 10px;
    color: #fff;
    background-color: #800000;
    font-size: 1.2rem;
    letter-spacing: .1rem;
    padding: .2rem;
    width: 30%;
    min-width: 150px;
    border: #450008 1px solid;

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
    flex-direction: row;
    justify-content: space-around;
    padding: 35px 30px 100px 30px;
    color: #fff;
    height: 100vh;

    @media (max-width: 800px){
        display: flex;
        flex-direction: column;
        padding: 15px 30px 30px 30px;
    }
`

export const LandingTextContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    
    @media (max-width: 800px){
        width: 100%;
    }
`

export const ArtistCallToAction = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;

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
    justify-content: center;
    align-items: center;
    margin: 1rem 0 2rem;
    width: 100%;
    text-align: center;

    a {
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
        width: 25%;
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
        font-weight: 800;
        padding-right: 1rem;
        letter-spacing: .07rem;
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
    
    h2, h3 {
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

// instafeed styling

export const InstaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
        color: #037963;
    }`
    
//footer styling
export const FooterContainer = styled.div`
    position: relative;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: #fff;
    left:0;
    bottom:0;
    right:0;
    width: 100%;
    padding-top:10px;
    padding-bottom:10px;
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
    align-items: left;

    label {
        float: left;
        text-align: left;
        display: inline-block;
        padding-left: 15px;
        text-indent: -15px;
    }

    input {
        box-sizing: border-box;
        border-radius: 4px;
        padding: 10px 15px;
        margin-bottom: 10px;
        font-size: 14px;
        margin-top: 10px; 
        display: block;
    }

    .text {
        width: 100%;
    }
    
    .checkbox {
        display: inline;
    }

    span {
        margin: 8px;
    }

    textarea {
        box-sizing: border-box;
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

    p, h3 {
        margin: 0;
        text-align: left;
    }

    .instructions{
        text-align: left;
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

export const CustomSwitch = styled.div`
    .react-switch-checkbox {
        height: 0;
        width: 0;
        visibility: hidden;
    }
    
    .react-switch-label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        width: 100px;
        height: 50px;
        background: grey;
        border-radius: 100px;
        position: relative;
        transition: background-color .2s;
    }
  
    .react-switch-label .react-switch-button {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 45px;
        height: 45px;
        border-radius: 45px;
        transition: 0.2s;
        background: #fff;
        box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    }
    
    .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }
    
    .react-switch-label:active .react-switch-button {
        width: 60px;
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

    .labelrow {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .total{
        width: 60%;
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