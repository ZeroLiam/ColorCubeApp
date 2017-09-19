import React, { Component } from 'react';
import menulogo from './../assets/colorcubelogoH.png';
import "./../styles/components_styles.css";

class MainMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: [
        {
          title: "Constructive",
          link:"/constructive"
        },
        {
          title: "Impressive",
          link:"/impressive"
        },
        {
          title: "Expressive",
          link:"/expressive"
        },
        {
          title: "Gallery",
          link:"/gallery"
        },
        {
          title: "Connect Color Cube",
          link:"/connectcube"
        }
      ]
    }
  }

  render() {
    const listMenu = this.state.menuItems.map((item, key) =>{
      return(
        <a key={key} href={item.link}>
          <li  className={window.location.pathname == item.link ? 'active' : 'deactive'}> {item.title} </li>
        </a>
      )
    });

    return (
      <div className="main-menu main-menu-out">
        <div className="main-menu-logo">
            <a href="/"><img src={menulogo} /></a>
        </div>
        <ul className="menu-link-list">{listMenu}</ul>
      </div>
    );
  }
}

export default MainMenu;
