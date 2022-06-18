import React from "react";

const Movie = ({ movie }) => {
  return (
    <div>
      <div className="image-wrapper">
        <img
          src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
          alt={movie.original_title}
        />
      </div>
    </div>
  );
};

export default Movie;
