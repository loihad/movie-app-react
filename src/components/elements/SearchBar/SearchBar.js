import React, { Component } from "react";
import FonAwesome from "react-fontawesome";
import "./SearchBar.css";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  state = { value: "" };

  timeout = null;

  doSearch = (event) => {
    console.log(this.state);
    this.setState({
      value: event.target.value,
    });
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.callback(this.state.value);
    }, 500);
  };

  render() {
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <FonAwesome className="rmdb-fa-search" name="search" size="2x" />
        </div>
        <input
          type="text"
          className="rmdb-searchbar-input"
          placeholder="search"
          onChange={this.doSearch}
          value={this.state.value}
        />
      </div>
    );
  }
}
