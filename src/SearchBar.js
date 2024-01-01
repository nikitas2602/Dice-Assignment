import React, { useState } from "react";
import "./App.css";

const SearchBar = ({ setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="inputSearch"
      />
      <button onClick={handleSearch} className="searchButton">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
