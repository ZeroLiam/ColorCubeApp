import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuChoice extends Component {
  render() {
    return (
      <div className="menuchoice">
        <Link to={this.props.url}>{this.props.val}</Link>
      </div>
    );
  }
}

export default MenuChoice;
