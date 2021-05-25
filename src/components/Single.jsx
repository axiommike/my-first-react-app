import React from 'react'
import axios from 'axios';

import { CircularProgress,  Paper, Typography } from '@material-ui/core';

export default class Single extends React.Component {
    constructor(props) {
      super(props); 
       this.state = {
        post : [],
        isLoaded: false      
      };
     this.buildUrl();
    }
   
   componentDidMount(){   
    axios
    .get(this.buildUrl())
    .then((res) =>
      this.setState({
        post: res.data,
        isLoaded: true,
      })
    )
    .catch((err) => console.log("error"+err));
    }
   
   componentDidUpdate(prevProps){
      //more code here later...
   }

   buildUrl(){
       let slug = this.props.match.url;
       slug = slug.substring(5);
       return "https://mikecameron.ca/wp-json/wp/v2/posts?slug="+slug;
   }
   render() {
    const post = this.state.post[0];
    const isLoaded = this.state.isLoaded;
      return (
          <div>
        { isLoaded ? 
        <Paper>
            <Typography variant='h4'>{post.title.rendered}</Typography> 
            <div dangerouslySetInnerHTML={{__html:post.content.rendered}}/> 
            
        </Paper>
        : <CircularProgress/> }
        </div>
      );
    }
  } 