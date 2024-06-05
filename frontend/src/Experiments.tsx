import { Typography, Box } from "@mui/material";
import { ExperimentsContent } from "./experimentsContent";
import LanguageClassifierExperiment from "./LanguageClassifierExperiment";

const customWidgets = {
  "languageClassifier": <LanguageClassifierExperiment/>
}

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
                <Typography key={descItem}>
                  <li>{descItem}</li>
                </Typography>
              ))}
            </ul>
            {/* {it.customWidget === 'languageClassifier' && customWidgets[it.customWidget]} */}
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Experiments;