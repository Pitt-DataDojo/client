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
    return (
      <Card className="Drug" title={this.props.drugName}>

      </Card>
    );
  }
}

export default Drug;
