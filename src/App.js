import React from "react";
import Header from "./components/Header";
import BookCard from "./components/BookCard";
import Form from "./components/Form";
import Book from "./Book";

const book1 = new Book(
  "Man's search for meaning",
  "080701429X",
  "Viktor E Frankl",
  246,
  true
);

const book2 = new Book(
  "The Waste Lands",
  "0451210867",
  "Stephen King",
  608,
  false
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [book1, book2],
      bookTitle: "",
      author: "",
      isbn: "",
      pages: 0,
      isRead: false,
      modalState: {
        display: "none",
      },
    };

    this.displayForm = this.displayForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createBook = this.createBook.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.editBook = this.editBook.bind(this);
  }

  displayForm() {
    this.setState({
      modalState: {
        display: "block",
      },
    });
  }

  hideModal(event) {
    event.preventDefault();
    this.setState({
      modalState: {
        display: "none",
      },
    });
  }

  handleChange(event) {
    if (event.target.type === "checkbox") {
      this.setState({
        [event.target.name]: event.target.checked,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  }

  createBook(event) {
    event.preventDefault();
    const book = new Book(
      this.state.bookTitle,
      this.state.isbn,
      this.state.author,
      this.state.pages,
      this.state.isRead
    );

    this.setState((prevState) => {
      prevState.books.push(book);
      return {
        books: prevState.books,
      };
    });
  }

  editBook(book) {
    console.log(book);
    this.displayForm();
  }

  render() {
    const bookCardComponents = this.state.books.map((book) => {
      return <BookCard key={book.isbn} book={book} editBook={this.editBook} />;
    });

    return (
      <div className="container">
        <Header onClick={this.displayForm} />
        <div className="modal" style={this.state.modalState}>
          <Form
            handleChange={this.handleChange}
            handleClick={this.createBook}
            hideModal={this.hideModal}
          />
        </div>
        <div className="books-container">{bookCardComponents}</div>
      </div>
    );
  }
}

export default App;
