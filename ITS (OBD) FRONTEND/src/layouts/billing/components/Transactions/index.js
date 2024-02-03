import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import Transaction from "layouts/billing/components/Transaction";

function Transactions() {
  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Vendor Transaction&apos;s
        </ArgonTypography>
        <ArgonBox display="flex" alignItems="flex-start">
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            28 Feb 2020 - 11 April 2023
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox pt={3} pb={2} px={2}>
        <ArgonBox mb={2}>
          <ArgonTypography
            variant="caption"
            color="text"
            fontWeight="bold"
            textTransform="uppercase"
          >
            newest
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="error"
            icon="arrow_downward"
            name="Easy Paisa"
            description="27 March 2023, at 12:30 PM"
            value="- $ 2,500"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Jazz Cash"
            description="11 April 2023, at 04:30 AM"
            value="+ $ 25,00"
          />
        </ArgonBox>
        <ArgonBox mt={1} mb={2}>
          <ArgonTypography
            variant="caption"
            color="text"
            fontWeight="bold"
            textTransform="uppercase"
          >
            Previous Transactions
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Barwaqt"
            description="11 Jan 2022, at 07:45 PM"
            value="+ $ 12"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Binance"
            description="26 December 2020, at 12:30 PM"
            value="+ $ 1,000"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Pay TM"
            description="26 March 2020, at 08:30 AM"
            value="+ $ 22,00"
          />
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default Transactions;
