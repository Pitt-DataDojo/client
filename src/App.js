import React, { Component } from 'react';
import Drug from './components/Drug.js';
import Menu from './components/Menu.js';
import WordCloud from './components/WordCloud.js';
import Dosages from './components/Dosages.js';
import Adverse from './components/Adverse.js';
import Search from './components/Search.js';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.routes = [
      {
        path: '/',
        component: Drug
      }
    ];

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
      this.getWordCloud(drugName);
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
      //        rxcui: res.data.results[0].openfda.rxcui[0]
      refThis.setState({
        labelInfo: res.data.results,
      });
    });
  }

  getWordCloud(drugName){
    const refThis = this;
    axios.get(`http://datadojobluehack-boring-chimpanzee.us-east.mybluemix.net/api/wordcloud?medicine=${drugName}`)
    .then(function (res) {
      refThis.setState({wordCloud: res.data});
    });
  }

  render() {
    return <Router>
      <div className="App">
      <Search setDrugName = {this.setDrugName.bind(this)} />
      <Menu />
      <div id="results">
        <Route
          path='/info'
          render={(props) => <Drug {...props} data={this.state} />}
        />
        <Route
          path='/adverse'
          render={(props) => <Adverse {...props} data={this.state} />}
        />
        <Route
          path='/dosages'
          render={(props) => <Dosages {...props} data={this.state} />}
        />
        <Route
          path='/word-cloud'
          render={(props) => <WordCloud {...props} data={this.state} />}
        />
      </div>
      </div>
    </Router>
  }
}

export default App;
