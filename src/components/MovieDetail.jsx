import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import defaultPoster from "../img/default_poster.jpg";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  const API_KEY = "3f0cb8a8";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovie(data);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return null;
  }

  return (
    <div className="movie__detail">
      <div className="movie__detail--container">
        <div className="movie__detail--poster">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : defaultPoster}
            alt={movie.Title}
            className="movie__detail--poster-img"
          />
        </div>

        <div className="movie__detail--info">
          <h1 className="movie__detail--title">{movie.Title}</h1>

          <div className="movie__detail--meta">
            <p className="movie__detail--year">{movie.Year}</p>
            <p className="movie__detail--rated">{movie.Rated}</p>
            <p className="movie__detail--runtime">{movie.Runtime}</p>
          </div>

          <div className="movie__detail--rating">
            <p className="movie__detail--rating-label">IMDb Rating:</p>
            <p className="movie__detail--rating-value">
              ⭐ {movie.imdbRating}/10
            </p>
          </div>

          <div className="movie__detail--genre">
            <strong>Genre:</strong> {movie.Genre}
          </div>

          <div className="movie__detail--plot">
            <strong>Plot:</strong>
            <p>{movie.Plot}</p>
          </div>

          <div className="movie__detail--director">
            <strong>Director:</strong> {movie.Director}
          </div>

          <div className="movie__detail--actors">
            <strong>Actors:</strong> {movie.Actors}
          </div>

          <div className="movie__detail--writer">
            <strong>Writer:</strong> {movie.Writer}
          </div>

          <div className="movie__detail--language">
            <strong>Language:</strong> {movie.Language}
          </div>

          {movie.Awards && movie.Awards !== "N/A" && (
            <div className="movie__detail--awards">
              <strong>Awards:</strong> {movie.Awards}
            </div>
          )}

          <button
            className="movie__detail--back-btn"
            onClick={() => navigate("/search")}
          >
            Back to Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
