import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

export const useMoviesContext = () => {
  const context = useContext(MoviesContext);

  if (!context) {
    throw Error("useWorkoutsContext must be used within the provider");
  }

  return context;
};
