import React from 'react';
import { default as MUIDialog, DialogProps } from '@mui/material/Dialog';

// import {Button as MUIButton} from '../Button'


export const Modal: React.FunctionComponent<DialogProps> = (props) => {
    // console.log("Props====>",props)
    return <MUIDialog {...props}>

    {/* <MUIButton color='primary' onClick={()=> {clicked()}}>Primary</MUIButton> */}

    </MUIDialog>
};


// function clicked(){
//     alert("Helloooo");
    
// }