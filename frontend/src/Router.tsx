import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Home";
import Experiments from "./Experiments";
import Work from "./Work";

function Router() {
  return (
    <Box sx={{ m: 1, p: 1 }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="experiments" element={<Experiments />} />
          <Route path="work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default Router;