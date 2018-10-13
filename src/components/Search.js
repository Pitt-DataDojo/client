import React, { Component } from 'react';
import axios from 'axios';
import { AutoComplete } from 'antd';
import '../styles/Search.css';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      dataSource: []
    }
  }

  componentWillMount(){
  }

  onChange(e){
    const search = this;
    const query = `https://rxnav.nlm.nih.gov/REST/spellingsuggestions.json?name=${e}`;
    axios.get(query)
    .then(function (res) {
      if(res.data.suggestionGroup.suggestionList){
        search.setState({dataSource: res.data.suggestionGroup.suggestionList.suggestion});
      }
    });
  }

  onSelect(e){
    this.props.setDrugName(e);
  }


  render() {
    const dataSource = ['12345', '23456', '34567'];
    return (
      <div className="App">
        <header className="App-header">
          <AutoComplete
            id="Search"
            dataSource = {this.state.dataSource}
            onChange = {(e) => this.onChange(e)}
            onSelect = {(e) => this.onSelect(e)}
          />
        </header>
      </div>
    );
  }
}

export default Search;
