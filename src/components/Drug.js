import React, { Component } from 'react';
import { Card } from 'antd';
import '../styles/Drug.css';

class Drug extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }




  render() {
    if(this.props.data.labelInfo){
      return (
        <Card className="Drug">
        <h1>Drug Description</h1>
          <p>{this.props.data.labelInfo[0].description[0]}</p>
        </Card>
      );
    }else{
      return null;
    }
  }
}

export default Drug;
