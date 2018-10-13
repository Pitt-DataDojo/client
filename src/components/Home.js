import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import '../App.css';

class Home extends Component {
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

export default Home;
