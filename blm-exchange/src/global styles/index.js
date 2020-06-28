import styled from 'styled-components'


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