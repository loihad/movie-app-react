import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
  console.log(props);
  return (
    <div className="rmdb-navigation">
      <div className="rmdb-navigation-content">
        <Link to="/">Home</Link>
        <div>/</div>
        <p>{props.movie}</p>
      </div>
    </div>
  );
};

export default Navigation;
