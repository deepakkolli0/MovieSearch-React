import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className="landing__page">
      <div className="landing__page--content">
        <h1 className="landing__page--title">MovieSearch</h1>
        <p className="landing__page--description">
          Find your next watch here! This database search website allows you to
          search for any movie, tv show, or anime seamless responsiveness. Using
          the OMDb API, the website also allows you to view information about
          any media that you find. Happy searching!
        </p>

        <form className="landing__page--search" onSubmit={handleSearch}>
          <input
            type="text"
            className="landing__page--search-input"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            type="submit"
            className="landing__page--search-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <i className="fas fa-search"></i>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
