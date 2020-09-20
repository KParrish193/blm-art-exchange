import React, { useCallback, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import FilterListIcon from '@material-ui/icons/FilterList';
import { DesktopFilterContainer, MobileFilter, MobileFilterContainer, TagButton } from '../global styles/index';
import { useEffect } from 'react';

const medium = [
    'Design & Illustration',
    'Digital Art',
    'Drawing',
    'Painting & Mixed Media', 
    'Photography'
];

var exchange = false;

function Filter({toggledTags, onTagChange}) {    
    const toggleTag = useCallback(e => {
        e.preventDefault()
        e.persist()
        e.target.classList.toggle("toggled")
        // if a tag is not selected, select it
        if (!e.target.toggled){
            e.target.toggled = true
            e.target.style.color = "yellow"
            onTagChange(toggledTags=>([...toggledTags, e.target.value]))
        }
        // else unselect
        else{
            onTagChange(toggledTags=>([...toggledTags.filter((tag) => tag !== e.target.value)]))
            e.target.toggled = false
            e.target.style.color = "white"
        }
      }, [onTagChange])
      

    // console.log(toggledTags)
    // const { products } = useContext(ProductContext)
    // products.forEach((product, index) => {
    //     console.log(index, product.artistID.blackArtist, [product.artistID.medium])
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
                <TagButton onClick={toggleTag} toggled = {false} value="black artists" style={{color:'white'}}>
                    Black Artists
                </TagButton>
                </div>
                <div>
                <TagButton onClick={toggleTag} toggled = {false} value="Exchange" style={{color:'white'}} className="medium">
                    Exchange   
                </TagButton>
                <TagButton onClick={toggleTag} toggled = {false} value="Photography" style={{color:'white'}} className="medium">
                    Photography   
                </TagButton>
                <TagButton onClick={toggleTag} toggled = {false} value="Digital Art" style={{color:'white'}} className="medium">
                    Digital Art 
                </TagButton>
                <TagButton onClick={toggleTag} toggled = {false} value="Painting & Mixed Media" style={{color:'white'}} className="medium">
                    Painting & Mixed Media   
                </TagButton>
                <TagButton onClick={toggleTag} toggled = {false} value="Design & Illustration" style={{color:'white'}} className="medium">
                    Design & Illustration
                </TagButton>
                <TagButton onClick={toggleTag} toggled = {false} value="Drawing" style={{color:'white'}} className="medium">
                    Drawing
                </TagButton>
                </div>
            </MobileFilter>
        </div>
    )
}

export default Filter