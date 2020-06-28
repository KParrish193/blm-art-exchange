import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import wave1 from '../assets/art_samples/cerulean_blue.JPG';
import wave2 from '../assets/art_samples/indigo_dark.JPG'

function ArtistList() {

    return(
        <Container>
            <Row>
                <Col xs={3} md={3}>
                    <Image src={wave1} width={180} height={180} rounded fluid thumbnail/>
                </Col>
                <Col xs={3} md={3}>
                    <h3>First Last</h3>
                    <p>Bio & details go here. Bio & details go here. Bio & details go here.</p>
                    <p>Link</p>
                </Col>
                <Col xs={3} md={3}>
                    <Image src={wave2} width={180} height={180} rounded fluid thumbnail/>
                </Col>
                <Col xs={3} md={3}>
                    <h3>First Last</h3>
                    <p>Bio & details go here. Bio & details go here. Bio & details go here.</p>
                    <p>Link</p>
                </Col>
            </Row>
            <Row>
                <Col xs={3} md={3}>
                    <Image src={wave1} width={180} height={180} rounded fluid thumbnail/>
                </Col>
                <Col xs={3} md={3}>
                    <h3>First Last</h3>
                    <p>Bio & details go here. Bio & details go here. Bio & details go here.</p>
                    <p>Link</p>
                </Col>
                <Col xs={3} md={3}>
                    <Image src={wave2} width={180} height={180} rounded fluid thumbnail/>
                </Col>
                <Col xs={3} md={3}>
                    <h3>First Last</h3>
                    <p>Bio & details go here. Bio & details go here. Bio & details go here.</p>
                    <p>Link</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ArtistList