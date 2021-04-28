import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <p>
      {props.phonetics.text}
      <br />
      <a href={props.phonetics.audio} target="_blank">
        Listen
      </a>
    </p>
  );
}
