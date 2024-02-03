import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import CategoriesList from "examples/Lists/CategoriesList";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import typography from "assets/theme/base/typography";
import Slider from "layouts/dashboard/components/Slider";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import salesTableData from "layouts/dashboard/data/salesTableData";
import categoriesListData from "layouts/dashboard/data/categoriesListData";
import Forward30SharpIcon from "@mui/icons-material/Forward30Sharp";
import AllInclusiveSharpIcon from "@mui/icons-material/AllInclusiveSharp";
import EvStationIcon from "@mui/icons-material/EvStation";
import FlashOffSharpIcon from "@mui/icons-material/FlashOffSharp";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Default() {
  const [value, setValue] = useState([]);

  const [averagePerformance, setAveragePerformance] = useState([]);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await axios.get(`https://obdapi.vercel.app/api/getTrainData`);
        const data = response.data;
        if (data.message && data.data.length != 0) {
          // setValue(data.data[0].data);
          setValue(JSON.parse(data.data));
        }

        const getPerformanceResponse = await axios.get(`https://obdapi.vercel.app/api/loadcsv`);
        const getPerformanceData = getPerformanceResponse.data;

        if (data.message) {
          setAveragePerformance(getPerformanceData.averageData);
        }
        // console.log("datadata", data.data[0].data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchResponse();
  }, []);

  const { size } = typography;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Average Speed"
              count={`${
                averagePerformance.length != 0
                  ? `${averagePerformance["VEHICLE_SPEED ()"]} Speed`
                  : 0
              }`}
              icon={{ color: "info", component: <Forward30SharpIcon /> }}
              percentage={{ color: "success", count: "+55%", text: "since yesterday" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Average RPM"
              count={`${
                averagePerformance.length != 0 ? `${averagePerformance["ENGINE_RPM ()"]} RPM` : 0
              }`}
              icon={{ color: "error", component: <AllInclusiveSharpIcon /> }}
              percentage={{ color: "success", count: "+3%", text: "since last week" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Avg Fuel Consumption"
              count={`${
                averagePerformance.length != 0 ? `${averagePerformance["FUEL_TANK ()"]} Fuel` : 0
              }`}
              icon={{ color: "success", component: <EvStationIcon /> }}
              percentage={{ color: "error", count: "-2%", text: "since last quarter" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Avg Volt Generation"
              count={`${
                averagePerformance.length != 0
                  ? `${averagePerformance["CONTROL_MODULE_VOLTAGE ()"]} Volt`
                  : 0
              }`}
              icon={{ color: "warning", component: <FlashOffSharpIcon /> }}
              percentage={{ color: "success", count: "+5%", text: "than last month" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={7}>
            <GradientLineChart
              title="Engine Performance"
              description={
                <ArgonBox display="flex" alignItems="center">
                  <ArgonBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                    <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                  </ArgonBox>
                  <ArgonTypography variant="button" color="text" fontWeight="medium">
                    4% more{" "}
                    <ArgonTypography variant="button" color="text" fontWeight="regular">
                      in 2023
                    </ArgonTypography>
                  </ArgonTypography>
                </ArgonBox>
              }
              chart={gradientLineChartData}
            />
          </Grid>
          <Grid item xs={12} lg={5}>
            <Slider />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <SalesTable title="Fault Prognosis" rows={salesTableData} value={value} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CategoriesList title="Key Parameters" categories={categoriesListData} />
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
}

export default Default;
