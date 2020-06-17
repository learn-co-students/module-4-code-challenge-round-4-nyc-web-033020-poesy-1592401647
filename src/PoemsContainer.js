import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {

    const { poems } = this.props

    return (
      <div className="poems-container">
        {
          // render poems here
          poems.map(poem => <Poem key={poem.id} {...poem} />)
        }
      </div>
    );
  }
}

export default PoemsContainer;
