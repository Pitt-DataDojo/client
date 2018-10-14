import React, { Component } from 'react';
import { Card } from 'antd';
import '../styles/Comments.css';

class Comments extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }




  render() {
    if(this.props.data.comments){
      let comments = [];
      for(var key in this.props.data.comments){
        comments.push(this.props.data.comments[key]);
      }
      const commentBox = comments.map((comment) =>
        <Card className ="Comment">{comment}</Card>
      );
        return (
          <React.Fragment>
            <h1>Patient Comments</h1>
            {commentBox}
          </React.Fragment>
        )
    }else{
      return null;
    }
  }
}

export default Comments;
