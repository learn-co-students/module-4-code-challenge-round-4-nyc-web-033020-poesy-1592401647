import React from "react";

class Poem extends React.Component {
  state = {
    isRead: 'false'
  }
  //need to fix 
  handleClick = (e) => {
    if (this.state.isRead === 'false')
    this.setState({
      isRead: 'true'
    })
  }







  render() {

    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <p>
          <strong>- {this.props.author}</strong>
        </p>
        <button onClick={this.handleClick}>Mark as read</button>
      </div>
    );
  }
}

export default Poem;
