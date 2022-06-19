import Movie from "../components/Movie";
import { useMoviesContext } from "../hooks/useMoviesContext";

const Liked = () => {
  const { likedMovies } = useMoviesContext();

  console.log(likedMovies);
  return (
    <div className="home">
      {likedMovies &&
        likedMovies.map((movie) => <Movie key={movie.id} movie={movie} />)}
    </div>
  );
};

export default Liked;
