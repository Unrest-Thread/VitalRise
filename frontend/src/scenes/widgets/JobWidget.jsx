import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import WidgetWrapper from "Components/WidgetWrapper";

const JobFilterWidget = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");

  const handleTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleLocationChange = (event) => {
    setJobLocation(event.target.value);
  };

  const handleClearFilterClick = () => {
    setJobTitle("");
    setJobLocation("");
  };

  return (
    <WidgetWrapper>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "flex-end" }}
        justifyContent={{ md: "space-between" }}
        gap="1rem"
      >
        <Box display="flex" flexDirection="column" gap="0.5rem">
          <TextField
            label="Job Title"
            variant="outlined"
            value={jobTitle}
            onChange={handleTitleChange}
          />
          <TextField
            label="Job Location"
            variant="outlined"
            value={jobLocation}
            onChange={handleLocationChange}
          />
        </Box>
        <Box display="flex" gap="1rem">
          <Button
            variant="contained"
            onClick={handleClearFilterClick}
            disabled={!jobTitle && !jobLocation}
          >
            Clear
          </Button>
        </Box>
      </Box>
    </WidgetWrapper>
  );
};

export default JobFilterWidget;
