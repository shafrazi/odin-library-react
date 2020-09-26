import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="form-div">
        <form>
          <input
            type="text"
            placeholder="Book Title"
            name="bookTitle"
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            placeholder="Author"
            name="author"
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            placeholder="ISBN"
            name="isbn"
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            placeholder="No. of pages"
            name="pages"
            onChange={this.props.handleChange}
          />
          <label>
            Mark as read :
            <input
              type="checkbox"
              name="isRead"
              onChange={this.props.handleChange}
              checked={this.props.isRead}
              className="form-check"
            />
          </label>
          <button className="btn" onClick={this.props.handleClick}>
            Add book
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
