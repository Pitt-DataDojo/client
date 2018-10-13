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
      dataVis: null
    }
  }

  setDrugName(drugName){
    this.setState({ drugName: drugName });
    if(drugName){
      console.log(drugName);
      this.getAdverse(drugName);
    }
  }

  getAdverse(drugName){
    const refThis = this;
    axios.get(`https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:${drugName}&count=patient.reaction.reactionmeddrapt.exact`)
    .then(function (res) {
      refThis.setState({adverseEffects: res.data.results});
    });
  }


  render() {
    return <React.Fragment>
      <Search setDrugName = {this.setDrugName.bind(this)} />
      <Results adverseEffects={this.state.adverseEffects} drugName = {this.state.drugName} />

    </React.Fragment>
  }
}

export default Home;
