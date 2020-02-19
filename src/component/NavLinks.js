import React from "react";
import "../scss/NavLinks.scss";

export default function NavLinks(props) {
  return (
    <li className="container">
      <div className="link">{props.text}</div>
    </li>
  );
}
