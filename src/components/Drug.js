import React, { Component } from 'react';
import { Card } from 'antd';
import ReactHtmlParser from 'react-html-parser';
import '../styles/Drug.css';

class Drug extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }




  render() {
    console.log(this.props.data);
    if(this.props.data){
      return (
        <Card className="Drug" title={this.props.drugName}>
          <p>{this.props.data[0].description[0]}</p>
          <div>{ ReactHtmlParser(this.props.data[0].dosage_and_administration_table[0]) }</div>
        </Card>
      );
    }else{
      return null;
    }
  }
}

export default Drug;
