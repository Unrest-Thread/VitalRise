import { Box, CircularProgress, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import WidgetWrapper from "Components/WidgetWrapper";
import jobsData from "../../jobs.json";

const JobListWidget = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobsData.jobs);
    setIsLoading(false);
  }, []);

  return (
    <WidgetWrapper sx={{ maxWidth: "100%", overflowX: "auto" }}>
      <Box sx={{ minWidth: "320px" }}>
        {isLoading ? (
          <CircularProgress />
        ) : jobs.length === 0 ? (
          <Typography sx={{ mt: "1rem" }}>No jobs found.</Typography>
        ) : (
          <List>
            {jobs.map((job) => (
              <ListItem key={job.id}>
                <ListItemText
                  primary={job.title}
                  secondary={job.company} 
                />
                <ListItemText
                  primary={job.description}
                  secondary={`${job.location} - ${job.salary}`}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </WidgetWrapper>
  );
};

export default JobListWidget;
