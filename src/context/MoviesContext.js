import { createContext, useReducer } from "react";

// create context
export const MoviesContext = createContext();

// create reducer function

export const MoviesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return {
        movies: action.payload,
      };

    default:
      return state;
  }
};

// create context provider
export const MoviesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MoviesReducer, {
    movies: null,
  });

  return (
    <MoviesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MoviesContext.Provider>
  );
};
