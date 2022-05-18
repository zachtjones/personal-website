import { Box, Typography } from "@mui/material";
import profile from './profile.jpg'

function Home() {
  return (
    <Box sx={{ width: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
      <Typography variant="h4" component="h1">
        Hello, my name is Zach
      </Typography>
      <img alt="zach jones" src={profile} style={{ width: '200px', height: '200px', margin: '20px'}} />
      <Typography variant="h6" component="p">
        Hi! I'm a full-stack software engineer in San Diego, USA.
      </Typography>
      <Typography variant="h6" component="p">
        Currently I'm working at Intuit on their Identity platform capabilities.
      </Typography>
    </Box>


  );
}

export default Home;