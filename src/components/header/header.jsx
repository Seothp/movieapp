import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Box, TextField, Button, MenuItem } from '@material-ui/core'
import { makeStyles  } from '@material-ui/core/styles';

import { SearchedItems } from '../searched-items/searched-items'

const areas = [
    { value: 'movies' },
    { value: 'tv' }
]


const useStyles = makeStyles({
    header: {
        marginBottom: 24,
        position: 'relative'
    },
    ml2: {
        marginLeft: 16,
    }
})
export const Header = () => {
    let [ searchValue, setSearchValue] = useState('');
    let [ searchArea, setSearchArea ] = useState('');

    const classes = useStyles();

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }
    
    const handleSelectChange = () => {

    }
    return (
        <Box component='header' className={`header ${classes.header}`}>
            <Box component='nav' m={2}>
                <ul className="main-nav">
                    <li className="main-nav__item">
                        <NavLink className='main-nav__link' exact to='/'>Home</NavLink>
                    </li>
                    <li className="main-nav__item">
                        <NavLink className='main-nav__link' to='/movies'>Movies</NavLink>
                    </li>
                    <li className="main-nav__item">
                        <NavLink className='main-nav__link' to='/tv'>TV-Show</NavLink>
                    </li>
                </ul>
            </Box>
            <Box className="search-menu" m={2}>
                <TextField select onChange={handleSelectChange} >
                    {areas.map(item => (
                        <MenuItem value={item.value} key={item.value}>
                            {item.value}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField type='text' className='search-menu__input' value={searchValue} onChange={handleInputChange}/>
                <Button variant='contained' color='primary' size='small' className={classes.ml2}>Search</Button>
            </Box >
            <SearchedItems searchValue={searchValue}/>
        </Box>
    )
}