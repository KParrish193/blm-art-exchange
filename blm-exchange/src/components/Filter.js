import React from 'react';

import FilterListIcon from '@material-ui/icons/FilterList';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

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
                    Black Artist   
                </TagButton>
                <TagButton>
                    LGBTQIA+   
                </TagButton>
                <TagButton>
                    Exchange   
                </TagButton>
                <TagButton>
                    Photography   
                </TagButton>
                <TagButton>
                    Digital Art 
                </TagButton>
                <TagButton>
                    Painting & Mixed Media   
                </TagButton>
                <TagButton>
                    Design & Illustration
                </TagButton>
                <TagButton>
                    Drawing
                </TagButton>
            </MobileFilter>

        </div>
    )
}

export default Filter