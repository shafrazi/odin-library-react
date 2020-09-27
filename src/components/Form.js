import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="form-div">
        <form>
          <input
            type="text"
            placeholder="Book Title"
            name="title"
            value={this.props.book.title}
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            placeholder="Author"
            name="author"
            value={this.props.book.author}
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            placeholder="ISBN"
            name="isbn"
            value={this.props.book.isbn}
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            placeholder="No. of pages"
            name="pages"
            value={this.props.book.pages}
            onChange={this.props.handleChange}
          />
          <label>
            Mark as read :
            <input
              type="checkbox"
              name="isRead"
              onChange={this.props.handleChange}
              checked={this.props.book.isRead}
              className="form-check"
            />
          </label>
          <button className="btn btn-primary" onClick={this.props.handleClick}>
            {this.props.formMode === "edit" ? "Save" : "Add Book"}
          </button>
          <button className="btn btn-danger" onClick={this.props.hideModal}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
