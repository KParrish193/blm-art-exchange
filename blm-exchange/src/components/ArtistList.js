import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';

import { PhotoGrid } from '../global styles/index'

import FilterListIcon from '@material-ui/icons/FilterList';

function ArtistList(){

    const [artists, setArtists] = useState([]);
    useEffect(() => {  
        axios
        .get('http://localhost:1337/artists')
        .then(res => {
            console.log('success', res);
            setArtists(res.data)
        })
        .catch(err => console.log(err)); 
    }, []);

    console.log('line 24', artists)
    return(
        <div className="artist-full-page-container">
            <div className="search">
            <FilterListIcon />
            {/* filter/search */}
            </div>

            <div className="artists-container">
            {/* display all artists */}
                <h3>Artists</h3>
                <PhotoGrid className="artist-card-container">
                    {/* map backend data of artists into cards */}
                    {artists.map(artist => (
                    <div className="artist-card">
                        <Link to="/artist/{artist.id}">
                        {/* artist card detail */}
                        <img src={artist.artistProfilePic} />
                        <h3>{artist.firstName} {artist.lastName}</h3>
                        <p>{artist.bio}</p>
                        </Link>
                    </div>
                    ))}

                </PhotoGrid>
            </div>
        </div>
    )
}

export default ArtistList