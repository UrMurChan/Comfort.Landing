import SpeedDialBen from "./component/SpeedDialComfort";
import AppBarBen from "./component/AppBarComfort";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {green, grey} from '@mui/material/colors';
import {Stack} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import './App.css';
import StartScreen from "./component/StartScreen"
import Examples from "./component/Examples"
import Footer from "./component/Footer"
import HowWork from "./component/HowWork"
import Reasons from "./component/Reasons"
import TypesJobs from "./component/TypesJobs"
import { useEffect, useState } from "react";

const theme = createTheme({
  palette: {
      primary: {
          main: grey[800],
      },
      secondary: {
          main: green[500],
      },
  },
});

function App() {
  useEffect(() => {
    document.title = "Дмитров Отопление";  
  }, []);
  return (
    
    <ThemeProvider theme={theme}>
      <SpeedDialBen/>
      <AppBarBen />
      <Stack spacing={0}>
        <Toolbar/>
        <div className='BG'>
        <StartScreen/>
        <TypesJobs/>
        <Reasons/>
        <Examples/>
        <HowWork/>
        <Footer/>
        </div>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
