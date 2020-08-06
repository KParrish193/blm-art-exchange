import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Carousel } from 'antd'
import { useParams } from 'react-router' 
import InstagramIcon from '@material-ui/icons/Instagram';
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

    console.log("Artist Profile", artists)

    const printArr = artists.printID
    console.log('print array', printArr)

    return(
        <ArtistProfileContainer>
            {/* display all artist products to buy, specific to single artist, perhaps artist details like social media. Link to inquiry */}
        <CarouselContainer>
            <Carousel afterChange={onChange} >
            {/* {printArr.map((print) => (
                <div>
                    <img src={`${print.image.formats.small.url}`}/>
                </div>))} */}



            </Carousel>
        </CarouselContainer>

        <ArtistContentContainer>
        <h3>{artists.firstName} {artists.lastName}</h3>
        <h4><a href={'https://instagram.com/' + artists.instagram +'/'} target="blank">
            <InstagramIcon className="icon"/> @{artists.instagram}
            </a>
        </h4>
            <div>
                {/* artists tags */}
            </div>
        <p>{artists.bio}</p>
    
        </ArtistContentContainer>

        {/* inquiry as modal */}
        {/* <Inquiry /> */}
        
        </ArtistProfileContainer>
    )
}

export default ArtistProfile