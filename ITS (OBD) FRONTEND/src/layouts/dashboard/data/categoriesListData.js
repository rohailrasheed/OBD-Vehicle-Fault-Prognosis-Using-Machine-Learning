import ArgonTypography from "components/ArgonTypography";
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import PersonPinRoundedIcon from '@mui/icons-material/PersonPinRounded';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';

const categoriesListData = [
  {
    color: "dark",
    icon: <PersonPinRoundedIcon style={{ fontSize: "12px" }} />,
    name: "Car Owner",
    description: (
      <>
        Hussain Ahmed,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          Demo
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-tag" style={{ fontSize: "12px" }} />,
    name: "Car ID",
    description: (
      <>
        1000,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          Demo
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <ElectricCarIcon style={{ fontSize: "12px" }} />,
    name: "Car Make",
    description: (
      <>
        Toyota,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          2020
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <FormatIndentIncreaseIcon style={{ fontSize: "12px" }} />,
    name: "Car Type",
    description: (
      <>
        SUV,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          Hybrid
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
];

export default categoriesListData;
