import React, { useState } from "react";

const SearchBar = ({ onSearch, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="search__input--container">
      <input
        type="text"
        className="movie__search--box"
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={isLoading}
      />
      <button
        className="search__button"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? (
          <i className="fas fa-spinner fa-spin"></i>
        ) : (
          <i className="fas fa-search"></i>
        )}
      </button>
    </div>
  );
};

export default SearchBar;
