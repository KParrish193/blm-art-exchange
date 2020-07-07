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
                This is where the mission goes. This is where the mission goes. This is where the mission goes.
                This is where the mission goes. This is where the mission goes. This is where the mission goes.
                This is where the mission goes. This is where the mission goes. This is where the mission goes.
                This is where the mission goes. This is where the mission goes. This is where the mission goes.
                </p>
            </div>
            <div class="container">
                <p style={{textAlign: "center"}}><b>Donations to date</b></p>
                {/* Progress bar */}
                <ProgressBar className="turquoise" animated now={60}></ProgressBar>
                <Button variant="flat" className="float-left" size="lg">SHOP</Button>
                <Button variant="flat" className="float-right" size="lg">ARTISTS</Button>
            </div>
        </div>
    );
}

export default About