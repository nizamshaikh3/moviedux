import React, { useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies }) {
  const [searchText, setSearchText] = useState("");
  const [genreFilter, setGenreFilter] = useState("All Genres");
  const [ratingFilter, setRatingFilter] = useState("All");

  const handleOnSearchChangeEvent = (e) => {
    setSearchText(e.target.value);
  };

  const handleOnGenreFilterChangeEvent = (e) => {
    setGenreFilter(e.target.value);
  };

  const handleOnRatingFilterChangeEvent = (e) => {
    setRatingFilter(e.target.value);
  };

  const matchesGenreFilter = (movie, genre) => {
    return (
      "All Genres" === genre ||
      movie.genre.toLowerCase().includes(genre.toLowerCase())
    );
  };

  const matchesRatingFilter = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return false;
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchesGenreFilter(movie, genreFilter) &&
      matchesRatingFilter(movie, ratingFilter) &&
      movie.title.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div>
      <div>
        <input
          className="search-input"
          type="text"
          placeholder="Search movies..."
          value={searchText}
          onChange={handleOnSearchChangeEvent}
        ></input>
      </div>
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genreFilter}
            onChange={handleOnGenreFilterChangeEvent}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={ratingFilter}
            onChange={handleOnRatingFilterChangeEvent}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}
