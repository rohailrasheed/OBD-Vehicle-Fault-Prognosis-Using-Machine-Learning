import Card from "@mui/material/Card";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function TodoCard() {
  return (
    <Card>
      <ArgonBox bgColor="dark" variant="gradient">
        <ArgonBox p={3}>
          <ArgonBox display="flex" justifyContent="space-between">
            <ArgonTypography variant="h5" color="white">
              Predicted Cost
            </ArgonTypography>
            
          </ArgonBox>
          <ArgonTypography variant="body2" color="white" fontWeight="regular">
          $ 2,500
          </ArgonTypography>
          
        </ArgonBox>        
      </ArgonBox>
    </Card>
  );
}

export default TodoCard;