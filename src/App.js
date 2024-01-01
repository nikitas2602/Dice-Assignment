import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import RepoCard from "./RepoCard";
import SortOptions from "./SortOptions";
import axios from "axios";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [sortOption, setSortOption] = useState("stars");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=${searchTerm}&sort=${sortOption}`
        );
        console.log("response :", response);
        setRepos(response.data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTerm, sortOption]);

  return (
    <div>
      <div className="nav-div">
        <SearchBar setSearchTerm={setSearchTerm} />
        <SortOptions setSortOption={setSortOption} />
      </div>
      <div className="cardDiv">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default App;
