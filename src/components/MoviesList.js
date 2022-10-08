import React, { Fragment } from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";
import MovieFilter from "./MovieFilter";
import { useState, useCallback } from "react";

const MovieList = (props) => {
  const [filteredArray, setFilteredArray] = useState([]);
  const [isFilteredClick, setIsFilteredClick] = useState(false);

  //////////////////////////////////////////////////////
  ////////////////////////////////////////filtering/////////////////
  const changeFilterHandler = useCallback((receivedYr) => {
    setIsFilteredClick(true);
    const updatedArr = props.movies.filter(
      (elem) => elem.release === receivedYr
    );
    setFilteredArray(updatedArr);
  }, []);

  ///////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  return (
    <Fragment>
      <MovieFilter
        releaseYr={props.releaseYr}
        idArray={props.movies.map((elem) => elem.id)}
        onChangeFilter={changeFilterHandler}
      />

      <ul className={classes["movies-list"]}>
        {!isFilteredClick &&
          props.movies.map((movie) => (
            <Movie
              id={movie.id}
              key={movie.id}
              title={movie.title}
              releaseDate={movie.release}
              openingText={movie.openingText}
              imageSrc={movie.posterPath}
            />
          ))}
        {isFilteredClick &&
          filteredArray.map((movie) => (
            <Movie
              id={movie.id}
              key={movie.id}
              title={movie.title}
              releaseDate={movie.release}
              openingText={movie.openingText}
              imageSrc={movie.posterPath}
            />
          ))}
      </ul>
    </Fragment>
  );
};

export default MovieList;
