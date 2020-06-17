import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const API_ENDPOINT = `http://localhost:6001/poems`

class App extends React.Component {

  state = {
    poems: [],
    displayForm: false,
    title: '',
    content: '',
    author: ''
  }

  componentDidMount() {
    fetch(API_ENDPOINT)
    .then(res => res.json())
    .then(poemData => {
      this.setState({ poems: poemData })
    }) 
  }

  toggleFormDisplay = () => {
    this.setState({ displayForm: !this.state.displayForm})
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    // console.log(this.state)

    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleFormDisplay}>Show/hide new poem form</button>
          {/* {false && <NewPoemForm />} */}
          {this.state.displayForm ? 
          <NewPoemForm 
          title={this.state.title} 
          content={this.state.content} 
          author={this.state.author}
          onChange={this.handleChange} /> : null}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
