import React, { Component } from 'react';
import { Card } from 'antd';
import '../styles/Ratings.css';

class Ratings extends Component {

  render() {
    if(this.props.data.wordCloud){
      const url = `http://datadojobluehack-boring-chimpanzee.us-east.mybluemix.net/` + this.props.data.ratings;
      return (
        <Card className="Drug">
          <h1>Drug Ratings Based on Effectiveness</h1>
          <img id="Ratings" src={url}></img>
        </Card>
      );
    }else{
      return null;
    }
  }
}

export default Ratings;
