import { Typography, Box, Divider } from "@mui/material";

const yearsOfExperience = new Date().getFullYear() - 2019 // 2020 counts as a year

const summaryContent = `Software Engineer with ${yearsOfExperience} years of experience,
specializing in highly scalable (60,000+ requests/second), highly available (99.99%) microservices.
Passionate about developer experience and delivering end to end solutions, from DevOps to Backend and Frontend.`


/**
 * Professional summary
 * 
 */

function Summary() {

  return (
    <Box id='summary'>
      <Typography variant="h4" display='none' displayPrint='block'>
        Zachary Jones
      </Typography>
      <Typography variant="h5" displayPrint='none'>
        Summary
      </Typography>
      <Typography variant="body1">
        {summaryContent}
      </Typography>
      <Box display='none' displayPrint='block'>
        <Divider/>
        <Divider sx={{ margin: '5px', backgroundColor: '#888' }} />
      </Box>
    </Box>
  );
}


export default Summary;