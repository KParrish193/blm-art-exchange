import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';

import { ListPageContainer, PhotoGrid, ArtistCard } from '../global styles/index'

import Filter from './Filter';

function ArtistList(){

    const [artists, setArtists] = useState([]);
    useEffect(() => {  
        axios
        .get('https://artxblm-backend.herokuapp.com/artists')
        .then(res => {
            console.log('success', res);
            setArtists(res.data)
        })
        .catch(err => console.log(err)); 
    }, []);

    console.log('line 24', artists)
    return(
        <ListPageContainer className="artist-full-page-container">
            <h3>Artists</h3>
            <Filter />

                <PhotoGrid className="artist-card-container">
                    {/* map backend data of artists into cards */}
                    {artists.map(artist => (
                    <ArtistCard className="artist-card">
                        <Link to="/artist/{artist.id}">
                        {/* artist card detail */}
                        <div className="name-img">
                        <h3>{artist.firstName} {artist.lastName}</h3>
                        {/* <img src={artist.artistProfilePic} /> */}
                        </div>
                        <p>{artist.bio}</p>
                        </Link>
                    </ArtistCard>
                    ))}

                </PhotoGrid>
        </ListPageContainer>
    )
}

export default ArtistList