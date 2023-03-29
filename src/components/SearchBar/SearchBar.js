import React, { useState } from "react";
import "./SearchBar.css";

export function SearchBarView({ dispatch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: "setWhat", payload: searchTerm });
    // dispatch({ type: "setPage", payload: 1 });
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search jobs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}