import React from 'react'

import CoC from './CodeOfConduct';

import { PrimaryButton } from '../../global styles/index';

import { } from 'react-hook-form';

function ArtistForm(){
    function onSubmit(){

    } 

    return(
        <div>
            {/* artist sign-up form */}
            
            
            {/* modal to confirm code of conduct for new artists */}
            
            <CoC />
            <PrimaryButton onclick={onSubmit} > Submit </PrimaryButton>
        </div>
    )
}

export default ArtistForm