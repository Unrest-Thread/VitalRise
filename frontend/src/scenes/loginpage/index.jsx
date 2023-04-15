import { Box, Typography, useTheme, useMediaQuery, Grid,Paper } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
  <Grid container component="main" sx={{ height: '100vh' }}>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random/?healthcare)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[10] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: "center" // center vertically
            }}
          >
            <Typography
              textAlign="center"
              fontWeight="bold"
              fontSize="48px"
              color="primary"
            >
              Vitalrise
            </Typography>
          </Grid>
    <Grid item xs={8} sm={6} md={5} component={Paper} elevation={null} square >
    <Typography
        paddingTop="6rem"
        textAlign="center"
        fontWeight="bold"
         fontSize="32px" color="alt">
        Login/SignUp
      </Typography>
      <Box width={isNonMobileScreens ? "70%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}>
        <Form />
      </Box>
    </Grid>
  </Grid>
  );
};

export default LoginPage;