import React from "react";

function Header(props) {
  return (
    <header>
      <h1 className="logo">My Library</h1>
      <button onClick={props.onClick} className="btn  btn-primary">
        Add New Book
      </button>
    </header>
  );
}

export default Header;
