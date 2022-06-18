const Movie = ({ movie, handleLiked }) => {
  return (
    <div className="movie-wrapper">
      <div className="image-wrapper">
        <img
          src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
          alt={movie.original_title}
        />
      </div>

      <div className="movie-details">
        <h3>{movie.title}</h3>
        <>
          <button className="movie-btn">Details</button>
          <button onClick={handleLiked} className="movie-btn">
            Like
          </button>
        </>
      </div>
    </div>
  );
};

export default Movie;
