import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

// const API_ENDPOINT = `http://localhost:6001/poems`

class App extends React.Component {

  state = {
    poems: [],
    displayForm: false,
    title: '',
    content: '',
    author: ''
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
    .then(res => res.json())
    .then(poemData => {
      this.setState({ poems: poemData })
    }) 
  }

  toggleFormDisplay = () => {
    this.setState({ displayForm: !this.state.displayForm})
  }

  addNewPoem = newPoem => { 
    this.setState({
      poems: [...this.state.poems, newPoem]
    })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const newPoem = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author
    }

    fetch('http://localhost:6001/poems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newPoem)
    })
      .then(res => res.json())
      .then(newPoem => {
        this.addNewPoem(newPoem)
      })
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
          onChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          addNewPoem={this.addNewPoem} 
          /> : null}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
