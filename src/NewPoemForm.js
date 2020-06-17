import React from "react";

class NewPoemForm extends React.Component {

  state = {
    hidden: 'true',
    title: '',
    content: '',
    author: ''
  }


    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    addPoem = (e) => {
    e.preventDefault()
      fetch('http://localhost:6001/poems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          title: this.state.title,
          content: this.state.content,
          author: this.state.author
        })
      })
    }


  render() {
    return (
      <form onSubmit={this.addPoem} className="new-poem-form">
        <input onChange={this.handleChange} name='title' placeholder="Title" value={this.state.title} />
        <input onChange={this.handleChange} name='author' placeholder="Author" value={this.state.author}/>
        <textarea onChange={this.handleChange} name='content' placeholder="Write your masterpiece here..." value={this.state.content} rows={10} />
        <input onSubmit={this.addPoem} type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
