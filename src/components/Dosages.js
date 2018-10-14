import React, { Component } from 'react';
import { Card } from 'antd';
import ReactHtmlParser from 'react-html-parser';
import '../styles/Dosages.css';

class Dosages extends Component {

  render() {
    if(this.props.data.labelInfo){
      return (
        <Card className="Drug">
        <h1>Dosages</h1>
          <div>{ ReactHtmlParser(this.props.data.labelInfo[0].dosage_and_administration_table[0]) }</div>
        </Card>
      );
    }else{
      return null;
    }
  }
}

export default Dosages;
