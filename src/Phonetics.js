import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  // console.log(props.phonetics);
  return (
    <p className="Phonetics">
      <span>{props.phonetics.text}</span>
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
    </p>
  );
}
