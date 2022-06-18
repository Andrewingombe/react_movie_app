import { useState, useEffect } from "react";

const Home = () => {
  const [movies, setMovies] = useState(null);

  console.log(movies);

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
    <div>
      {movies &&
        movies.map((movie) => (
          <div>
            <img
              src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
              alt={movie.original_title}
            />
          </div>
        ))}
    </div>
  );
};

export default Home;
