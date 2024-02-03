import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function Emails() {
  return (
    <Card>
      <ArgonBox display="flex" justifyContent="space-between" p={3} lineHeight={1}>
        <ArgonTypography variant="body2" color="text">
          Emails (50)
        </ArgonTypography>
        <Tooltip title="Check Emails" placement="bottom">
          <ArgonBox component="a" href="#">
            <ArgonTypography variant="body2">Check</ArgonTypography>
          </ArgonBox>
        </Tooltip>
      </ArgonBox>
    </Card>
  );
}

export default Emails;
