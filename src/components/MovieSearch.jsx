import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import MovieList from "./MovieList.jsx";
import FilterDropdown from "./FilterDropdown.jsx";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterResetTrigger, setFilterResetTrigger] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const API_KEY = "3f0cb8a8";

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      searchMovies(query);
    }
  }, []);

  const searchMovies = async (searchTerm) => {
    if (!searchTerm.trim()) {
      setMovies([]);
      setShowFilter(false);
      return;
    }

    setIsLoading(true);
    setSearchParams({ q: searchTerm });

    try {
      const response = await fetch(
        `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        await displayMovieList(data.Search);
      } else {
        setMovies([]);
        setShowFilter(false);
      }
    } catch (error) {
      console.error("Error searching movies:", error);
      setMovies([]);
      setShowFilter(false);
    } finally {
      setIsLoading(false);
    }
  };

  const displayMovieList = async (searchResults) => {
    const moviesWithDetails = [];

    for (let i = 0; i < searchResults.length; i++) {
      const result = await fetch(
        `https://www.omdbapi.com/?i=${searchResults[i].imdbID}&apikey=${API_KEY}`
      );
      const movieDetails = await result.json();

      const movieData = {
        ...searchResults[i],
        details: movieDetails,
        rating:
          movieDetails.imdbRating === "N/A"
            ? 0
            : parseFloat(movieDetails.imdbRating) || 0,
      };
      moviesWithDetails.push(movieData);
    }

    setCurrentMovies(moviesWithDetails);
    setMovies(moviesWithDetails);
    setShowFilter(true);
    setFilterResetTrigger((prev) => prev + 1);
  };

  const sortMovies = (sortValue) => {
    if (currentMovies.length === 0) return;

    if (!sortValue) {
      setMovies([...currentMovies]);
      return;
    }

    const sortedMovies = [...currentMovies];

    if (sortValue === "highest") {
      sortedMovies.sort((a, b) => b.rating - a.rating);
    } else if (sortValue === "lowest") {
      sortedMovies.sort((a, b) => a.rating - b.rating);
    }

    setMovies(sortedMovies);
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div className="wrapper">
      <div className="search__container">
        <div className="search__element">
          <SearchBar onSearch={searchMovies} isLoading={isLoading} />
        </div>
      </div>

      {showFilter && (
        <FilterDropdown onSort={sortMovies} resetTrigger={filterResetTrigger} />
      )}

      <div className="container">
        <div className="result__container">
          <div className="result__grid">
            <MovieList movies={movies} onMovieClick={handleMovieClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;
