import {
  BrowserRouter,
  useLocation,
} from "react-router-dom";
import { Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Home from "./Home";
import Education from "./Education";
import Experiments from "./Experiments";
import Profile from "./Profile";
import Skills from "./Skills";
import Summary from "./Summary";
import Work from "./Work";
import { useEffect } from "react";

function Router() {
  
  return (
    <Box sx={{ m: 1, p: 1 }}>
      <BrowserRouter>
        <AppElementsRouter />
      </BrowserRouter>
    </Box>
  );
}

function AppElementsRouter() {
 const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (!hash) {
      window.scrollTo(0, 0)
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          const offset = -100
          const y = element.getBoundingClientRect().top + window.scrollY + offset
          window.scrollTo({ top: y, behavior: 'smooth' })
          element.scrollIntoView()
        }
      }, 0)
    }
  }, [pathname, hash, key]) // do this on route change

  return (
    <>
      <Box sx={{ 
        displayPrint: 'none',  
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        bgcolor: 'background.paper'
      }}>
        <Home />
        <Summary />
        <Education />
        <Skills />
        <Work />
        <Experiments />
      </Box>
      {/* Print view for resume */}
      <Box sx={{ display: 'none', displayPrint: 'block', color: 'black' }}>
        <Summary />
        {/* 2 column setup */}
        <Grid container spacing={4}>
          {/* column 1 */}
          <Grid xs={9}>
            <Work />
            <Experiments />
          </Grid>
          {/* column 2 */}
          <Grid xs={3}>
            <Profile />
            <Skills />
            <Education />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Router;