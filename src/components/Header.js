import React from "react";

function Header(props) {
  return (
    <header>
      <h1 className="logo">My Library</h1>
      <button onClick={props.onClick} className="btn">
        Add Book
      </button>
    </header>
  );
}

export default Header;
