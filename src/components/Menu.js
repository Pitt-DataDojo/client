import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

class AppMenu extends Component {
  state = {
    current: 'info',
  }
  
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="info">
          <Link to="/info"><Icon type="book" theme="outlined" />Info</Link>
        </Menu.Item>
        <Menu.Item key="adverse">
          <Link to="/adverse"><Icon type="pie-chart" theme="outlined" />Adverse Effects</Link>
        </Menu.Item>
        <Menu.Item key="dosages">
          <Link to="/dosages"><Icon type="table" theme="outlined" />Dosages</Link>
        </Menu.Item>
        <Menu.Item key="ratings">
          <Link to="/ratings"><Icon type="table" theme="outlined" />Ratings</Link>
        </Menu.Item>
        <Menu.Item key="word-cloud">
          <Link to="/word-cloud"><Icon type="table" theme="outlined" />WordCloud</Link>
        </Menu.Item>
      </Menu>
    );
  }

}

export default AppMenu;
