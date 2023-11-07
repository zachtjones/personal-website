import { Typography, Box, Chip } from "@mui/material";
import { WorkContent } from "./workContent";

function Skills() {
  const work = WorkContent

  const allPillNames = Array.from(
    new Set(
      work
        .flatMap(x => x.experiences)
        .flatMap(x => x.languages)
        .concat(
          work
            .flatMap(x => x.experiences)
            .flatMap(x => x.skills)
        )
    )
  ).sort((a, b) => 
    a.toLowerCase().localeCompare(b.toLowerCase())
  )

  return (
    <Box id='skills'>
      <Typography variant="h5" component="h2">
        Skills
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
          flexWrap: 'wrap',
          listStyle: 'none',
        }}
        displayPrint='none'
      >
        {allPillNames.map(x => <Chip color="primary" variant="outlined" label={x} key={x} sx={{ m: 0.5 }} />)}
      </Box>
      <Box display='none' displayPrint='block'>
        <Typography variant="body1">
          {allPillNames.join(" | ")}
        </Typography>
      </Box>
    </Box>
  );
}

export default Skills;