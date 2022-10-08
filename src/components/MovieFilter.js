import React from "react";
import classes from "./MovieFilter.module.css";

const MovieFilter = (props) => {
  console.log(props);
  const dropdownChangeHandler = (event) => {
    const chosenYear = event.target.value;

    props.onChangeFilter(chosenYear);
  };

  return (
    <div className={classes.movie_filter}>
      <div className={classes.movie_filter__control}>
        <label className={classes.label}>Filter by year</label>
        <select
          //   value={props.selected}
          className={classes.select}
          onChange={dropdownChangeHandler}
        >
          {props.releaseYr.map((elem, i) => (
            <option key={props.idArray[i]} value={elem}>
              {elem}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default MovieFilter;
