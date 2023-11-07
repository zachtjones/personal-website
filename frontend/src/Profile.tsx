import { Link, Stack, Typography } from "@mui/material";

function Profile() {
  return (
    <>
      <Typography variant="h5">
        Profile
      </Typography>
      <Stack direction='column' justifyContent='space-between'>
        <Typography variant="body1">
          Phone: 858-603-8485
        </Typography>
        <Typography variant="body1">
          Email: zachtjones16@gmail.com
        </Typography>
        <Typography variant="body1">
          Location: San Diego
        </Typography>
        <Typography variant="body1" sx={{ display: 'inline'}}>
            Website: <Link href="https://www.zach-jones.com/" underline="always">https://www.zach-jones.com/</Link>
        </Typography>
      </Stack>
    </>
  );
}

export default Profile;