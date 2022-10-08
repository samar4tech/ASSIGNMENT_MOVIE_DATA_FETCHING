import React, { useState, useCallback } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import MoviesList from "./components/MoviesList";

import "./App.css";
import SingleMovieDetail from "./components/SingleMovieDetail";

function App() {
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://movie-task.vercel.app/api/popular?page=1"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const dataArray = data.data.results;

      const loadedMovieArray = [];
      for (const item of dataArray) {
        loadedMovieArray.push({
          id: item["id"],
          title: item["title"],
          release: item["release_date"],
          posterPath: `https://image.tmdb.org/t/p/original${item["poster_path"]}`,
        });
      }

      setMovies(loadedMovieArray);
      history.push("/movies");
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  }, [history]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = (
      <MoviesList
        movies={movies}
        releaseYr={movies.map((elem) => elem.release)}
      />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <section>
            {!isLoading && !error && (
              <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            )}
            {!isLoading && error && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
          </section>
        </Route>
        <Route path="/movies" exact>
          <section>{content}</section>
        </Route>

        <Route path="/movies/:movieId">
          <SingleMovieDetail />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
