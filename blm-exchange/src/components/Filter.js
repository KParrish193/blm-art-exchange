import React, { useCallback, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import FilterListIcon from '@material-ui/icons/FilterList';
import { DesktopFilterContainer, MobileFilter, MobileFilterContainer, TagButton } from '../global styles/index';
import { useEffect } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Filter({toggledTags, onTagChange}) {    
    const toggleTag = useCallback(e => {
        e.preventDefault()
        e.persist()
        e.target.classList.toggle("toggled")
        // if a tag is not selected, select it
        if (!e.target.toggled){
            e.target.toggled = true
            e.target.style.background = "#990000"
            onTagChange(toggledTags=>([...toggledTags, e.target.value]))
        }
        // else unselect
        else{
            onTagChange(toggledTags=>([...toggledTags.filter((tag) => tag !== e.target.value)]))
            e.target.toggled = false
            e.target.style.background = "black"
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
            <Accordion style={{position: 'static'}}>
                    <AccordionSummary 
                    expandIcon={<FilterListIcon style={{color: 'white', position: 'static'}} />}
                    style={{backgroundColor: 'black', color: 'white', position: 'static'}}>   
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor: 'black', color: 'white'}}>
                        <MobileFilter>
                            <div>
                                <TagButton onClick={toggleTag} toggled = {false} value="black artists">
                                    Black Artists
                                </TagButton>
                            </div>
                            <div>
                                <TagButton onClick={toggleTag} toggled = {false} value="Exchange" className="medium">
                                    Exchange   
                                </TagButton>
                                <TagButton onClick={toggleTag} toggled = {false} value="Photography" className="medium">
                                    Photography   
                                </TagButton>
                                <TagButton onClick={toggleTag} toggled = {false} value="Digital Art" className="medium">
                                    Digital Art 
                                </TagButton>
                                <TagButton onClick={toggleTag} toggled = {false} value="Painting & Mixed Media" className="medium">
                                    Painting & Mixed Media   
                                </TagButton>
                                <TagButton onClick={toggleTag} toggled = {false} value="Design & Illustration" className="medium">
                                    Design & Illustration
                                </TagButton>
                                <TagButton onClick={toggleTag} toggled = {false} value="Drawing" className="medium">
                                    Drawing
                                </TagButton>
                            </div>
                        </MobileFilter>
                    </AccordionDetails>
                </Accordion>
            </DesktopFilterContainer>
        </div>
    )
}

export default Filter