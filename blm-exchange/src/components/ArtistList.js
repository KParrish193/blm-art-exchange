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

    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const artistA = a.firstName.toUpperCase();
        const artistB = b.firstName.toUpperCase();

        let comparison = 0;
        if (artistA > artistB) {
            comparison = 1;
        } else if (artistA < artistB) {
            comparison = -1;
        }
            return comparison;
    }

    const sortedArtists = artists.sort(compare)
    
    var _ = require('underscore')
    // const shuffledArtists = _.shuffle(artists)

    const artistPrints = artists.map(artist => {
        return (
            (_.shuffle(artist.printID))
        )
    })

    const shuffledArtistPrints = artistPrints.map(print => {
        console.log("2nd map", print)

    })
        // console.log("shuffledPrints", shuffledArtistPrints)


    return(
        <ListPageContainer className="artist-full-page-container">
            <h3>Artists</h3>
            <Filter />

                <PhotoGrid className="artist-card-container">
                    {/* map backend data of artists into cards */}
                    {sortedArtists.map(artist => {

                    return (
                    <ArtistCard className="artist-card" key={artist.id}>
                        <Link to={`/artists/${artist.id}`}>
                        {/* artist card detail */}
                        <div>
                            {/* <img src={artist.printID[0].image.formats.small.url} /> */}
                        </div>
                        <div className="name-img">
                        <h4>{artist.firstName} {artist.lastName}</h4>
                        
                        <p>{artist.bio}</p>
                        </div>
                        </Link>
                    </ArtistCard>
                    )}
                    )}

                </PhotoGrid>
        </ListPageContainer>
    )
}

export default ArtistList