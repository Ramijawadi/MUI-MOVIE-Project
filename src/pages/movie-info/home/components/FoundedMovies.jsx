import React, { useEffect, useContext } from "react";
import { Box, Grid } from "@mui/material";
// import data from "../../../../data/data.json";
import MovieCard from "./MovieCard";
import { SearchContext } from "../../../../contexts/SearchContext";
import Loader from "../../../../components/movie-card/Loader";
import ErrorMessage from "../../../../components/movie-card/ErrorMessage";
import useFetch from "../../../../Hooks/useFetch";

const FoundedMovies = () => {
  const { searchWord, movieList, setMovieList } = useContext(SearchContext);

  const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchWord}`;

  const { error, isLoading, performFetch } = useFetch();
  useEffect(() => {
    if (searchWord) {
      performFetch(url).then((data) => {
        if (data) setMovieList(data.Search);
      });
    }
    // eslint-disable-next-line
  }, [searchWord]);

  useEffect(() => {
    if (error) {
      setMovieList([]);
    }
    // eslint-disable-next-line
  }, [error]);

  return (
    <Box py={3}>
      {error && <ErrorMessage error={error} />}
      {isLoading && <Loader />}
      <Grid container spacing={2}>
        {movieList.map((movie, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <MovieCard movieObject={movie} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default FoundedMovies;
