import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Box, Grid } from '@material-ui/core';

import { TMD_URL, TMD_API_KEY, TMD_IMG_URL } from '../../constants'

export const TvShow = () => {
    const { id } = useParams();
    return (
        <Box>
            <span className="text">
                {id}
            </span>
        </Box>
    )
}