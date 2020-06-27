import React from 'react';
import ProgressBar  from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';

function About(){
    return (
        <div>
            <h1>Art x BLM</h1>
            <p>This is where the tagline goes.</p>
            <h2><b>Mission</b></h2>
            <p>This is where the mission goes. This is where the mission goes. This is where the mission goes.
            This is where the mission goes. This is where the mission goes. This is where the mission goes.
            This is where the mission goes. This is where the mission goes. This is where the mission goes.
            </p>
            <p><b>Donations to date</b></p>
            {/* Progress bar */}
            <ProgressBar variant="success" now={60}></ProgressBar>
            <Button>Shop</Button>
            <Button>Artists</Button>
        </div>
    );
}

export default About