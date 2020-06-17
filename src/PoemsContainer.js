import React from "react";
import Poem from "./Poem";

let URL = 'http://localhost:6001/poems'

class PoemsContainer extends React.Component {
  state = {
    poems: []
  }

  getPoemsData = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(poems => {
      this.setState({
        poems: poems
      })
    })
  }

  componentWillMount() {
    this.getPoemsData("reactjs");
  }    

  render() {
    return (
      <div className="poems-container" onClick={this.getPoemsData}>
        {
          this.state.poems.map(poem => <Poem key={poem.id} {...poem}/>) // render poems here
        }
      </div>
    );
  }
}

export default PoemsContainer;
