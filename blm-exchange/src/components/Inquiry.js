import React from 'react'

import { PrimaryButton } from '../global styles/index'
import { } from 'react-hook-form';


function Inquiry(){

    function onSubmit(){

    }

    return(
        <div>
            {/* form to contact artist for specific requests */}
            {/* dynamically populate artist contact info from artist context/filter based on artist opt-in */}
        <PrimaryButton onclick={onSubmit} > Submit </PrimaryButton>
        </div>
    )
}

export default Inquiry