import React from "react";
import "./Phonetics.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  // console.log(props.phonetics);
  return (
    <p className="Phonetics">
      <span>{props.phonetics.text}</span>
      <div className="autdio-player">
        <ReactAudioPlayer src={props.phonetics.audio} controls />
      </div>
    </p>
  );
}
