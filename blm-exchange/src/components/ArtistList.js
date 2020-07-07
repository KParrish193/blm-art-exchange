import React, { useContext } from 'react'

import { ArtistContext } from '../contexts/ArtistContext';

import { Link } from 'react-router-dom';

import FilterListIcon from '@material-ui/icons/FilterList';


function ArtistList(){
    const { artists } = useContext(ArtistContext)

    return(
        <div className="artist-full-page-container">
            <div className="search">
            <FilterListIcon />
            {/* filter/search */}
            </div>

            <div className="artists-container">
            {/* display all artists */}
            <h3>Artists</h3>
            <div className="artist-card-container">
                {/* map backend data of artists into cards */}
                {artists.map(artist => (
				<div className="artist-card">
                    <Link to="/artist/{artist.id}">
                    {/* artist card detail */}
                    <img src={artist.image} />
                <h3>{artist.name}</h3>
                    <p>{artist.bio}</p>
                    </Link>
                </div>
			))}
                {/* display grid of artist cards */}
            </div>
            </div>
        </div>
    )
}

export default ArtistList