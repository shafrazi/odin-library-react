import React from "react";
import Header from "./components/Header";
import BookCard from "./components/BookCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div className="books-container">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    );
  }
}

export default App;
