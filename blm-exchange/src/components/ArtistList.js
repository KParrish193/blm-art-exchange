import React, { useEffect } from 'react'


import FilterListIcon from '@material-ui/icons/FilterList';



function ArtistList(){

    return(
        <div>
            <FilterListIcon />
            {/* display all artists */}
            <h3>Artists</h3>
            <div>
                {/* map backend data of artists into cards */}
                {/* display grid of artist cards */}
            </div>
        </div>
    )
}

export default ArtistList