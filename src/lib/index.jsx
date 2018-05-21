import React, { Component } from "react";
import _ from "lodash";

import './style.css';

import SecondLib from "./secondlib";

class MySuperCoolComponent extends Component {
  handleClick = () => {
    console.log("Click!");
  };

  render() {
    const { color, children } = this.props;
    return (
      <div>
        {SecondLib} 
        <button onClick={this.handleClick} style={{ color }}>
          {children}
        </button>
      </div>
    );
  }
}

export default MySuperCoolComponent;
