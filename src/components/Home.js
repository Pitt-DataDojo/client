import React, { Component } from 'react';
import Search from './Search.js';
import Results from './Results';
import axios from 'axios';
import '../styles/Home.css';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      drugName: null,
      dataVis: null
    }
  }

  componentWillMount(){
    this.getAdverse();
  }

  setDrugName(drugName){
    this.setState({ drugName: drugName });
  }

  getAdverse(drugName){
    axios.get(`https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:${drugName}&count=patient.reaction.reactionmeddrapt.exact`)
    .then(function (res) {
      console.log(res);
    });
  }


  render() {
    console.log(this.state.drugName);
    return <React.Fragment>
      <Search setDrugName = {this.setDrugName.bind(this)} />
      <Results dataVis = {this.state.dataVis} drugName = {this.state.drugName} />

    </React.Fragment>
  }
}

export default Home;
