import React from 'react';
import ProgressBar  from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';

function About(){
    return (
        <div class="container">
            <h1>Art x BLM</h1>
            <p style={{textAlign: "center"}}>This is where the tagline goes.</p>
            <h2><b>Mission</b></h2>
            <div class="container">
                <p>This is where the mission goes. This is where the mission goes. This is where the mission goes.
                This is where the mission goes. This is where the mission goes. This is where the mission goes.
                This is where the mission goes. This is where the mission goes. This is where the mission goes.
                </p>
            </div>
            <div class="container">
                <p style={{textAlign: "center"}}><b>Donations to date</b></p>
                {/* Progress bar */}
                <ProgressBar variant="success" now={60}></ProgressBar>
                <Button variant="flat" size="xxl">Shop</Button>
                <Button variant="flat" size="xxl">Artists</Button>
            </div>
        </div>
    );
}

export default About