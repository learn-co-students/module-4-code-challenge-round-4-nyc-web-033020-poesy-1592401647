import React from "react";

class NewPoemForm extends React.Component {
  
    // state = {
    //   title: '',
    //   content: '',
    //   author: ''
    // }

    // handleChange = event => {
    //   this.setState({ [event.target.name]: event.target.value })
    // }
  
    // handleSubmit = event => {
    //   event.preventDefault()
  
    //   const newPoem = {
    //     title: this.state.title,
    //     content: this.state.content,
    //     author: this.state.author
    //   }
  
    //   fetch('http://localhost:6001/poems', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     },
    //     body: JSON.stringify(newPoem)
    //   })
    //     .then(res => res.json())
    //     .then(newPoem => {
    //       this.props.addNewPoem(newPoem)
    //     })
    // }
  
    render() {

      const { title, content, author, onChange, handleSubmit } = this.props

    return (
      <form className="new-poem-form" onSubmit={handleSubmit}>
        <input name='title' value={title} placeholder="Title" onChange={onChange} />
        <input name='author' value={author} placeholder="Author" onChange={onChange} />
        <textarea name='content' value={content} placeholder="Write your masterpiece here..." rows={10} onChange={onChange} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

// render() {
//   return (
//     <form className="new-poem-form" onSubmit={this.handleSubmit}>
//       <input name='title' value={this.title} placeholder="Title" onChange={this.onChange} />
//       <input name='author' value={this.author} placeholder="Author" onChange={this.onChange} />
//       <textarea name='content' value={this.content} placeholder="Write your masterpiece here..." rows={10} onChange={this.onChange} />
//       <input type="submit" value="Share your masterpiece" />
//     </form>
//   );
// }
// }

// export default NewPoemForm;