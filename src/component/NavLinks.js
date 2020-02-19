import React from "react";
import "../scss/NavLinks.scss";

export default function NavLinks(props) {
  return (
    <div className="container">
      <li className="link">{props.text}</li>
    </div>
  );
}
