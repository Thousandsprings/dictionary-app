import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResult(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault(); //👈important!!
    // alert(`Searching for "${keyword}"`);

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResult);
  }

  function handleKeywordChange(event) {
    // console.log(event.target.value);
    setKeyword(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="shadow"
          type="search"
          autoFocus={true}
          onChange={handleKeywordChange}
        ></input>
        <button className="shadow" type="submit">
          Search
        </button>
      </form>
      <Results results={results} keyword={keyword}/>
    </div>
  );
}
