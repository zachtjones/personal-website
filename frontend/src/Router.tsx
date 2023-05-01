import {
  BrowserRouter,
  useLocation,
} from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Home";
import Experiments from "./Experiments";
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
        <Home />
        <Work />
        <Experiments />
    </>
  )
}

export default Router;