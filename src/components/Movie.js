import React from "react";
import { Link } from "react-router-dom";

import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <img className={classes.poster} src={props.imageSrc} alt={props.title} />
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <Link className={classes.link} to={`/movies/${props.id}`}>
        View More
      </Link>
    </li>
  );
};

export default Movie;
