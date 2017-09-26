import React, { Component } from 'react';
import _ from 'lodash';
import "./../styles/components_styles.css";

class AboutMore extends Component {
  render() {
    return (
      <div className="about-more about-more-out">
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default AboutMore;
