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
      <div style={{width:"70%"}}>
      <Card title={this.props.drugName}>

      </Card>
      </div>
    );
  }
}

export default Drug;
