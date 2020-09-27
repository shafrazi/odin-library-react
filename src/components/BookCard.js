import React from "react";

class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.book,
    };
  }

  render() {
    return (
      <div className="book-card">
        <h3>{this.state.book.title}</h3>
        <p>{this.state.book.author}</p>
        <p>{this.state.book.pages} pages</p>
        <img src={this.state.book.coverImage} alt="book" />
        <br></br>
        <label>
          Mark as read :
          <input
            type="checkbox"
            className="read-check"
            name="isRead"
            defaultChecked={this.state.book.isRead}
          />
        </label>
        <br />
        <button
          className="btn btn-primary"
          onClick={() => {
            this.props.editBook(this.state.book);
          }}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default BookCard;
