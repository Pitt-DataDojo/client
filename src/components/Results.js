import React, { Component } from 'react';
import Drug from './Drug.js';
import Adverse from './Adverse.js';
import '../styles/Results.css';

class Results extends Component {


  render() {
    return(
      <div id="Results">
        <Drug data={this.props.labelInfo} drugName = {this.props.drugName}/>
        <Adverse data={this.props.adverseEffects} />
      </div>
    )
  }
}

export default Results;
