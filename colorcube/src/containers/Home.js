import React, { Component } from 'react';
import _ from 'lodash';
import Header from "./../components/Header";
import Splash from "./../components/Splash";
import MenuChoice from "./../components/MenuChoice";
import custommenu from './../lib/menu.json';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: []
    }
  }

  componentDidMount(){
    this.setState({menuItems: custommenu.items});
  }

  getMenu(){
      return (
        _.map(this.state.menuItems, (value, key)=>{
          return <MenuChoice key={key} val={value.title} url={value.link} />;
        })
    );
  }

  render() {
    return (
      <div className="Home">
        <Splash />
        <Header title="Color Cube"/>

        <div className="menu-list">
          {this.getMenu()}
        </div>
      </div>
    );
  }
}

export default Home;
