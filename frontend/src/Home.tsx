import { Box, Typography } from "@mui/material";
import profile from './images/profile.png'

function Home() {
  return (
    <Box sx={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }} id='home'>
      <Typography variant="h4" component="h1">
        Hi, I'm Zach
      </Typography>
      <img alt="zach jones" src={profile} style={{ width: '200px', height: '200px', margin: '20px' }} />
      <Typography variant="h6" component="p">
        I'm a full-stack senior software engineer based in San Diego, USA, where I develop backend applications in Spring Boot / Kotlin for Intuit's Identity organization.
      </Typography>
    </Box>


  );
}

export default Home;