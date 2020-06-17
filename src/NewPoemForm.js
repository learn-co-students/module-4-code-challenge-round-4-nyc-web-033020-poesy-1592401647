import React from "react";

class NewPoemForm extends React.Component {
  render() {
    console.log(this.props)

    return (
      <form className="new-poem-form">
        <input placeholder="Title" />
        <input placeholder="Author" />
        <textarea placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece"  onSubmit={this.props.handleSubmit}/>
      </form>
    );
  }
}

export default NewPoemForm;
