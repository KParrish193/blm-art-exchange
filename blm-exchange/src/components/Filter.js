import React, { useCallback } from 'react';

import FilterListIcon from '@material-ui/icons/FilterList';
import { DesktopFilterContainer, MobileFilter, MobileFilterContainer, TagButton } from '../global styles/index';

const medium = [
    'Design & Illustration',
    'Digital Art',
    'Drawing',
    'Painting & Mixed Media', 
    'Photography'
];

var exchange = false;

function Filter({toggledTags, setToggledTags}) {    
    const toggleTag = useCallback(e => {
        e.preventDefault()
        e.target.classList.toggle("toggled")
        if (!toggledTags.includes(e.target.value)) {
            setToggledTags([...toggledTags, e.target.value]);
        } else {
            const filter = toggledTags.filter((tag) => tag !== e.target.value);
            setToggledTags(filter);
        };
      }, [setToggledTags])
    
    // console.log(toggledTags)
    // const { products } = useContext(ProductContext)
    // products.forEach(product => {
    //     console.log([product.artistID.medium])
    // });
    
    // let blackArtist = products.filter(artist => artist.artistID.blackArtist === true);
    // console.log('black artist filter', blackArtist)
    
    return(
    <div className="search">
            <DesktopFilterContainer>
                Filter (Desktop)
                <FilterListIcon />
            </DesktopFilterContainer>
            
            <MobileFilter>
                <div>
                <TagButton onClick={toggleTag} value="black artists">
                    Black Artists
                </TagButton>
                </div>
                <div>
                <TagButton onClick={toggleTag} value="Exchange" className="medium">
                    Exchange   
                </TagButton>
                <TagButton onClick={toggleTag} value="Photography" className="medium">
                    Photography   
                </TagButton>
                <TagButton onClick={toggleTag} value="Digital Art" className="medium">
                    Digital Art 
                </TagButton>
                <TagButton onClick={toggleTag} value="Painting & Mixed Media" className="medium">
                    Painting & Mixed Media   
                </TagButton>
                <TagButton onClick={toggleTag} value="Design & Illustration" className="medium">
                    Design & Illustration
                </TagButton>
                <TagButton onClick={toggleTag} value="Drawing" className="medium">
                    Drawing
                </TagButton>
                </div>
            </MobileFilter>
        </div>
    )
}

export default Filter