const Movie = ({ movie }) => {
  return (
    <div className="movie-wrapper">
      <div className="image-wrapper">
        <img
          src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
          alt={movie.original_title}
        />
      </div>

      <div className="movie-details">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3>{movie.title}</h3>
          <button style={{ marginTop: "auto" }} className="movie-btn">
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
