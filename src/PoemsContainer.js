import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {

    const { poems, deletePoem } = this.props

    return (
      <div className="poems-container">
        {
          // render poems here
          poems.map(poem => <Poem key={poem.id} {...poem} deletePoem={deletePoem}/>)
        }
      </div>
    );
  }
}

export default PoemsContainer;
