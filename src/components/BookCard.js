import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

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
            checked={this.props.book.isRead}
            onChange={(event) => {
              this.props.changeRead(event, this.props.book);
            }}
          />
        </label>
        <br />

        <FaEdit
          className="icon-btn"
          size="20px"
          color="#31bebe"
          onClick={() => {
            this.props.editBook(this.props.book);
          }}
        />

        <FaTrashAlt
          className="icon-btn"
          size="20px"
          color="#ed487f"
          onClick={() => {
            this.props.deleteBook(this.props.book);
          }}
        />
      </div>
    );
  }
}

export default BookCard;
