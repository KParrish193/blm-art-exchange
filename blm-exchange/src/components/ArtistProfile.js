import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { useParams } from 'react-router' 
import Inquiry from './Inquiry';
import { Carousel } from 'antd'

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
        <div>
            {/* display all artist products to buy, specific to single artist, perhaps artist details like social media. Link to inquiry */}
        
        <h3>{artists.firstName} {artists.lastName}</h3>
        <h3></h3>
        <p>{artists.bio}</p>

            <Carousel afterChange={onChange} >
            {/* {printArr.map((print) => (
                <div>
                    <img src={`${print.image.formats.small.url}`}/>
                </div>))} */}



            </Carousel>
    

        {/* inquiry as modal */}
        {/* <Inquiry /> */}
        
        </div>
    )
}

export default ArtistProfile