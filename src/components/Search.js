import React, { useContext } from "react";
import { useState, useEffect, useReducer } from "react";
import { fetchNews } from "../services/searchService";
import { HistoryContext } from "../App";

const Search = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [preloadSearch, setPreloadSearch] = useState();

  const { history, sethistory } = useContext(HistoryContext);
  useEffect(() => {
    const call = async () => {
      sethistory([...history, search]);
      let tell = await fetchNews(search);
      setData(tell);
    };
    call();
  }, [search]);
  const handleSearch = (e) => {
    setPreloadSearch(e);
  };
  const handleSubmit = () => {
    setSearch(preloadSearch);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <input
        type="text"
        placeholder="Search Hacker"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      ></input>
      <button onClick={handleSubmit}>Search</button>
      {data
        ? data.map((item) => <p key={item.title}>{item.title}</p>)
        : "loading"}
    </div>
  );
};

export default Search;
