import React from "react";

const SortOptions = ({ setSortOption }) => {
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="sort">
      <label>Sort By : </label>
      <select onChange={handleSortChange} className="selectSort">
        <option value="stars">Stars</option>
        <option value="watchers">Watchers</option>
        <option value="score">Score</option>
        <option value="name">Name</option>
        <option value="created">Created At</option>
        <option value="updated">Updated At</option>
      </select>
    </div>
  );
};

export default SortOptions;
