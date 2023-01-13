import SpeedDialComfort from "./component/SpeedDialComfort";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {blue, grey} from '@mui/material/colors';
import {Stack} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import './App.css';
import StartScreen from "./component/StartScreen"
import Description from "./component/Description"
import { useEffect, useState } from "react";
import AppBarComfort from "./component/AppBarComfort";
const theme = createTheme({
  palette: {
      primary: {
          main: blue[800],
      },
      secondary: {
          main: grey[500],
      },
  },
});

function App() {
  useEffect(() => {
    document.title = "Дмитров Отопление";  
  }, []);
  return (
    
    <ThemeProvider theme={theme}>
      <AppBarComfort/>
      <SpeedDialComfort/>

      <Stack spacing={0}>
        <Toolbar/>
        <div className='BG'>
        <div className='Dark'>
            <StartScreen/>

          </div>
        </div>
        <Description/>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
