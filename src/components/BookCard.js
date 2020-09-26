import React from "react";

class BookCard extends React.Component {
  render() {
    return (
      <div className="book-card">
        <h3>Man's search for meaning</h3>
        <p>Victor E Frankl</p>
        <p>246 pages</p>
        <img
          src="http://covers.openlibrary.org/b/isbn/080701429X-M.jpg"
          alt="book"
        />
        <br></br>
        <label>
          Mark as read :
          <input type="checkbox" className="read-check" name="isRead" />
        </label>
      </div>
    );
  }
}

export default BookCard;
