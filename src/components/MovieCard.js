import React from "react";
import "../styles.css";

export default function MovieCard({ movie, isWatchListed, toggleWatchlist }) {
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };

  const ratingColour = (rating) => {
    if (rating > 8) {
      return "rating-good";
    }
    if (rating < 8 && rating >= 5) {
      return "rating-ok";
    }
    return "rating-bad";
  };
  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className={`movie-card-rating ${ratingColour(movie.rating)}`}>
          {movie.rating}
        </p>

        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchListed}
            onChange={() => toggleWatchlist(movie.id)}
          ></input>

          <span className="slider">
            <span className="slider-label">
              {isWatchListed ? "In watchlist" : "Add to watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
