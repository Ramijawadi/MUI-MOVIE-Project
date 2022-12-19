import React, { useContext } from "react";
import { Card, CardMedia, Fab } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavListContext } from "../../../../contexts/FavListContext";


const MoviePoster = ({ isFav, favFunc }) => {
  const { movieObject } = useContext(FavListContext);

  return (
    <Card sx={{ position: "relative", borderRadius: 3 }}>
      <Fab
        color="primary"
        aria-label="add"
        onClick={favFunc}
        sx={{ position: "absolute", top: 10, left: 10 }}
      >
        {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </Fab>
      <CardMedia image={movieObject.Poster} component="img" />
    </Card>
  );
};

export default MoviePoster;
