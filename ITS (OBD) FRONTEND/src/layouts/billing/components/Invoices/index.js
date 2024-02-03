import Card from "@mui/material/Card";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <ArgonTypography variant="h6" fontWeight="medium">
          Invoices
        </ArgonTypography>
        <ArgonButton variant="outlined" color="info" size="small">
          View All
        </ArgonButton>
      </ArgonBox>
      <ArgonBox p={2}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="March, 01, 2023" id="#MS-415646" price="$180" />
          <Invoice date="February, 10, 2023" id="#RV-126749" price="$250" />
          <Invoice date="April, 05, 2023" id="#QW-103578" price="$120" />
          <Invoice date="June, 25, 2022" id="#MS-415646" price="$180" />
          <Invoice date="March, 01, 2022" id="#AR-803481" price="$300" noGutter />
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default Invoices;
