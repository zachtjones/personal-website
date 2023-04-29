import { Typography, Divider, Box } from "@mui/material";
import { ExperimentsContent } from "./experimentsContent";

function Experiments() {
  const experiments = ExperimentsContent
  return (
    <Box id='experiments' mt={4} sx={{
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      bgcolor: 'background.paper'
    }}>
      <Typography variant="h4" component="h1">
        Projects
      </Typography>
      <Typography variant="h6" component="h2" mt={1} sx={{ 'fontStyle': 'italic' }}>
        These are some projects I have been tinkering with to learn or enhance my skills.
      </Typography>
      {experiments.map((it) => (
        <Box key={it.title}>
          <Divider variant="inset" />
          <Typography variant="h6" component="h3" mt={2}>
            {it.title}
          </Typography>
          <ul>
            {it.description.map((descItem) => (<li key={descItem}>{descItem}</li>))}
          </ul>
        </Box>
      ))}
    </Box>
  );
}

export default Experiments;