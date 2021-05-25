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
              height="140"
              component="img"
              image="https://mikecameron.ca/wp-content/uploads/2021/05/imposter-syndrome-768x432.png"
            />
            <CardHeader
              title="This is a feature card"
              subheader="This would be a cool tagline"
            ></CardHeader>
            <CardContent>This would be all the awesome content</CardContent>
          </Card>
        </Grid>
        <Grid item lg={4}>
          <Card>
            <CardMedia
              height="140"
              component="img"
              image="https://mikecameron.ca/wp-content/uploads/2021/05/imposter-syndrome-768x432.png"
            />
            <CardHeader
              title="This is a feature card"
              subheader="This would be a cool tagline"
            ></CardHeader>
            <CardContent>This would be all the awesome content</CardContent>
          </Card>
        </Grid>
        <Grid item lg={4}>
          <Card>
            <CardMedia
              height="140"
              component="img"
              image="https://mikecameron.ca/wp-content/uploads/2021/05/imposter-syndrome-768x432.png"
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
