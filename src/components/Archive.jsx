import React, { Component } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import { renderHTML } from "react-render-html";

export default class Archive extends Component {
  state = {
    posts: [],
    isLoading: false,
  };

  componentDidMount() {
    axios
      .get("https://mikecameron.ca/wp-json/wp/v2/posts/")
      .then((res) =>
        this.setState({
          posts: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    let posts = this.state.posts;
    return (
     
        <Grid container>
          {posts.map((item) => (
              
            <Grid item sm={4} key={item.id}>
              <Card>
                <CardHeader title={item.title.rendered} subheader={item.date}></CardHeader>
                <CardContent>{item.content.rendered}</CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      
    );
  }
}
