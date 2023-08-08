import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [cancel, setCancel] = useState(false);
  const cancleHandle = () => {
    console.log("canelHandle");
    setCancel((prev) => true);
    console.log(cancel);
  };
  const fetchMovieHandler = useCallback(async () => {
    setLoader(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something Went Wrong ...retrying");
      }
      const data = await response.json();
      console.log(data);
      const transformedList = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl,
        };
      });
      setMovies(transformedList);
    } catch (error) {
      setError(error.message);
      console.log(cancel);
      if (!cancel) {
        setTimeout(() => {
          fetchMovieHandler();
        }, 3000);
      }
    }
    setLoader(false);
  }, [cancel]);
  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  let content = <p>No movies</p>;
  if (error) {
    content = (
      <div>
        <p>{error}</p>
      </div>
    );
  }
  if (loader) {
    content = <p>Loading....</p>;
  }
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
        <button onClick={cancleHandle}>Cancel</button>
      </section>
    </React.Fragment>
  );
}

export default App;
