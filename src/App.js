import React, { Component } from 'react';
import Drug from './components/Drug.js';
import Comments from './components/Comments.js';
import Ratings from './components/Ratings.js';
import logo from './images/SVG/design-2-01.svg';
import Menu from './components/Menu.js';
import WordCloud from './components/WordCloud.js';
import Dosages from './components/Dosages.js';
import Adverse from './components/Adverse.js';
import Search from './components/Search.js';
import axios from 'axios';
import { Route } from 'react-router-dom';
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
      comments: null,
      drugName: null,
      dataVis: null,
      labelInfo: null
    }
  }

  setDrugName(drugName){
    this.setState({ drugName: drugName });
    if(drugName){
      this.getAdverse(drugName);
      this.getComments(drugName);
      this.getLabel(drugName);
      this.getRatings(drugName);
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

  getComments(drugName){
    const refThis = this;
    axios.get(`http://datadojobluehack-boring-chimpanzee.us-east.mybluemix.net/api/comments?medicine=${drugName}`)
    .then(function (res) {
      if(res.data){
        refThis.setState({comments: res.data});
      }
    });
  }

  getLabel(drugName){
    const refThis = this;
    axios.get(`https://api.fda.gov/drug/label.json?search=brand_name=${drugName}&limit=1`)
    .then(function (res) {
      //        rxcui: res.data.results[0].openfda.rxcui[0]
      if(res.data.results[0]){
        refThis.setState({
          labelInfo: res.data.results
        });
        refThis.props.history.push('/info');
      }
    });
  }

  getRatings(drugName){
    const refThis = this;
    axios.get(`http://datadojobluehack-boring-chimpanzee.us-east.mybluemix.net/api/dataviz?medicine=${drugName}`)
    .then(function (res) {
      refThis.setState({ratings: res.data});
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
    return (
      <div className="App">
      <div id="logo"><img id="logo-image" src={logo}></img></div>
      <Search setDrugName = {this.setDrugName.bind(this)} />
      <Menu data={this.state} />
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
          path='/comments'
          render={(props) => <Comments {...props} data={this.state} />}
        />
        <Route
          path='/dosages'
          render={(props) => <Dosages {...props} data={this.state} />}
        />
        <Route
          path='/ratings'
          render={(props) => <Ratings {...props} data={this.state} />}
        />
        <Route
          path='/word-cloud'
          render={(props) => <WordCloud {...props} data={this.state} />}
        />
      </div>
      </div>
    )
  }
}

export default App;
