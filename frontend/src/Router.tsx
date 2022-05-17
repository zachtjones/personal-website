import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import { Box } from "@mui/material";

function Router() {
  return (
    <Box sx={{ m: 1, p: 1 }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default Router;