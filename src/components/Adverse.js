import React, { Component } from 'react';
import Drug from './Drug.js';
import '../styles/Results.css';

class Results extends Component {

  //mpld3.draw_figure


  render() {
    return(
      <div id="Results">
        <Drug drugName = {this.props.drugName}/>
        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
      </div>
    )
  }
}

export default Results;
