import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const API_ENDPOINT = `http://localhost:6001/poems`

class App extends React.Component {

  state = {
    poems: []
  }

  componentDidMount() {
    fetch(API_ENDPOINT)
    .then(res => res.json())
    .then(poemData => {
      this.setState({ poems: poemData })
    }) 
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
