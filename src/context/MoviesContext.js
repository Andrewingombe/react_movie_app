import { createContext, useReducer } from "react";

// create context
export const MoviesContext = createContext();

// initialise state
const intitialState = {
  movies: null,
  likedMovies: [],
};

// create reducer function

export const MoviesReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return {
        ...state,
        movies: action.payload,
      };

    case "LIKE_MOVIE":
      return {
        ...state,
        likedMovies: state.likedMovies.concat(action.payload),
      };

    default:
      return state;
  }
};

// create context provider
export const MoviesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MoviesReducer, intitialState);

  return (
    <MoviesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MoviesContext.Provider>
  );
};
