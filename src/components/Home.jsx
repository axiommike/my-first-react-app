import React from 'react'
import { Container, Typography } from '@material-ui/core';

export default function Home() {
    return (
        
        <Container maxWidth='md' style={{marginTop:'0px', boxShadow: '2px 2px 5px #eeeeee', borderRadius: '7px'}}>
            <Typography variant='h4'>Welcome to MikeCameron.dev</Typography> 
           <Typography variant='body1'><p/>This is where I will document my discovery with React. You will find that I am learning lots as I go so this will change often </Typography>
           <Typography variant='body1'><p/>Yes, in addition to all the things I do at <a href='mikecameorn.ca'>mikecameron.ca</a> I am having a little fun playing aournd here.</Typography>
           <Typography variant='body1'><p/>Welcome to MikeCameron.dev. This is where I will document my discovery with React. You will find that I am learning lots as I go so this will change often </Typography>
           <hr/> 
           <center><iframe src="https://player.vimeo.com/video/493450615" width="640" height="360" valign='center' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></center>
           </Container>
    )
}
