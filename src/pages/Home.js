import { useState, useEffect } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [liked, setLiked] = useState(false);

  const handleLiked = () => {
    setLiked((prev) => (prev = !liked));
    console.log(liked);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17"
      );

      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);
  return (
    <div className="home">
      {movies &&
        movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            liked={liked}
            handleLiked={handleLiked}
          />
        ))}
    </div>
  );
};

export default Home;
