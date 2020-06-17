import React from "react";

class NewPoemForm extends React.Component {
  render() {

    const { title, content, author, onChange, handleSubmit, addNewPoem } = this.props

    return (
      <form className="new-poem-form">
        <input name='title' value={title} placeholder="Title" onChange={onChange} />
        <input name='author' value={author} placeholder="Author" onChange={onChange} />
        <textarea name='content' value={content} placeholder="Write your masterpiece here..." rows={10} onChange={onChange} />
        <input type="submit" value="Share your masterpiece" onSubmit={handleSubmit}/>
      </form>
    );
  }
}

export default NewPoemForm;
