import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router'; 
import { Link } from 'react-router-dom';

import { Carousel } from 'react-bootstrap'


import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Inquiry from './Inquiry';

import { TagButton, CarouselContainer, ArtistContentContainer, ArtistProfileContainer } from '../global styles'


// carousel styling
const contentStyle = {
    height: '160px',
    color: '#blue',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function onChange(a, b, c) {
    console.log(a, b, c);
}

function ArtistProfile(){
    const [artists, setArtists] = useState([]);

    const { id } = useParams()

    useEffect(() => {  
        axios
        .get(`https://artxblm-backend.herokuapp.com/artists/${id}`)
        .then(res => {
            console.log('success', res);
            setArtists(res.data)
        })
        .catch(err => console.log(err)); 
    }, [id]);

    // splitting mediums tags
    const mediums = `${artists.medium}`
    const splits = mediums.split(",")

    // logic for demographic tags
    if(artists.blackArtist === true){
        splits.push("Black Artist");
    }
    
    if(artists.latinx === true){
        splits.push("LatinX Artist")
    }
    
    if(artists.lgbtq === true){
        splits.push("LGBTQIA+ Artist")
    }
    
    if(artists.poc === true){
        splits.push("POC Artist")
    }
    
    if(artists.indigenous === true){
        splits.push("Indigenous Artist")
    }
    
// logic for mediums
    if(artists.digital === true){
        splits.push("Digital")
    }


// NULL Logic 
// logic to set display of twitter to none if no twitter is given
    if(artists.twitter === null){
        var twitter = document.getElementsByClassName("twitter");
        var i
        for (i = 0; i < twitter.length; i++) {
            twitter[i].style.display = "none";
        }
    }

// logic to set display of insta to none if no insta is given
    if(artists.instagram === null){
        var insta = document.getElementsByClassName("insta");
        var j
        for (j = 0; j < insta.length; j++) {
            insta[j].style.display = "none";
        }
    }

// logic to set display of location to none if no location is given
    if(artists.location === null){
        var loc = document.getElementsByClassName("location");
        var k
        for (k = 0; k < loc.length; k++) {
            loc[k].style.display = "none";
        }
    }

// logic to set display of pronouns to none if none given
    if(artists.pronouns === null){
        var pro = document.getElementsByClassName("pronouns");
        var l
        for (l = 0; l < pro.length; l++) {
            pro[l].style.display = "none";
        }
    }

    // logic to set display of tags to none if no info is given
    if(splits === null || artists.medium === null ){
        var t = document.getElementsByClassName("artist-tags");
        var m
        for (m = 0; m < t.length; m++) {
            t[m].style.display = "none";
        }
    }

    

    return(
        <ArtistProfileContainer>
            {/* display all artist products to buy, specific to single artist, perhaps artist details like social media. Link to inquiry */}
        <CarouselContainer
            style={{
                position: 'relative'
            }}>
            
            {Object.keys(artists).length > 0 ? (
            <Carousel>
                {artists.printID.map((print) => {
                    return (
                        <Carousel.Item>
                            <Link to={`/shop/print/${print.id}`}>
                            <img 
                                src={`${print.image.formats.small.url}`}
                                style={{
                                    margin: '0 auto'
                                }}/>
                            </Link>
                        </Carousel.Item>
                    );
                    })}
                </Carousel>
                ) : (
                    ""
                )}
                
        </CarouselContainer>

        <ArtistContentContainer>
            <h3>{artists.firstName} {artists.lastName}</h3>
            <h5 className="pronouns">({artists.pronouns})</h5>
            <div className="location"><LocationOnIcon className="icon"/><h6> {artists.location}</h6></div>
            <h4 className="insta"><a href={'https://instagram.com/' + artists.instagram +'/'} target="blank">
                <InstagramIcon className="icon"/> @{artists.instagram}
                </a>
            </h4>

            <h4 className="twitter"><a href={'https://twitter.com/' + artists.twitter +'/'} target="blank">
                <TwitterIcon className="icon"/> @{artists.twitter}
                </a>
            </h4>

            <div className="artist-tags">
            {splits.map((tags, id)=>
            <TagButton>{tags}</TagButton>
            )}
            </div>

        <p>{artists.bio}</p>
    
        </ArtistContentContainer>

        {/* inquiry as modal */}
        {/* <Inquiry /> */}
        
        </ArtistProfileContainer>
    )
}

export default ArtistProfile