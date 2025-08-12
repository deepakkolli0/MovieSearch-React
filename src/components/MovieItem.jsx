import React from "react";
import defaultPoster from "../img/default_poster.jpg";

const MovieItem = ({ movie, onMovieClick }) => {
  const moviePoster = movie.Poster !== "N/A" ? movie.Poster : defaultPoster;

  const handleClick = () => {
    onMovieClick(movie.imdbID);
  };

  return (
    <div className="search__result--item" onClick={handleClick}>
      <div className="search__result--thumbnail">
        <img
          src={moviePoster}
          className="search__result--img"
          alt={movie.Title}
        />
      </div>
      <div className="search__result--info">
        <h3 className="search__result--title">{movie.Title}</h3>
        <p className="search__result--year">{movie.Year}</p>
        <p className="search__result--rating">
          ⭐ {movie.details?.imdbRating || "N/A"}/10
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
