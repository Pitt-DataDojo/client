import React, { Component } from 'react';
import axios from 'axios';
import { AutoComplete } from 'antd';
import '../styles/Home.css';

class Search extends Component {
  constructor(props){
    super(props);

    this.dataSource = null;
  }

  componentWillMount(){
    axios.get('')
    .then(function (response) {
      
    });
  }


  render() {
    const dataSource = ['12345', '23456', '34567'];
    return (
      <div className="App">
        <header className="App-header">
          <AutoComplete dataSource = {dataSource}/>
        </header>
      </div>
    );
  }
}

export default Search;
