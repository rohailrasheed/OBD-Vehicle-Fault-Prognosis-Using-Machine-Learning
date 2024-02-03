import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import Icon from "@mui/material/Icon";

import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

import {
  useArgonController,
  setOpenConfigurator,
  setDarkSidenav,
  setDarkMode,
} from "context";

function Configurator() {
  const [controller, dispatch] = useArgonController();
  const { openConfigurator, darkMode } = controller;

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handleDarkMode = () => {
    setDarkSidenav(dispatch, !darkMode);
    setDarkMode(dispatch, !darkMode);
  };

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <ArgonBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <ArgonBox>
          <ArgonTypography variant="h5">OBD Configurator</ArgonTypography>
        </ArgonBox>

        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { dark, white } }) => ({
            fontSize: `${size.md} !important`,
            fontWeight: `${fontWeightBold} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: darkMode ? white.main : dark.main,
            strokeWidth: "2px",
            cursor: "pointer",
            mt: 2,
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </ArgonBox>
      <Divider />

      <ArgonBox pt={1.25} pb={3} px={3}>
        <ArgonBox display="flex" justifyContent="space-between" lineHeight={1}>
          <ArgonTypography variant="h6">Light / Dark</ArgonTypography>
          <Switch checked={darkMode} onChange={handleDarkMode} />
        </ArgonBox>
      </ArgonBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
