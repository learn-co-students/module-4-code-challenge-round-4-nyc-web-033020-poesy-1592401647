import React from "react";

class Poem extends React.Component {

  state = {
    read: false
  }

  toggleRead = () => {
    this.setState({ read: !this.state.read })
  }

  render() {

    const { id, title, content, author, deletePoem } = this.props

    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
        </p>
        <button onClick={this.toggleRead}>{this.state.read ? 'Mark as unread' : 'Mark as read'}</button>
        <br></br>
        <br></br>
        <button onClick={() => deletePoem(id)}>Delete</button>  
      </div>
    );
  }
}

export default Poem;

