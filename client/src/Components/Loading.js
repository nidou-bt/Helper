import React from 'react'
import './Components.css'
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
const Loading = () => {
    return (
        <div className='centerLoading'>
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="success" />
            </Stack>
        </div>
    )
}

export default Loading
