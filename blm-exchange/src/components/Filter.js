import React from 'react';

import FilterListIcon from '@material-ui/icons/FilterList';

import { DesktopFilterContainer, MobileFilter, MobileFilterContainer, TagButton } from '../global styles/index';

const medium = [
    'Design & Illustration',
    'Digital Art',
    'Drawing',
    'Painting & Mixed Media', 
    'Photography'
];

var blackArtist = false;

var exchange = false;

function Filter() {
    return(
    <div className="search">
            <DesktopFilterContainer>
                Filter (Desktop)
                <FilterListIcon />
            </DesktopFilterContainer>
            
            <MobileFilter>
                <TagButton>
                    Black   
                </TagButton>
                <TagButton>
                    LGBTQIA+   
                </TagButton>
                <TagButton>
                    POC   
                </TagButton>
                <TagButton>
                    Indigenous   
                </TagButton>
                <TagButton>
                    LatinX   
                </TagButton>
                <TagButton>
                    Exchange   
                </TagButton>
                <TagButton>
                    Photography   
                </TagButton>
                <TagButton>
                    Digital Illustration 
                </TagButton>
                <TagButton>
                    Paint   
                </TagButton>
                <TagButton>
                    Mixed Media
                </TagButton>
            </MobileFilter>

        </div>
    )
}

export default Filter