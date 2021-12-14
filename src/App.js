import React, { Component } from "react";
import CardList from "./components/card_list/card_list_component";
import  Search  from "./components/search/search";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }));
  }

  render() {
    const { monster, searchfield } = this.state;
    const filtered = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    
    

    return (
      <div className="App">
        <h1>{"MONSTER ROLEX"}</h1>
       <Search handleChange={ e => this.setState({searchfield:e.target.value})}></Search>
        <CardList monster={filtered}></CardList>
      </div>
    );
  }
}
export default App;
