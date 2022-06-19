import { useMoviesContext } from "../hooks/useMoviesContext";

const Movie = ({ movie }) => {
  const { dispatch, likedMovies } = useMoviesContext();
  const isLiked = likedMovies.some((liked) => liked.id === movie.id);

  const handleClick = () => {
    // check if liked movie already exits
    if (isLiked) {
      const filteredMovies = likedMovies.filter((item) => item.id !== movie.id);
      dispatch({ type: "UPDATE_LIKED_MOVIES", payload: filteredMovies });
    } else {
      dispatch({ type: "LIKE_MOVIE", payload: movie });
    }
  };

  return (
    <div className="movie-wrapper">
      <div className="image-wrapper">
        <img
          src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
          alt={movie.original_title}
        />
      </div>

      <div className="movie-details">
        <div>
          <h3>{movie.title}</h3>
          <button
            onClick={handleClick}
            style={{ marginTop: "auto" }}
            className={isLiked ? "movie-btn--active" : "movie-btn"}
          >
            {isLiked ? "Unlike" : "Like"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
