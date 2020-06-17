import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: [],
    display: true,
    // newPoem: {
    //   id: null,
    //   title: '',
    //   content: '',
    //   author: ''
    // }
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

  handleSubmit = (e) => {
    const data = {
      'title': e.target.title.value,
      'content': e.target.content.value,
      'author': e.target.author.value
    }
     
    fetch(`http://localhost:6001/poems`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(newPoem => {
      this.setState({
        poems: [...this.state.poems, newPoem]
      })
    })

    e.target.title.value = '',
    e.target.content.value = '',
    e.target.author.value = ''
  }


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.displayForm}>Show/hide new poem form</button>
          {this.state.display ? <NewPoemForm handleSubmit={this.handleSubmit}/> : this.state.displayForm}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
