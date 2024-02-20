import Card from "@mui/material/Card";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Table from "examples/Tables/Table";
import Grid from "@mui/material/Grid";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import { useState } from "react";
import axios from "axios";

function OBDEntries() {
  const [valuesEntries, setValueEntries] = useState({
    engineRunTime: "",
    engineRpm: "",
    vehicleSpeed: "",
    throttle: "",
    engineLoad: "",
    coolantTemp: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValueEntries((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (Object.values(valuesEntries).every((item) => item !== "")) {
      const res = await axios.post(`https://obdapi.vercel.app/api/postFormValues`, {
        values: valuesEntries,
      });

      const data = res.data;

      if (data.status) {
        setValueEntries({
          engineRunTime: "",
          engineRpm: "",
          vehicleSpeed: "",
          throttle: "",
          engineLoad: "",
          coolantTemp: "",
        });
        alert(`${data.message}`);
      }
    } else {
      alert("Values Cannot Be Empty");
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card>
            <ArgonBox
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
              alignItems="center"
              p={3}
            >
              <ArgonTypography pb={5} variant="h4" fontWeight="medium">
                OBD Entries
              </ArgonTypography>
              <ArgonBox component="form" role="form">
                <Grid
                  rowGap={4}
                  container
                  style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
                >
                  <Grid item xs={6} md={4}>
                    <ArgonBox style={{ width: "350px" }}>
                      <ArgonInput
                        label="Engine Runtime"
                        type="number"
                        name="engineRunTime"
                        value={valuesEntries.engineRunTime}
                        onChange={handleChange}
                        placeholder="Engine Runtime"
                      />
                    </ArgonBox>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <ArgonBox style={{ width: "350px" }}>
                      <ArgonInput
                        onChange={handleChange}
                        name="engineRpm"
                        value={valuesEntries.engineRpm}
                        type="number"
                        placeholder="Engine RPM"
                      />
                    </ArgonBox>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <ArgonBox style={{ width: "350px" }}>
                      <ArgonInput
                        onChange={handleChange}
                        name="vehicleSpeed"
                        value={valuesEntries.vehicleSpeed}
                        type="number"
                        placeholder="Vehicle Speed"
                      />
                    </ArgonBox>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <ArgonBox style={{ width: "350px" }}>
                      <ArgonInput
                        onChange={handleChange}
                        name="throttle"
                        type="number"
                        value={valuesEntries.throttle}
                        placeholder="Throttle"
                      />
                    </ArgonBox>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <ArgonBox style={{ width: "350px" }}>
                      <ArgonInput
                        onChange={handleChange}
                        name="engineLoad"
                        value={valuesEntries.engineLoad}
                        type="number"
                        placeholder="Engine Load"
                      />
                    </ArgonBox>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <ArgonBox style={{ width: "350px" }}>
                      <ArgonInput
                        onChange={handleChange}
                        name="coolantTemp"
                        value={valuesEntries.coolantTemp}
                        type="number"
                        placeholder="Coolant Temperature"
                      />
                    </ArgonBox>
                  </Grid>
                  <Grid item xs={6} md={1}>
                    <ArgonButton onClick={handleSubmit} variant="gradient" color="dark">
                      Submit
                    </ArgonButton>
                  </Grid>
                </Grid>
              </ArgonBox>
            </ArgonBox>
            <ArgonBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            ></ArgonBox>
          </Card>
        </ArgonBox>
      </ArgonBox>
    </DashboardLayout>
  );
}

export default OBDEntries;
