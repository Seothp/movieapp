import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Box, TextField, Button, MenuItem } from '@material-ui/core'
import { makeStyles  } from '@material-ui/core/styles';

import { SearchedItems } from '../searched-items/searched-items'

const areas = [
    { value: 'Movies' },
    { value: 'Tv' }
]


const useStyles = makeStyles({
    header: {
        marginBottom: 24,
        position: 'relative'
    },
    ml2: {
        marginLeft: 16,
    },
    mt2: {
        marginTop: 16,
    },
    select: {
        width: 100,
    },
    button: {
        marginTop: 16,
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
    
    const handleSelectChange = (e) => {
        setSearchArea(e.target.value)
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
                <TextField select onChange={handleSelectChange} label="Area" value={searchArea} className={classes.select}>
                    {areas.map(item => (
                        <MenuItem value={item.value} key={item.value}>
                            {item.value}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField type='text' 
                    className={classes.mt2}
                    value={searchValue} 
                    onChange={handleInputChange}/>
                <Button variant='contained' color='primary' size='small' className={classes.button}>Search</Button>
            </Box >
            <SearchedItems searchValue={searchValue} searchArea={searchArea} />
        </Box>
    )
}