class Book {
  constructor(title, isbn, author, pages, isRead) {
    this.title = title;
    this.isbn = isbn;
    this.author = author;
    this.isRead = isRead;
    this.coverImage = `http://covers.openlibrary.org/b/isbn/${this.isbn}-M.jpg`;
  }
}

export default Book;
