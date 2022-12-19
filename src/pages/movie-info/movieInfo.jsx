import React, { useEffect, useState, useContext } from "react";
import { Box, Grid } from "@mui/material";
import MoviePoster from "./home/components/MoviePoster";
import MovieDetails from "./home/components/MovieDetails";
import useFetch from "../../Hooks/useFetch";
import Loader from "../../components/movie-card/Loader";
import ErrorMessage from "../../components/movie-card/ErrorMessage";
import { useParams } from "react-router-dom";
import { FavListContext } from "../../contexts/FavListContext";

const MovieInfo = () => {
  const { isLoading, error, performFetch } = useFetch();
  const { movieObject, setMovieObject, favList, setFavList } =
    useContext(FavListContext);
  const { movieId } = useParams();
  const [isFav, setIsFav] = useState(false);

  const removeAddToFavList = () => {
    // check if the movie in the favorite

    const isMovieInFavList = favList.some((movie) => movie.imdbID === movieId);
    if (isMovieInFavList) {
      setIsFav(false);
      setFavList((prev) => prev.filter((movie) => movie.imdbID !== movieId));
    } else {
      setIsFav(true);
      setFavList((prev) => [...prev, movieObject]);
    }
  };

  useEffect(() => {
    const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${movieId}`;
    performFetch(url).then((data) => setMovieObject(data));

    const isMovieInFavList = favList.some((movie) => movie.imdbID === movieId);
    if (isMovieInFavList) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }

    return () => setMovieObject(null);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {movieObject && (
        <Box my={3}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item md={5}>
              <MoviePoster isFav={isFav} favFunc={removeAddToFavList} />
            </Grid>
            <Grid item md={7}>
              <MovieDetails isFav={isFav} favFunc={removeAddToFavList} />
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default MovieInfo;
