import { CardMedia, Card } from "@mui/material";
import React from "react";

const MoviePoster = ({ image }) => {
  return (
    <Card>
      <CardMedia image={image} component="img" />
    </Card>
  );
};

export default MoviePoster;
