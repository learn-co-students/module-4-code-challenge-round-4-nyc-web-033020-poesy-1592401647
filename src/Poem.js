import React from "react";

class Poem extends React.Component {
  render() {

    const { title, content, author } = this.props

    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
        </p>
        <button>Mark as read</button>
      </div>
    );
  }
}

export default Poem;

// "title": "The Song About the Song",
// "content": "This is the song about the show! And it's a show with a song about The Songs we're gonna sing We'll sing you the songs about The song about the show! Songs about the singing we'll do! Songs about the songs about The song about the show! Songs that we'll be singing to you! You'll hear us singing songs about The songs about the songs, The songs about the songs about the songs-- Songs about the songs about The songs about the songs, The songs about the songs about the show!",
// "author": "Bryan Higgins"