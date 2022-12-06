import React from "react";
import { Box, Grid } from "@mui/material";
import data from "../../../../data/data.json";
import MovieCard from "./MovieCard";

const FoundedMovies = () => {
  return (
    <Box mt={3}>
      <Grid container spacing={2}>
        {data.map((movie, index) => {
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
