import React from "react";
import "./Phonetics.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  // console.log(props.phonetics);
  return (
    <p className="Phonetics">
      <span>{props.phonetics.text}</span>
      <ReactAudioPlayer src={props.phonetics.audio} controls />
    </p>
  );
}
