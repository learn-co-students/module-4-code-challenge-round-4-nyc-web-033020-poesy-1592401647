import React from "react";

class NewPoemForm extends React.Component {


  render() {
    console.log(this.props)

    return (
      <form className="new-poem-form"  onSubmit={this.props.handleSubmit}>
        <input  placeholder="Title" name='title'/>
        <input  placeholder="Author" name='author'/>
        <textarea placeholder="Write your masterpiece here..." rows={10} name='poem' />
        <input type="submit" value="Share your masterpiece"/>
      </form>
    );
  }
}

export default NewPoemForm;
