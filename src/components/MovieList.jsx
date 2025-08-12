import React from "react";
import MovieItem from "./MovieItem.jsx";

const MovieList = ({ movies, onMovieClick }) => {
  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <>
      {movies.map((movie) => (
        <MovieItem
          key={movie.imdbID}
          movie={movie}
          onMovieClick={onMovieClick}
        />
      ))}
    </>
  );
};

export default MovieList;
