import React,  from 'react'
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';


export default function Footer() {
    return (
        <AppBar position="bottom" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © <Moment format='yyyy' /> Mike Cameron
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}
