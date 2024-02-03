import Grid from "@mui/material/Grid";
import ArgonBox from "components/ArgonBox";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

import BaseLayout from "layouts/billing/components/BaseLayout";
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";
import ArgonTypography from "components/ArgonTypography";

function Billing() {
  return (
    <BaseLayout stickyNavbar>
      <ArgonTypography variant="h4" sx={{textAlign:"center"}}>
        Daewoo Motors
      </ArgonTypography>
      <ArgonBox mt={4}>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  <MasterCard number={4562112245947852} holder="Daewoo Motors" expires="11/26" />
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="Cash"
                    description="Immediate Payment"
                    value="+$2000"
                  />
                </Grid>
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Invoices />
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </ArgonBox>
      </ArgonBox>
    </BaseLayout>
  );
}

export default Billing;
