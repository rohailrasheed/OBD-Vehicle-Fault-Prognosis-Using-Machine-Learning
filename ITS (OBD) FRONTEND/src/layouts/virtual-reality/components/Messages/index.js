import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";

// Images
import Alyan from "assets/images/Alyan (1).png";
import Aarish from "assets/images/Aarish (1).png";
import Rohail from "assets/images/Rohail (1).png";
import team5 from "assets/images/team-5.jpg";

function Messages() {
  const messagesAvatarStyles = {
    border: ({ borders: { borderWidth }, palette: { white } }) =>
      `${borderWidth[2]} solid ${white.main}`,
    cursor: "pointer",
    position: "relative",
    ml: -1.5,

    "&:hover, &:focus": {
      zIndex: "10",
    },
  };

  return (
    <Card>
      <ArgonBox display="flex" alignItems="center" justifyContent="space-between" p={3}>
        <ArgonTypography variant="body2" color="text">
          Messages
        </ArgonTypography>
        <ArgonBox display="flex">
          <Tooltip title="2 New Messages" placement="top">
            <ArgonAvatar src={Alyan} alt="Alyan" size="sm" sx={messagesAvatarStyles} />
          </Tooltip>
          <Tooltip title="1 New Messages" placement="top">
            <ArgonAvatar src={Aarish} alt="Aarish" size="sm" sx={messagesAvatarStyles} />
          </Tooltip>
          <Tooltip title="13 New Messages" placement="top">
            <ArgonAvatar src={Rohail} alt="Rohail" size="sm" sx={messagesAvatarStyles} />
          </Tooltip>
          <Tooltip title="7 New Messages" placement="top">
            <ArgonAvatar src={team5} alt="team-5" size="sm" sx={messagesAvatarStyles} />
          </Tooltip>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default Messages;
