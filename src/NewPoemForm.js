import React from "react";

class NewPoemForm extends React.Component {

  state = {
    hidden: 'true',
    title: '',
    content: '',
    author: ''
  }

  // handleShowForm = (e) => {
  //   if (this.state.hidden === 'false')


  // }

  render() {
    return (
      <form className="new-poem-form">
        <input placeholder="Title" />
        <input placeholder="Author" />
        <textarea placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
