import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function ArtistList() {

    return(
        <div class="container">
            <Row>
                <Col>
                    <Image src="../../assets/art_samples/cerulean_blue.JPG" fluid />
                    First Last
                </Col>
                <Col>
                    <Image src="../assets/art_samples/indigo_dark.JPG" fluid />
                    First Last
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src="../assets/art_samples/indigo_light.JPG" fluid />
                    First Last
                </Col>
                <Col>
                    <Image src="../assets/art_samples/malachite.JPG" fluid />
                    First Last
                </Col>
            </Row>
        </div>
    )
}

export default ArtistList