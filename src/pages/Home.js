import { useEffect } from "react";
import Movie from "../components/Movie";
import { useMoviesContext } from "../hooks/useMoviesContext";

const Home = () => {
  const { movies, dispatch } = useMoviesContext();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17"
      );

      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "FETCH_MOVIE", payload: data.results });
      }
    };

    fetchMovies();
  }, [dispatch]);
  return (
    <div className="home">
      {movies && movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
    </div>
  );
};

export default Home;
