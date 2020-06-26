import React, { Component } from "react";

class Searchbox extends Component {
  render() {
    const { searching } = this.props;
    return (
      <div>
        <input
          onChange={searching}
          type="search"
          placeholder="type your robot's name"
        />
      </div>
    );
  }
}
export default Searchbox;
