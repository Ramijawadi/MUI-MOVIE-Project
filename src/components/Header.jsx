import React from "react";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import avatar from "../images/avatar.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
    sx={{ backgroundColor: "background.header", height: "70px" }}
    component="header"
     >
      <Container sx={{ height: "100%" }}>
        <Grid
          container
          sx={{
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item>
            <Link to="/">
              <Typography variant="h4" component="p" color="white" fontWeight="500">
                MovieApp
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Avatar
              src={avatar}
              alt="user-avatar"
              sx={{ height: "60px", width: "70px" }}
            />{" "}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
