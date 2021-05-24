import React from 'react'
import { Container, Typography } from '@material-ui/core';

export default function Home() {
    return (
        
        <Container maxWidth='md' style={{marginTop:'0px', boxShadow: '2px 2px 5px #eeeeee', borderRadius: '7px'}}>
            <Typography variant='h4'>Welcome to MikeCameron.dev</Typography> 
           <Typography variant='body1'>This is where I will document my discovery with React. You will find that I am learning lots as I go so this will change often </Typography>
           <Typography variant='body1'>Yes, in addition to all the things I do at <a href='mikecameorn.ca'>mikecameron.ca</a> I am having a little fun playing aournd here.</Typography>
           <Typography variant='body1'>Welcome to MikeCameron.dev. This is where I will document my discovery with React. You will find that I am learning lots as I go so this will change often </Typography>
           <hr/> 
           <center>Hello there!</center>
           </Container>
    )
}
