import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: [],
    display: true,
    id: null,
    title: '',
    content: '',
    author: ''
  }

  componentDidMount() {
    fetch(`http://localhost:6001/poems`)
    .then(res => res.json())
    .then(poems => this.setState({poems: poems}))
  }

  displayForm = () => {
    this.setState({
      display: !this.state.display
    })
  }


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.displayForm}>Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
