import React, { Component } from 'react';
import axios from 'axios';
import { AutoComplete } from 'antd';
import '../styles/Home.css';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      dataSource: []
    }
  }

  componentWillMount(){
    axios.get('')
    .then(function (response) {
      
    });
  }

  onChange(e){
    const search = this;
    const query = `https://rxnav.nlm.nih.gov/REST/spellingsuggestions.json?name=${e}`;
    axios.get(query)
    .then(function (res) {
      console.log(res);
      if(res.data.suggestionGroup.suggestionList){
        search.setState({dataSource: res.data.suggestionGroup.suggestionList.suggestion});
      }
    });
  }


  render() {
    const dataSource = ['12345', '23456', '34567'];
    console.log(this.state.dataSource);
    return (
      <div className="App">
        <header className="App-header">
          <AutoComplete 
            dataSource = {this.state.dataSource}
            onChange = {(e) => this.onChange(e)}
          />
        </header>
      </div>
    );
  }
}

export default Search;
