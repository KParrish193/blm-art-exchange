import React from 'react';

import { InstaContainer, AboutUsContainer, AboutUsTextContent } from '../../global styles/index'
import AboutNav from './AboutNav'


// get instagram feed

function Insta() {
    return(
        <AboutUsContainer>
        <AboutUsTextContent>
            <AboutNav />
    
            <InstaContainer>
                <a href="https://instagram.com/artxblm?igshid=1b2f2j0u0ntyw" target="blank">
                    <h3>@artxblm</h3>
                </a>

                
                {/* perhaps any additional contact info? */}
            
                {/* display insta feed */}
            </InstaContainer>

        </AboutUsTextContent>
        </AboutUsContainer>
    )
}

export default Insta