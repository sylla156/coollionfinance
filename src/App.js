import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import React from "react";
import "./App.css";
import LiveStats from "./components/LiveStats";
import Navbar from "./components/Navbar";
import Router from "./Router/Router";

function App() {
  const theme = useTheme();
  return (
    <Box sx={{backgroundColor:theme.palette.secondary.dark}}>
      <Navbar />
      <LiveStats/>
      <Router />
    </Box>
  );
}

export default App;
