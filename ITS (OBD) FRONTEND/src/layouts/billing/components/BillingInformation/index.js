import Card from "@mui/material/Card";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Billing Information
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={1} pb={2} px={2}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            Car_Name="Land Cruiser"
            Owner_Name ="Rohail Rasheed"
            email="se20-049@ssuet.edu.pk"
            Maintenance="Ignition System"
          />
          <Bill
            Car_Name="Fotuner"
            Owner_Name="Aarish Ahmed"
            email="se20-030@ssuet.edu.pk"
            Maintenance="ABS System"
          />
          <Bill
            Car_Name="Vezel"
            Owner_Name="Alyan Asif"
            email="se20-045@ssuet.edu.pk"
            Maintenance="Fuel Tank System"
            noGutter
          />
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default BillingInformation;
