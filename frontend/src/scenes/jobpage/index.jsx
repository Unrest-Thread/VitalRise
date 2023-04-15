import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import JobListWidget from "scenes/widgets/JobListWidget";
import JobWidget from "scenes/widgets/JobWidget";

const JobPage = () => {
  const theme = useTheme();
  const isDesktopView = useMediaQuery(theme.breakpoints.up("md"));
  const { user } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding={theme.spacing(2, 6)}
        display="flex"
        flexDirection={isDesktopView ? "row" : "column"}
        alignItems={isDesktopView ? undefined : "center"}
        gap={theme.spacing(2)}
        justifyContent="space-between"
      >
        <Box
          flexBasis={isDesktopView ? "70%" : "100%"}
          marginTop={!isDesktopView ? theme.spacing(2) : undefined}
        >
          <Typography variant="h3" marginBottom={theme.spacing(2)}>
            Job Listings
          </Typography>
          <JobListWidget userId={user} />
        </Box>
        {isDesktopView && (
          <Box flexBasis="26%"
          marginTop="4vh">
            <JobWidget />
            <Box flexBasis="26%"
          marginTop="4vh">
            <AdvertWidget/>
          </Box>
          </Box>
        )}
      </Box>
      {!isDesktopView && (
        <Box marginTop={theme.spacing(2)}>
          <JobWidget />
        </Box>
      )}
    </Box>
  );
};

export default JobPage;
