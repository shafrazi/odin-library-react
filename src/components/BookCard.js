import React from "react";

class BookCard extends React.Component {
  render() {
    return (
      <div className="book-card">
        <h3>{this.props.book.title}</h3>
        <p>{this.props.book.author}</p>
        <p>{this.props.book.pages} pages</p>
        <img src={this.props.book.coverImage} alt="book" />
        <br></br>
        <label>
          Mark as read :
          <input
            type="checkbox"
            className="read-check"
            name="isRead"
            defaultChecked={this.props.book.isRead}
          />
        </label>
      </div>
    );
  }
}

export default BookCard;
