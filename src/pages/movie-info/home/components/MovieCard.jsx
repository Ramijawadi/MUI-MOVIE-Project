import React from "react";
import "./movie-card.css";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import wait from "../../../../utils/wait";

const MovieCard = ({ movieObject }) => {
  const { Title, Year, imdbID, Type, Poster } = movieObject;
  const { shadows } = useTheme();
  const navigate = useNavigate();
  async function navigateToMovieDetails() {
    await wait(350);
    navigate(`/movie/${imdbID}`);
  }

  return (
    <Box mt={2}>
      <CardActionArea className="movie-card" onClick={navigateToMovieDetails}>
        <Card
          sx={{
            height: "450px",
            position: "relative",
            borderRadius: 3,
            ":hover": {
              boxShadow: shadows[5],
            },
          }}
        >
          <CardMedia
            image={Poster}
            alt="movie poster"
            component="img"
            sx={{ height: "100%" }}
          />
          <CardContent
            sx={{
              zIndedx: "1",
              position: "absolute",
              width: "100%",
              bottom: 0,
              bgcolor: "background.cardContent",
            }}
            className="movie-content"
          >
            <Typography variant="h6" color="text.primary" fontWeight="bold">
              {" "}
              {Title}
            </Typography>
            <Typography variant="h6" color="text.primary">
              {" "}
              {Type}
            </Typography>
            <Typography variant="h6" color="text.primary">
              {Year}{" "}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Box>
  );
};

export default MovieCard;
