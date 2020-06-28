import React, { useContext } from 'react';

import { PrimaryButton } from '../global styles/index';
import { useForm } from 'react-hook-form';
import { ArtistContext } from '../contexts/ArtistContext';


function Inquiry(){
    const { artists } = useContext(ArtistContext)
    // const artistId = useParams(`${id}`)

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    // edit onsubmit to actually submit somewhere, utilize artist context to bring in artist info dynamically with artistid

    return(
        <div>
            {/* form to contact artist for specific requests */}
            {/* dynamically populate artist contact info from artist context/filter based on artist opt-in */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Your Name" name="Name" ref={register({required: true, max: 30, min: 2})} />
                <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                <input type="text" placeholder="Request" name="Request" ref={register({required: true, maxLength: 1000})} />

                <PrimaryButton> Submit </PrimaryButton>
            </form>
        </div>
    )
}

export default Inquiry