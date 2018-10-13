import React, { Component } from 'react';
import Search from './Search.js';
import Results from './Results';
import axios from 'axios';
import '../styles/Home.css';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      adverseEffects: null,
      drugName: null,
      dataVis: null,
      labelInfo: null
    }
  }

  setDrugName(drugName){
    this.setState({ drugName: drugName });
    if(drugName){
      this.getAdverse(drugName);
      this.getLabel(drugName);
    }
  }

  getAdverse(drugName){
    const refThis = this;
    axios.get(`https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:${drugName}&count=patient.reaction.reactionmeddrapt.exact`)
    .then(function (res) {
      refThis.setState({adverseEffects: res.data.results});
    });
  }

  getLabel(drugName){
    const refThis = this;
    axios.get(`https://api.fda.gov/drug/label.json?search=brand_name=${drugName}&limit=1`)
    .then(function (res) {
      refThis.setState({labelInfo: res.data.results});
    });
  }


  render() {
    return <React.Fragment>
      <Search setDrugName = {this.setDrugName.bind(this)} />
      <Results 
        adverseEffects={this.state.adverseEffects} 
        drugName = {this.state.drugName} 
        labelInfo = {this.state.labelInfo}
      />

    </React.Fragment>
  }
}

export default Home;
