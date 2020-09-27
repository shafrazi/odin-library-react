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
      currentBook: {
        title: "",
        author: "",
        isbn: "",
        pages: "",
        isRead: false,
      },
      modalState: {
        display: "none",
      },
      formMode: "",
    };

    this.displayForm = this.displayForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createBook = this.createBook.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.editBook = this.editBook.bind(this);
  }

  displayForm() {
    this.setState({
      currentBook: {
        title: "",
        author: "",
        isbn: "",
        pages: "",
        isRead: false,
      },
      modalState: {
        display: "block",
      },
      formMode: "new",
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
    event.persist();
    if (event.target.type === "checkbox") {
      this.setState((prevState) => {
        return {
          currentBook: {
            ...prevState.currentBook,
            [event.target.name]: event.target.checked,
          },
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          currentBook: {
            ...prevState.currentBook,
            [event.target.name]: event.target.value,
          },
        };
      });
    }
  }

  createBook(event) {
    event.preventDefault();
    const book = new Book(
      this.state.currentBook.title,
      this.state.currentBook.isbn,
      this.state.currentBook.author,
      this.state.currentBook.pages,
      this.state.currentBook.isRead
    );

    this.setState((prevState) => {
      prevState.books.push(book);
      return {
        books: prevState.books,
      };
    });
  }

  editBook(book) {
    this.displayForm();
    this.setState({
      currentBook: book,
      formMode: "edit",
    });
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
            book={this.state.currentBook}
            handleChange={this.handleChange}
            handleClick={this.createBook}
            hideModal={this.hideModal}
            formMode={this.state.formMode}
          />
        </div>
        <div className="books-container">{bookCardComponents}</div>
      </div>
    );
  }
}

export default App;
