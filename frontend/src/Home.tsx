import { Box, Grid, Stack, Typography } from "@mui/material";
import profile from './images/profile.png'

function Home() {
  return (
    <Box sx={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }} id='home'>
      <Typography variant="h4" component="h1" sx={{ display: 'block', displayPrint: 'none' }}>
        Hi, I'm Zach
      </Typography>
      <Stack direction='row' justifyContent='space-between' alignItems='center' display='none' displayPrint='flex'>
        <Typography variant="h4">
          Zachary Jones
        </Typography>
      
        <Stack direction='column' justifyContent='space-between'>
          <Typography variant="body1">
            858-603-8485
          </Typography>
          <Typography variant="body1">
            zachtjones16@gmail.com
          </Typography>
          <Typography variant="body1">
            Location: San Diego, USA or Remote
          </Typography>
        </Stack>
        
        
      </Stack>
      
      <Box displayPrint='none'>
        <img alt="zach jones" src={profile} style={{ width: '200px', height: '200px', margin: '20px' }} />
      </Box>
      <Typography variant="h6" component="p" displayPrint='none'>
        I'm a full-stack senior software engineer based in San Diego, USA, where I develop backend applications in Spring Boot / Kotlin for Intuit's Identity organization.
      </Typography>
    </Box>


  );
}

export default Home;