import React, { Component } from 'react';
import _ from 'lodash';
import Header from "./../components/Header";
import CubeContainer from "./../components/CubeContainer";
import AboutMore from './../components/AboutMore';
import MenuChoice from "./../components/MenuChoice";
import "./../styles/components_styles.css";
import img3 from './../assets/ex/003.jpg';
import custommenu from './../lib/menu.json';

class Impressive extends Component {constructor(props) {
  super(props);

  this.state = {
    menuItems: []
  }
}

componentDidMount(){
  this.setState({menuItems: custommenu.items[1].submenu});
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
        <Header title="Impressive" />

        <AboutMore>
            <p className="text-left">
            &#34;<i>The theory of color impression properly begins with the coor effects in nature. That is, that we investigate the impressions made by colored objects on our sense of vision.</i>&#34; Itten 1969 p.79.
            </p>

            <p className="text-left">
            As Itten said that Color and its effects are in the eye of the beholder he explains that contrast appears when distinct differences can be perceived between two compared effects. When such differences approach to their maximal degree they can be defined as diametrical or polar contrasts.
            </p>

            <p className="text-left">
            He defined seven kinds of color contrasts:
            </p>

            <p className="text-left">
            1- Contrast of hue<br/>
            2- Light dark contrast<br/>
            3- Cold-warm contrast<br/>
            3- Complementary contrast<br/>
            4- Simultaneous contrast<br/>
            6- Contrast of saturation<br/>
            7- Contrast of extension<br/>
            </p>

            <p className="text-center">
                <img src={img3} alt="003.jpg" />
            </p>

            <p className="text-left">
            It is important to say that Itten suggested this color contrast based on his color circle. Nevertheless in this case order of the colors in the circle used for the interactions is one based in the theory Harold Küpers, who made some critics on Itten’s theory. He considers as primary colors Red, Green and Blue for the additive mix and Cyan, Yellow and Magenta for the subtractive mix. Furthermore the order of the colors in the circle suggested coincide with the order of the colors in the RGB model, and are useful to prove Itten&#8217;s Impression Theory.
            </p>
        </AboutMore>

        <div className="menu-list">
          {this.getMenu()}
        </div>
      </div>
    );
  }
}

export default Impressive;
