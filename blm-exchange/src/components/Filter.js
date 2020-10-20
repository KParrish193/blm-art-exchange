import React, { useCallback, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import FilterListIcon from '@material-ui/icons/FilterList';
import { DesktopFilterContainer, MobileFilter, MobileFilterContainer, TagButton } from '../global styles/index';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

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

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [state, setState] = React.useState({
        black: false,
        design: false,
        digital: false,
        drawing: false,
        painting: false, 
        photo: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
            
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
            <Button style={{color: "white"}} onClick={handleClick}>Filter <FilterListIcon/></Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <div>
                    <MenuItem>
                        <label for="one"><Checkbox id="one" name="filter" onChange={handleChange} onClick={toggleTag} toggled = {false} value="black artists" /> Black Artists</label>
                    </MenuItem>
                </div>
                <div>
                    <MenuItem>
                        <label for="two"><Checkbox id="two" name="filter" onChange={handleChange} onClick={toggleTag} toggled = {false} value="Photography" className="medium" /> Photography</label>
                    </MenuItem>
                </div>
                <div>
                    <MenuItem>
                        <label for="three"><Checkbox id="three" name="filter" onClick={toggleTag} toggled = {false} value="Digital Art" className="medium"/> Digital Art</label>
                    </MenuItem>
                </div>
                <div>
                    <MenuItem>
                        <label for="four"><Checkbox id="four" name="filter" onClick={toggleTag} toggled = {false} value="Painting & Mixed Media" className="medium"/> Painting & Mixed Media</label>
                    </MenuItem>
                </div>
                <div>
                    <MenuItem>
                        <label for="five"><Checkbox id="five" name="filter" onClick={toggleTag} toggled = {false} value="Design & Illustration" className="medium"/> Design & Illustration</label>
                    </MenuItem>
                </div>
                <div>
                    <MenuItem>
                        <label for="six"><Checkbox id="six" name="filter" onClick={toggleTag} toggled = {false} value="Drawing" className="medium"/> Drawing</label>
                    </MenuItem>
                </div>
            </Menu>
        </DesktopFilterContainer>
{/*             <MobileFilter>
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
            </MobileFilter> */}
        </div>
    )
}

export default Filter