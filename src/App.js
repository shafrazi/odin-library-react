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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [book1],
      bookTitle: "",
      author: "",
      isbn: "",
      pages: 0,
      isRead: false,
    };

    this.displayForm = this.displayForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createBook = this.createBook.bind(this);
  }

  displayForm() {
    console.log("hello");
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

  render() {
    const bookCardComponents = this.state.books.map((book) => {
      return <BookCard key={book.isbn} book={book} />;
    });

    return (
      <div>
        <Header onClick={this.displayForm} />
        <Form handleChange={this.handleChange} handleClick={this.createBook} />
        <div className="books-container">{bookCardComponents}</div>
      </div>
    );
  }
}

export default App;
