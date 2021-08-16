import React from "react";
import "./Nat.css";
import { Link } from "react-router-dom";

const Nat = ({ author, text, handleUserClick }) => {
  return (
    <div className="nat">
      <p className="author" onClick={() => handleUserClick(author)}>
        <Link to={`/Profile/${author}`}>@{author}</Link>
      </p>
      <p className="text">{text}</p>
    </div>
  );
};

export default Nat;
