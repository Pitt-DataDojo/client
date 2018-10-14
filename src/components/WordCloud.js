import React, { Component } from 'react';
import { Card } from 'antd';
import '../styles/WordCloud.css';

class WordCloud extends Component {

  render() {
    if(this.props.data.wordCloud){
      const url = `http://datadojobluehack-boring-chimpanzee.us-east.mybluemix.net/` + this.props.data.wordCloud;
      return (
        <Card className="Drug">
          <h1>Side Effects Reported by Patients</h1>
          <figure>
            <img id="WordCloud" src={url}></img>
          </figure>
        </Card>
      );
    }else{
      return null;
    }
  }
}

export default WordCloud;
