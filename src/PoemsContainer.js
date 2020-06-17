import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  state = {
    poems: [],
  }

  setPoems = (data) => {
    this.setState({
      poems: data
    })
  }
    componentDidMount(){
      this.fetchPoems()
    }

    fetchPoems = () => {
      fetch('http://localhost:6001/poems')
      .then(resp => resp.json())
      .then(data => this.setPoems(data))
    }

  render() {
    return (
      <div className="poems-container">
         {this.state.poems.map(poem => <Poem key={poem.id} {...poem}/>)}
         <Poem /> 
        </div>
    );
  }
}

export default PoemsContainer;
