import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="rmdb-header">
        <div className="rmdb-header-content">
          <img
            className="rmdb-logo"
            src="./images/reactMovie_logo.png"
            alt="rmdb_logo"
          />
          <img
            className="rmdb-tmdb-logo"
            src="./images/tmdb_logo.png"
            alt="tmdb_logo"
          />
        </div>
      </div>
    );
  }
}
