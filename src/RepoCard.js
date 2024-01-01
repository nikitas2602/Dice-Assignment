import React from "react";
import Star from "./assets/star.png";

const RepoCard = ({ repo }) => {
  console.log("repo.name : ", repo.name);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        backgroundColor: "#d3d3d3",
      }}
      className="card"
    >
      <img src={repo.owner.avatar_url} alt="Avatar" style={{ width: "50px" }} />
      <h3>{repo.name}</h3>
      <p>
        <img src={Star} height={"15px"} width={"15px"}></img>
        {repo.stargazers_count}
      </p>
      <p className="truncate-text">Description: {repo.description}</p>
      <p>Language: {repo.language}</p>
    </div>
  );
};

export default RepoCard;
