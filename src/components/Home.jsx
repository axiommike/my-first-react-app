import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import card1 from '../img/card1.jpg'
import card2 from '../img/card2.jpg'
import card3 from '../img/card3.jpg'


export default function Home() {
  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: "0px",
        overflow: 'auto',
      }}
    >
      <Card>
        <CardMedia height='300' component='img' image='https://mikecameron.ca/wp-content/uploads/2020/08/banner-home-quote.jpg'></CardMedia>
        <CardHeader
          title="Welcome to MikeCameron.dev"
          subheader="This is where I am learning React"
        ></CardHeader>
        <CardContent>
          <Typography variant="body1">
            This is where I will document my discovery with React. You will find
            that I am learning lots as I go so this will change often{" "}
          </Typography>
          <Typography variant="body1">
            Yes, in addition to all the things I do at{" "}
            <a href="https://mikecameron.ca">mikecameron.ca</a> I am having a
            little fun playing aournd here.
          </Typography>
          <Typography variant="body1">
            You can have a look at my Git repo to see how much I mess up and
            experiment here:{" "}
            <a href="https://github.com/axiommike/my-first-react-app">
              My First React App
            </a>{" "}
          </Typography>
        </CardContent>
      </Card>

      <hr />
      <Grid container spacing={1}>
        <Grid item lg={4}>
          <Card>
            <CardMedia
              height="240"
              component="img"
              src={card1}
            />
            <CardHeader
              title="A card with react Material-UI"
              subheader="First go round playing with Material UI Grid"
            ></CardHeader>
            <CardContent><p>This is an example of &lt;Cards&gt; inside of Material UI &lt;Grid/&gt;&nbsp;</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4}>
          <Card style={{marginBottom: 40}}>
            <CardMedia
              height="200"
              component="img"
              src={card2}
            />
            <CardHeader
              title="This is a feature card"
              subheader="This would be a cool tagline"
            ></CardHeader>
            <CardContent><p>Perhaps I could put a little bit in here about me. I love, love, love learning and technology so here we go learning React. I&#39;m really enjoying playing with Material-UI <strong>&lt;Grid&gt;</strong> and <strong>&lt;Card&gt; </strong>components. I think the next step will be to build out a contact form. Perhaps play with Sendgrid API. I am really enjoying this full seperation of front end from the back. Anyhow I&#39;d invite you to drop a comment but I have no back end here yet. Maybe that will come soon as well. For now I am tapping into my Wordpress API to pull a few blog articles.</p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p></CardContent>
          </Card>
        </Grid>
        <Grid item lg={4}>
          <Card>
            <CardMedia
              height="240"
              component="img"
              src={card3}
            />
            <CardHeader
              title="This is a new feature card"
              subheader="This should also have an image"
            ></CardHeader>

            <CardContent>
              This would be all the awesome content especially if an image were
              displaying as expected. ah... I had not added component=img to
              &#x3C;CardMedia&#x3E;
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <center>Hello there!</center>
    </Container>
  );
}
