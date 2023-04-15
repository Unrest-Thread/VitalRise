import { useState } from "react";
import { IconButton, Menu, MenuItem, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NotificationWidget = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick} color="inherit">
        <Badge badgeContent={4} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Notification 1</MenuItem>
        <MenuItem onClick={handleClose}>Notification 2</MenuItem>
        <MenuItem onClick={handleClose}>Notification 3</MenuItem>
        <MenuItem onClick={handleClose}>Notification 4</MenuItem>
      </Menu>
    </div>
  );
};

export default NotificationWidget;
