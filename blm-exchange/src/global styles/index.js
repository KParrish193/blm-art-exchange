import styled from 'styled-components'

// home container - adjusted for fixed header
export const HomeContainer =styled.div`
    padding-top: 105px;
`

// buttons
export const PrimaryButton = styled.button`
    border-radius: 5px;
    color: #fff;
    background-color: #800000;
    font-size: 1.2rem;
    padding: .2rem;
    width: 30%;
    min-width: 150px;
`

export const TagButton = styled.button`
    border: solid #800000 2px;
    border-radius: 10px;
    color: #800000;
    background: #fff;
`

// landing styling
export const LandingButton = styled.button`
    border-bottom: solid 2px black;
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: #fff;
    font-size: 1.4rem;
    text-transform: uppercase;
`

export const MobileLandingButtonContainer = styled.div`
    display: none;
    margin: 50px 0px;

    a {
        text-decoration: none;
        color: #000;
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

    @media (max-width: 500px){
        display: flex;
        flex-direction: column;
        padding: 15px 30px 30px 30px;
    }
`

export const LandingTextContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    
    @media (max-width: 500px){
        width: 100%;
    }
`

export const DonationContainer = styled.div`
    width: 45%;

    @media (max-width: 500px){
        width: 100%;
    }
`

export const DonationPlaceholderContainer = styled.div`
    border: solid black 2px;
    background-color: #800000;
    height: 500px;
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
    background-color: #fff;
    width: 100%;
    border-bottom: solid #f6f6f6 1px;

    a {
        text-decoration: none;
        color: #000000;
        font-size: 1.4rem;
        margin: 0;
        padding: 10px;
    }

        a.home{
            padding: 0px;
            margin: 0px;
            
            :hover {
                border-bottom: none;
            }
        }

        a.cart {
            text-decoration: none;
            margin: 0 20px;
            padding: 0px;
            color: #000000;
            font-size: 1.3rem;

            :hover {
                color: #000000;
                border-bottom: none;
            }
        }

        a:hover {
            border-bottom: 2px solid #800000;
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
    border: limegreen solid 1px;
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
        background-color: #fff;
        border-bottom: solid #f6f6f6 1px;
    }

    a.cart {
        text-decoration: none;
        color: #000000;
        font-size: 1.3rem;
        margin-right: 20px;
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
`

// form styling
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    label {
        font-size: 1.2rem;
        font-weight: 600;
        margin-right: .2rem;
    }

    .form-container{
        display: flex;
        flex-direction: column;
        width: 90%;
        padding: 20px;
        
        @media(max-width: 500px){
            padding: 20px 50px 50px;
        }
    }

    div {
        display: flex;
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
        width: 40%;
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