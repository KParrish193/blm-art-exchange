import styled from 'styled-components'

import background from '../assets/pexels-colin-lloyd-4635036.jpg'

// home container - adjusted for fixed header
export const HomeContainer =styled.div`
    padding: 105px 0 2.5rem 0;
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
    transition: all 300ms;

    a {
        text-decoration: none;
        color: #fff;
    }

    .stripe-button-el { display: none }
`

export const TagButton = styled.button`
    border: solid #990000 2px;
    border-radius: 20px;
    color: #fff;
    background: #000;
    font-size: 1.1rem;
    letter-spacing: .05rem;
    padding: 0.3rem 1rem;
    margin: 0.3rem;
    transition: all 300ms;
`

// header styling
export const HeaderContainer = styled.div`     
    position: fixed;
    z-index: 99;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    background-color: #000;
    color: #fff;
    width: 100%;
    border-bottom: solid #0D0D0D 0.5px;

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
            border-bottom: none;
            transition: .16s all 0.025s;
        }
    }

    a:hover {
        border-bottom: 2px solid #990000;
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
    width: 100%;

    @media (max-width: 500px){
        display: flex;
        flex-direction: column;
        width: 100%;

        a {
            width: 100%;
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
        border-bottom: solid #0d0d0d 0.5px;
        z-index: 99;
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

//footer styling
export const FooterContainer = styled.div`
    background-color: #0D0D0D;
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
        width: 30%;
    }

    .footer-codeofconduct{
        width: 45%;
        text-align: right;
        justify-content: center;
    }
    `
    
// landing styling
export const LandingButton = styled.button`
    text-color: white;
    border-bottom: solid 3px #08846D;
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
        width: 100%;
    }
`

export const LandingContainer = styled.div`
    color: #fff;
    min-height: 80vh;
    background: url(${background}) no-repeat top center;
    background-size: cover;
    background-attachment: fixed;
    z-index: 0;

    @media (max-width: 800px){
        display: flex;
    }
`

export const LandingContent = styled.div`
    width: 100%;
    min-height: 80vh;
    background-color: rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;
    position: relative;

    @media (max-width: 700px){
        width: 100%;
        padding: .2rem 3rem;
    }
`

export const LandingTextContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 45%;
    position: relative;

    h3 {
        font-size: 44px;
        text-align: center;
    }

    h5 {
        margin-top: 1rem;
        font-size: 30px;
        text-align: center;
    }

    h6 {
        font-size: 20px;
        text-align: center;
    }
    
    @media (max-width: 800px){
        width: 100%;
    }
`

export const CallToActionCarousel = styled.div`
    width: 100%;
    height: 45vh;
`

export const CallToAction = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    button {
        margin-top: 1rem;

        @media (max-width: 800px){
            margin-top: .5rem;
        }
    }

    div {
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 40%;
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.75);

        @media (max-width: 800px){
            padding: 2rem 3.4rem;
            width: 100%;
            border-radius: 15px;
        }
    }

    @media (max-width: 800px){
        width: 100%;
    }

    h3 {
        font-size: 44px;
        text-align: center;
    }

    h5 {
        margin: 1rem 0 1.5rem;
        font-size: 15px;
        font-style: italic;
        text-align: center;

        @media (max-width: 800px){
            margin: .75rem 0 1rem;
        }
    }

    h6 {
        font-size: 20px;
        text-align: center;
        margin: 1rem 0;

        @media (max-width: 800px){
            font-size: 18px;
        }
    }

    .nbo {
        background-color: #fff;
        padding: .3rem .35rem 0rem .2rem;
        height: 6rem;
        width: auto;
    }
