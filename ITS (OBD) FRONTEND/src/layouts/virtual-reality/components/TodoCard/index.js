import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function TodoCard() {
  return (
    <Card>
      <ArgonBox bgColor="dark" variant="gradient">
        <ArgonBox p={3}>
          <ArgonBox display="flex" justifyContent="space-between">
            <ArgonTypography variant="h5" color="white">
              Approved Vendors
            </ArgonTypography>
            <ArgonBox textAlign="center" lineHeight={1}>
              <ArgonTypography variant="h1" color="white" fontWeight="bold">
                3
              </ArgonTypography>
              <ArgonTypography variant="button" color="white" fontWeight="regular">
                Faults
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
          <ArgonTypography variant="body2" color="white" fontWeight="regular">
            DaeWoo Motors
          </ArgonTypography>
          
        </ArgonBox>
        <Tooltip title="More Vendors" placement="left" sx={{ cursor: "pointer" }}>
          <ArgonBox textAlign="center" color="white" py={0.5} lineHeight={0}>
            <Icon sx={{ fontWeight: "bold" }} color="inherit" fontSize="default">
              keyboard_arrow_down
            </Icon>
          </ArgonBox>
        </Tooltip>
      </ArgonBox>
    </Card>
  );
}

export default TodoCard;
