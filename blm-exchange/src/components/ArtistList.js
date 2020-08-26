import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';

import { ListPageContainer, PhotoGrid, ArtistCard, ThumbnailContainer, ProductImg } from '../global styles/index'

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

    const filteredArtists = artists.filter(artist => artist.printID.length > 0);

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


    const sortedArtists = filteredArtists.sort(compare)
    



 


    return(
        <ListPageContainer className="artist-full-page-container">
            <h3>Artists</h3>
            <Filter />

                <PhotoGrid className="artist-card-container">
                    {/* map backend data of artists into cards */}
                    {sortedArtists.map(artist => {
                            var _ = require('underscore')
                            var shuffledPrints = _.shuffle(artist.printID)

                    return (
                    <ArtistCard className="artist-card" key={artist.id}>
                        <Link to={`/artists/${artist.id}`}>
                        
                        {/* artist card detail */}
                        <div>
                            <ThumbnailContainer>
                                <ProductImg src={`${shuffledPrints[0].image.formats.small.url}`} />
                            </ThumbnailContainer>
                        <div className="name-img">
                        <div className="name">
                        <h4>{artist.firstName} {artist.lastName}</h4>
                        <p>{artist.bio}</p>
                        </div>
                        <p className="readMore">More About This Artist</p>
                        </div>
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