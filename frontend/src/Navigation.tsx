import { AppBar, Box, Toolbar, Link } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';

function Navigation() {
  return (

    <AppBar position='static'>
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
            <Link href="/" color="inherit" underline="hover">
              <HomeIcon />
            </Link>

            <Link href="/about" color="inherit" underline="hover">
              About
            </Link>

            <Link href="/projects" color="inherit" underline="hover">
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