import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

let URL = 'http://localhost:6001/poems'

class App extends React.Component {

  // showForm = event => {

  // }

  componentDidMount = () => {
    this.state = {
      show: false
    };
  }

  showTable = () => {
    this.setState({
      show: true
    });
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button oClick={this.showTable} >Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer />
      </div>
    );
  }
}

export default App;


/* Deliverables:
1) √When the app starts, I can see all currently created poems.
2) I can show/hide the form to create new poems.
3) I can create poems and they are still there when I refresh the page -> POST request
4) I can mark poems as read which will change the text of that button to "Mark as unread".
*/