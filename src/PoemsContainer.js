import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="poems-container">
        {this.props.poems.map(poem =>(
          <Poem key={poem.id} {...poem}/>
        ))
          // render poems here
        }
        <Poem />
      </div>
    );
  }
}

export default PoemsContainer;
