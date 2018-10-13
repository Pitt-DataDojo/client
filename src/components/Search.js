import React, { Component } from 'react';
import { Icon, Input, AutoComplete } from 'antd';
import '../styles/Search.css';
import drugNames from '../data/ZAKjson.json'

class Search extends Component {
  constructor(props){
    super(props);
    const dataSet = new Set();

    for(var name in drugNames){
      dataSet.add(drugNames[name].urlDrugName);
    }
    this.dataSource = Array.from(dataSet).sort();
  }

  // onChange(e){
  //   const search = this;
  //   const query = `https://rxnav.nlm.nih.gov/REST/spellingsuggestions.json?name=${e}`;
  //   axios.get(query)
  //   .then(function (res) {
  //     if(res.data.suggestionGroup.suggestionList){
  //       search.setState({dataSource: res.data.suggestionGroup.suggestionList.suggestion});
  //     }
  //   });
  // }

  onSelect(e){
    this.props.setDrugName(e);
  }


  render() {
    return (
      <header className="App-header">
        <AutoComplete
          id="Search"
          dataSource={this.dataSource}
          placeholder="Select a drug"
          onSelect = {(e) => this.onSelect(e)}
        >
          <Input suffix={<Icon type="search" className="certain-category-icon" />} />
        </AutoComplete>
      </header>
    );
  }
}

export default Search;
