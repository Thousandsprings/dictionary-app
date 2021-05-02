import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResult(response) {
    setResults(response.data[0]);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResult);
  }
  function handleSubmit(event) {
    event.preventDefault(); //👈important!!
    search();
  }

  function handleKeywordChange(event) {
    // console.log(event.target.value);
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h4>What word do you want to look up?</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
            ></input>
            <button type="submit">Search</button>
          </form>
        </section>
        <Results results={results} keyword={keyword} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