`

export const CharityImg = styled.img`
    width: 10rem;

    @media (max-width: 800px){
        display: none;
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
    background-color: #990000;
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
    width: 80%;

    @media (max-width: 800px){
        width: 100%;
    }
    
    h3 {
        text-align: center;
    }

    ul {
        list-style-type: disc;
    }

    li {
        padding-left: 1em;
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

    a:hover {
        border-bottom: 2px solid #990000;
        transition: .16s all 0.025s;
    }
`
export const TeamNavContainer = styled.div`
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

    a:hover {
        border-bottom: 2px solid #990000;
        transition: .16s all 0.025s;
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

    h3 {
        font-size: 44px;
        font-weight: bold;
    }

    p {
        font-size: 20px;
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
        color: #990000;
        padding-right: .5rem;
        font-weight: 500;
        font-size: 30px;
    }

    a {
        text-decoration: none;
        color: #08846D;
        font-size: 30px;
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
    
    h3 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: 44px;
    }

    h5 {
        font-size: 30px;
    }

    p {
        display: inline, block;
        padding-bottom: 30px;
        font-size: 20px;
    }

    .FAQ-link {
        text-decoration: none;
        color: #08846D;
        font-weight: 700;
    }

    @media (max-width: 800px){
        width: 100%;
    }
`

// filter styling
export const DesktopFilterContainer = styled.div`
    @media(max-width: 500px){
        display: none;
    }
`

export const DesktopFilter = styled.div`

`

export const MobileFilter = styled.div`
    display: none;

    @media(max-width: 500px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        max-width: 470px;

        .toggled {
            background: #990000;
            color: #fff;
        }
    }
`

// shop & list styling
export const ListPageContainer = styled.div`
    margin: 1rem 0.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    

    h3 {
        color: #fff;
        display: none;
    }

    @media (max-width: 500px) {
        h3 {
            display: flex;
            margin: 0.25rem 0 1.5rem;
        }
    }
`

export const PhotoGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 2rem 0;

    .name-img {
        padding: 0;
        margin: 0;
        text-align: left;
        padding-bottom: 1em;

        h3 {
            padding: 0;
            margin: 0;
        }
    }

    img {
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-weight: 900;
    }
`

export const ArtistCard = styled.div`
    display: flex;
    flex-direction: row;
    width: 45%;
    padding: .5rem;
    
    h4 {
        color: #fff;
    }

    @media(max-width: 500px){
        width: 75%;
        display: flex;
        flex-direction: column;
    }
`

export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem;
    background-color: #000;
    z-index: 0;

    a {
        z-index: 0;
    }

    h4 {
        color: #fff;
    }

    @media (max-width: 1500px){
        margin: 1.5rem;
    }

    @media (max-width: 1200px){
        margin: 1rem;
    }

    @media (max-width: 800px){
        margin: 0.75rem;
    }

    @media (max-width: 700px){
        margin: 0.5rem;
    }
    
    @media (max-width: 500px){
        margin: .5rem 0;
        width: 45%;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        height: 20rem;
    }

    .mobile-card {
        display: none;

        @media (max-width: 500px){
            display: flex;
            flex-direction: column;
            justify-content; center;
            align-items: center;

            h4 {
                width: 100%;
                text-align: center;
                font-size: 1.3rem;
                font-style: italic;
            }

            h5 {
                font-size: 1.1rem;
            }
        }
    }
`

export const ThumbnailContainer = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    overflow: hidden;
    object-fit: cover;
    background-color: #000;
    color: #fff;
    z-index: 1;
    display: inline-block;

    div {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #000;
        opacity: 0;

        h4, h5 {
            padding: 0 .9rem;
        }

        h4 {
            font-style: italic;
        }
        
        :hover {
            opacity: 0.75;
            transition: .16s all 0.025s;

            h4, h5 {
                opacity: 1.0;
            }
        }

        @media (max-width: 500px){
            display: none;
        }
    }

    h4, h5 {
        color: #fff;

    }

    h5 {
        margin-top: 1rem;
    }

    @media (max-width: 1585px){
        width: 250px;
        height: 250px;
    }

    @media (max-width: 1150px){
        width: 215px;
        height: 215px;
    }

    @media (max-width: 800px){
        width: 200px;
        height: 200px;
        margin: 0 auto;
    }
`

export const ProductImg = styled.img`
    position: relative;
    left: 50%;
    top: 50%;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -2;
    
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
`



//print detail styling
export const PrintDetailContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PrintContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media(max-width: 1000px){
        width: 100%;
    }

    @media(max-width: 700px) {
        flex-direction: column;
    }
`

export const PrintDisplay = styled.div`
    width: 50%;
    height: 84vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0;

    @media(max-width: 700px) {
        width: 100%;
        height: 100%;
        padding: 1rem 0 0;
    }
    
    img {
        max-height: 80vh;

        @media(max-width: 1200px) {
            max-height: 40vh;
        }
    }

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;

        @media (max-width: 700px) {
            margin: 0.75rem 0 0;
        }
    }

    div.tags-container{ 
        display: flex;
        flex-direction: row;
    }

    p {
        margin-top: .75rem;
        width: 70%;
    }
`

export const PrintContent = styled.div`
    width: 40%;
    height: 84vh;
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding: 5rem 0;

    @media (max-width: 700px) {
        width: 100%;
        margin-left: 0;
        height: 100%;
        padding: 1.5rem 0;
        margin: 0;
    }

    div.container {
        height: 57vh;

        @media(max-width: 1200px) {
            height: 40vh;
        }

        @media(max-width: 700px) {
            width: 75%;
            padding: 0;
            height: 100%;
        }
    }

    div.print-heading{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 4rem;

        @media(max-width: 1200px) {
            margin-bottom: 2.5rem;
        }

        @media(max-width: 700px) {
            margin-bottom: 1.5rem;
        }

        h3, h4 {
            font-weight: 400;
            margin-bottom: 1rem; 

            @media(max-width: 1200px) {
                margin-bottom: .5rem; 
            }

            @media(max-width: 700px) {
                margin-bottom: .3rem; 
            }
        }

        h3 {
            font-style: italic;
        }

        a {
            text-decoration: none;
            color: #fff;
    
            :hover  {
                color: #990000;
                transition: .16s all 0.025s;
            }
    }
`

export const PrintForm = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
    }

    .price { 
        margin-bottom: 4rem;

        @media(max-width: 1200px) {
            margin-bottom: 2.5rem; 
        }

        @media(max-width: 700px) {
            margin-bottom: 1.5rem;
        }
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 1rem; 

        @media(max-width: 1200px) {
            margin-bottom: .5rem; 
        }
        
        label {
            padding: .2rem 1rem 0 0; 
        }

        select {
            height: 1.5rem;
            margin: 0 0 .1rem 0;
        }

        input {
            height: 1.5rem;
            margin: 0 0 .1rem 0;
        }
    }
`


//artist profile styling
export const ArtistProfileContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80vh;
    padding: 2rem 3rem 2.5rem;

    @media(max-width: 850px){
        display:flex;
        flex-direction: column;
        padding: 2.5rem 2rem 2.5rem;
        height: 60vh;
    }

    // need to fix style in mobile
`

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    min-width: 500px;
    height: 100%;
    color: #fff;

    @media(max-width: 850px){
        min-width: 300px;
        width: 100%;
        height: 40vh;
    }
`

export const ArtistContentContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 3rem;

    h3 {
        width: 100%;
        text-align: left;
        margin-left: 0.3rem;
        color: #fff;
    }

    h4 {
        width: 100%;
        text-align: left;
        letter-spacing: 0.01rem;
        margin-left: 0.3rem;
        color: #08846D;
    }

    h5 {
        width: 100%;
        text-align: left;
        margin-left: 0.3rem;
        padding-bottom: 0.15rem; 
        color: #fff;
    }

    h6 {
        width: 100%;
        text-align: left;
        padding-left: 0.4rem;
        font-size: 1.1rem;
        color: #fff;
    }

    .icon {
        color: #990000;
    }

    div.location {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: baseline;
    }

    div.artist-tags {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 1rem;
    }

    a {
        color: #08846D;

        :hover{ 
            color: #fff;
            text-decoration: none;
        }

    }

    p {
        margin-top: 1rem;
        text-align: left;
        margin-left: 0.3rem;
    }

    @media(max-width: 850px){
        width: 100%;
        padding: 2rem 0;
    }
`


// form styling
export const Form = styled.form`
    max-width: 1000px;
    margin: auto;
    align-items: center;

    label {
        float: left;
        text-align: left;
        display: inline-block;
        padding-left: 15px;
        font-size: 16px;
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
    
    .checkbox, .radio {
        display: inline;
    }

    .main {
        font-size: 20px;
    }

    .error {
        color: #990000;
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
        width: 100%;
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

    h3 {
        margin: 0;
        text-align: center;
        padding: 1em;
        font-size: 44px;
    }

    p {
        margin: 0;
        text-align: left;
    }

    .instructions{
        text-align: left;
        margin-bottom: 40px;
        font-weight: 30px;
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
        color: #08846D;
    }
`

export const ToggleSignUp = styled.div`
    margin-top: 20px;
    font-size: .8rem;

    a{ 
        color: #08846D;
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