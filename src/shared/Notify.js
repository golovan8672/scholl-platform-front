import React from 'react';
import Snackbar from '@mui/material/Snackbar';

const Notify = ({variant, message}) => {
    let vert, hor;

    if (variant === 'top-center') {
        vert = 'top'
        hor = 'center'
    }

    console.log(message)
    return (
        <Snackbar
        anchorOrigin={{vert, hor}}
        open={true}
        autoHideDuration={3000}
        message={message}
        key={vert + hor}
      />
    )
}

export default Notify