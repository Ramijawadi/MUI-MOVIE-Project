import { createTheme } from "@mui/material";
import { darkShadows, lightShadows } from "./Shadows";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      header: "#0f171e",
      body: "#ffffff",
      cardContent:"#ffffffc3",
    },
  },
  shadows:darkShadows,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      header: "#0f171e",
      body: "#1a242f",
      cardContent:"#000000a0",
    },
  },

  shadows : lightShadows,
});