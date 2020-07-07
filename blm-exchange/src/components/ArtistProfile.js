import React from 'react'
import { useParams } from 'react-router' 
import Inquiry from './Inquiry';

function ArtistProfile(){
    const { id } = useParams()
    return(
        <div>
            {/* display all artist products to buy, specific to single artist, perhaps artist details like social media. Link to inquiry */}
        
        
        {/* inquiry as modal */}
        <Inquiry />
        
        </div>
    )
}

export default ArtistProfile