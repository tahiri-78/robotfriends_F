import React, { Component } from "react";

const Scrollbarre = ({ children }) => {
  return (
    <div style={{ overflow: "scroll", border: "1px solid green" }}>
      {children};
    </div>
  );
};
export default Scrollbarre;
