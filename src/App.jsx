import { useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SwitchTheme from "./components/SwitchTheme";
import { darkTheme, lightTheme } from "./theme/Theme";

function App() {

  const [isDarkMode , setIsDarkMode]=useState(false);
  return (
  <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <Box bgcolor="background.body" minHeight="100vh" >
      <Header />
      <Container>
      <SwitchTheme  value={isDarkMode} setValue={setIsDarkMode}  />
      <Outlet />
      </Container>
      </Box>
      </ThemeProvider>
  );
}

export default App;
