import { Typography, Box } from "@mui/material";
import { ExperimentsContent } from "./experimentsContent";

function Experiments() {
  const experiments = ExperimentsContent
  return (
    <>
      <Box id='experiments'>
        <Typography variant="h5" component="h2">
          Projects
        </Typography>
        <Typography variant="body1" sx={{ 'fontStyle': 'italic', displayPrint: 'none' }}>
          These are some projects I have been tinkering with to learn or enhance my skills.
        </Typography>
        {experiments.map((it) => (
          <Box key={it.title}>
            <Typography variant="h6">
              {it.title}
            </Typography>
            <ul style={{ marginBlockStart: '0', marginBlockEnd: '0', paddingInlineStart: '32px' }}>
              {it.description.map((descItem) => (
                <Typography>
                  <li key={descItem}>{descItem}</li>
                </Typography>
              ))}
            </ul>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Experiments;