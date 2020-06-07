import React from "react";
import "./LoadMoreBtn.css";

export const LoadMoreBtn = (props) => {
  return (
    <div className="rmdb-loadmorebtn" onClick={props.onClick}>
      <p>{props.text}</p>
    </div>
  );
};
