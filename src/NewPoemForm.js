import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: '',
    author: '',
    content: ''
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  // handleSubmit = event => {
  //   event.preventDefault()

  //   fetch
  // }

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit} >
        <input name="title" value={this.state.title} onChange={this.handleChange} placeholder="Title" />
        <input name="author" value={this.state.author} onChange={this.handleChange} placeholder="Author" />
        <textarea name="content" value={this.state.content} onChange={this.handleChange} placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
