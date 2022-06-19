import Movie from "../components/Movie";
import { useMoviesContext } from "../hooks/useMoviesContext";

const Liked = () => {
  const { likedMovies } = useMoviesContext();

  return (
    <div>
      <h2 className="page-title">Liked Movies</h2>
      <div className="home">
        {likedMovies &&
          likedMovies.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Liked;
