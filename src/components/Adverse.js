import React, { Component } from 'react';
import Drug from './Drug.js';
import '../styles/Results.css';

class Results extends Component {
  render() {
    return(
      <div id="Results">
        <Drug drugName = {this.props.drugName}/>
      </div>
    )
  }
}

export default Results;
