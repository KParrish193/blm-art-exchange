import React, { useContext, useState } from 'react';

import FilterListIcon from '@material-ui/icons/FilterList';
import { ProductContext } from '../contexts/ProductContext';
import { DesktopFilterContainer, MobileFilter, MobileFilterContainer, TagButton } from '../global styles/index';

const medium = [
    'Design & Illustration',
    'Digital Art',
    'Drawing',
    'Painting & Mixed Media', 
    'Photography'
];

var exchange = false;

function Filter() {
    const [toggledTags, setToggledTags] = useState([]);
    
    const toggleTag = (e) => {
        e.preventDefault(); // prevent default refresh from button clicks
        e.target.classList.toggle("toggled"); // toggle the 'toggled' class for styling when clicked

        /* if our toggled tags array does NOT include the selected tag,
                then we should add it to our toggled tags array */
        if (!toggledTags.includes(e.target.value)) {
            setToggledTags([...toggledTags, e.target.value]);
        } else {
            /* otherwise we should filter it out, and update our toggled tags state 
                    with the remaining toggled tags */
            const filter = toggledTags.filter((tag) => tag !== e.target.value);
            setToggledTags(filter);
        };
    }

    const { products } = useContext(ProductContext)
    console.log('filter', products)
    
    
    let blackArtist = products.filter(artist => artist.blackArtist === true);
    console.log('black artist filter', blackArtist)


    
    
    return(
    <div className="search">
            <DesktopFilterContainer>
                Filter (Desktop)
                <FilterListIcon />
            </DesktopFilterContainer>
            
            <MobileFilter>
                <TagButton onClick={toggleTag} value="black artists">
                    Black Artists
                </TagButton>
                <TagButton onClick={toggleTag} value="lgbtq artists">
                    LGBTQIA+ Artists  
                </TagButton>
                <TagButton>
                    Exchange   
                </TagButton>
                <TagButton onClick={toggleTag} value="photography">
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