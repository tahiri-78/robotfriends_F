import React from "react";
import Searchbox from "./Searchbox";
import Carteliste from "./Carteliste";
import Scrollbarre from "./Scrollbarre";
import "./App.css";
import tachyons from "tachyons";
const URL_Users = "https://jsonplaceholder.typicode.com/users";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchword: "",
    };
  }

  componentDidMount() {
    fetch(URL_Users)
      .then((response) => response.json())
      .then((ele) => {
        this.setState({ robots: ele });
      });
  }

  searchrobot = (event) => {
    this.setState({ searchword: event.target.value });
    console.log(this.state.searchword);
  };

  render() {
    const robotsort = this.state.robots.filter((ele) => {
      return ele.name
        .toLowerCase()
        .includes(this.state.searchword.toLowerCase());
    });
    return (
      <div className="App">
        <h1>My robots</h1>
        <Searchbox searching={this.searchrobot} />
        <Scrollbarre>
          <Carteliste robots={robotsort} />
        </Scrollbarre>
      </div>
    );
  }
}

export default App;
