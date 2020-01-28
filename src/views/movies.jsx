import React from 'react';
import { Container } from '@material-ui/core';
import { Header } from '../components/header/header'

export const Movies = ({classes}) => {
    
    return(
        <Container component='div'>
            <Header classes={classes}/>
        </Container>
    )
}

