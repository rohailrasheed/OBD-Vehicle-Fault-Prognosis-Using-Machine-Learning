import Icon from "@mui/material/Icon";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonProgress from "components/ArgonProgress";
import { Link } from "react-router-dom";
import pak from "assets/images/vendors/pak.png"
import Toyota from "assets/images/vendors/toyota.png"
import Daewoo from "assets/images/vendors/daewoo-automobile.svg"
import janjapan from "assets/images/vendors/janjapan.jpg"
import SAP from "assets/images/vendors/SAP.png"
import Moin from "assets/images/vendors/motor.png";

function Completion({ value, color }) {
  return (
    <ArgonBox display="flex" alignItems="center">
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        {value}%&nbsp;
      </ArgonTypography>
      <ArgonBox width="8rem">
        <ArgonProgress value={value} color={color} variant="gradient" label={false} />
      </ArgonBox>
    </ArgonBox>
  );
}

const projectsTableData = {
  columns: [
    { name: "Approved_Vendors", align: "left" },
    { name: "budget", align: "left" },
    { name: "status", align: "left" },
    { name: "Service_Efficiency", align: "center" },
    { name: "billing", align: "center" },
  ],

  rows: [
    {
      Approved_Vendors: [Daewoo, "Daewoo Motors"],
      budget: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          $2,500
        </ArgonTypography>
      ),
      status: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          Available
        </ArgonTypography>
      ),
      Service_Efficiency: <Completion value={60} color="info" />,
      billing: ( <Link to={"/billing"}>
        <ArgonTypography
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          View
        </ArgonTypography>
        </Link>
      ),
    },
    {
      Approved_Vendors: [pak, "Pak Wheels"],
      budget: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          $5,000
        </ArgonTypography>
      ),
      status: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          Available
        </ArgonTypography>
      ),
      Service_Efficiency: <Completion value={100} color="success" />,
      billing: (
        <ArgonTypography
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          View
        </ArgonTypography>
      ),

    },
    {
      Approved_Vendors: [janjapan, "Jan Japan Motors"],
      budget: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          $3,400
        </ArgonTypography>
      ),
      status: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          Not Available
        </ArgonTypography>
      ),
      Service_Efficiency: <Completion value={30} color="error" />,
      billing: (
        <ArgonTypography
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          View
        </ArgonTypography>
      ),

    },
    {
      Approved_Vendors: [Moin, "Moin Motors Workshop"],
      budget: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          $1,400
        </ArgonTypography>
      ),
      status: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          Not Available
        </ArgonTypography>
      ),
      Service_Efficiency: <Completion value={0} color="error" />,
      billing: ( 
        <ArgonTypography
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          View
        </ArgonTypography>
      ),
    },
    {
      Approved_Vendors: [SAP, "SAP Car Detailing"],
      budget: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          $14,000
        </ArgonTypography>
      ),
      status: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          Not Available
        </ArgonTypography>
      ),
      Service_Efficiency: <Completion value={80} color="info" />,
      billing: ( 
        <ArgonTypography
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          View
        </ArgonTypography>
        
      ),

    },
    {
      Approved_Vendors: [Toyota, "Toyota Workshop"],
      budget: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          $2,300
        </ArgonTypography>
      ),
      status: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          Not Available
        </ArgonTypography>
      ),
      Service_Efficiency: <Completion value={100} color="success" />,
      billing: ( 
        <ArgonTypography
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          View
        </ArgonTypography>        
      ),

    },
  ],
};

export default projectsTableData;
