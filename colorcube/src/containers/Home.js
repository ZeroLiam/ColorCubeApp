import React, { Component } from 'react';
import _ from 'lodash';
import Header from "./../components/Header";
import Splash from "./../components/Splash";
import AboutMore from './../components/AboutMore';
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
      <div className="component-page">
        <div className="Home">
            <Splash />
            <AboutMore>
            <p className="text-left">This app is inpired in the Color Theory of Johannes Itten described in the book “Elements of Color” Published in Germany in 1969.</p>
            <p className="text-left">Itten describes Color as forces, radiant energies that affect us positively or negatively.</p>
            <p className="text-left">The artist is interested in color effects from their aesthetic aspect that may be studied from 3 approaches:</p>
              <p>- Impressive (visually)<br/>
              - Expressive (emotionally)<br/>
              - Constructive (symbolically)</p>

              <p className="text-right"> &#34;<i>This three aspects are not independent, Symbolism without visual accuracy and without emotional force would be mere anemic formalism: visually impressive effect without symbolic verity and emotional power would be banal imitative naturalism; emotional effect without constructive symbolic content or visual strength would be limited to the plane of sentimental expression. Of course every artist will work according to his temperament. and must emphasize one or another of these aspects</i>&#34;.</p>
              <p className="text-right"><i>Itten</i>, 1969, p.13</p>
            </AboutMore>

            <Header title="Color Cube"/>

            <div className="menu-list">
              {this.getMenu()}
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
