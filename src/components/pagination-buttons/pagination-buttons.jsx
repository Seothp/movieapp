import React from 'react';
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    buttonBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    mx4: {
        margin: '0 32px',
    }
});

export const PaginationButtons = ({ backPage, nextPage, currentPage, maxPage }) => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.buttonBox}>
                <Button onClick={backPage} variant='contained' color='primary' >
                    back
    </Button>
                <span className={classes.mx4}>
                    {currentPage}/{maxPage}
                </span>
                <Button onClick={nextPage} variant='contained' color='primary'>
                    next
    </Button>
            </Box>
        </>
    )
}