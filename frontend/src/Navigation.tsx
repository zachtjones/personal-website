import { AppBar, Avatar, Box, Toolbar, Link } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import profile from './images/profile.png'


function Navigation() {
  return (

    <AppBar position='sticky' sx={{ displayPrint: 'none' }}>
      <Toolbar disableGutters>
        <div style={{ width: '100%' }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            p: 1,
            m: 1,
            //bgcolor: 'background.default',
            borderRadius: 1,
            alignItems: 'center'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar alt="zach jones" src={profile} sx={{ display: 'inline-block', marginRight: '10px' }}></Avatar>
              <span>Zachary Jones</span>
            </Box>

            <Box />

            <Link href="/#home" color="inherit" underline="hover">
              <HomeIcon />
            </Link>

            <Link href="/#work" color="inherit" underline="hover">
              Work Experience
            </Link>

            <Link href="/#experiments" color="inherit" underline="hover">
              Projects
            </Link>

            <Link href="mailto:zachary_jones@intuit.com" color="inherit" underline="hover">
              <MailIcon />
            </Link>
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;