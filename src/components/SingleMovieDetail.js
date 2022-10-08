import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./SingleMovieDetail.module.css";

function SingleMovieDetail() {
  const params = useParams();
  const movieId = params.movieId;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [descriptionObj, setDescriptionObj] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const fetchSingleMovieData = async () => {
      const response = await fetch(
        `https://movie-task.vercel.app/api/movie?movieId=${movieId}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      setDescriptionObj((prevState) => ({
        ...prevState,
        title: data.data.title,
        description: data.data.overview,
      }));
      setIsLoading(false);
    };

    fetchSingleMovieData()
      .then(() => {})
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <div className={classes.description}>
      {isLoading && <h2 className={classes.loading}>Loading....</h2>}
      {!isLoading && !error && (
        <div>
          <h2 className={classes.loading}>{descriptionObj.title}</h2>
          <p className={classes.description}>{descriptionObj.description}</p>
        </div>
      )}
      {!isLoading && error && <p className={classes.loading}>{error}</p>}
    </div>
  );
}

export default SingleMovieDetail;
