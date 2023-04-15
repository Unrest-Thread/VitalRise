import { Box } from "@mui/material";
import ip from "../server.json"

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${ip.def_ip}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
