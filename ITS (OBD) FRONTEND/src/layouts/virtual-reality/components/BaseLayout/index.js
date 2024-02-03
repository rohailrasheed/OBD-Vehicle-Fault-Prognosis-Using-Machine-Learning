import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Sidenav from "examples/Sidenav";
import { useArgonController, setMiniSidenav, setLayout, setDarkSidenav } from "context";
import routes from "routes";

import {
  baseLayout,
  baseLayoutBackground,
  baseLayoutContent,
} from "layouts/virtual-reality/components/BaseLayout/styles";

import brand from "assets/images/favicon.png";
import brandDark from "assets/images/favicon.png";

function BaseLayout({ children }) {
  const [controller, dispatch] = useArgonController();
  const { miniSidenav, sidenavColor, darkSidenav, darkMode } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the document layout to VR for the VR view
  useEffect(() => {
    setLayout(dispatch, "vr");
    setDarkSidenav(dispatch, darkMode);
  }, [pathname]);

  return (
    <ArgonBox sx={baseLayout}>
      <ArgonBox bgColor={darkMode ? "transparent" : "secondary"} borderRadius="xl" mt={3} mx={3}>
        <DashboardNavbar />
      </ArgonBox>
      <ArgonBox sx={baseLayoutBackground}>
        <ArgonBox display={{ xs: "block", lg: "none" }}>
          <Sidenav
            color={sidenavColor}
            brand={darkSidenav || darkMode ? brand : brandDark}
            brandName="On Board Diagnostics"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        </ArgonBox>
        <ArgonBox sx={baseLayoutContent}>
          <ArgonBox display={{ xs: "none", lg: "block" }}>
            <Sidenav
              color={sidenavColor}
              brand={darkSidenav || darkMode ? brand : brandDark}
              brandName="On Board Diagnostics"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
          </ArgonBox>
          <DashboardLayout bgColor="transparent">{children}</DashboardLayout>
        </ArgonBox>
      </ArgonBox>
    </ArgonBox>
  );
}

// Typechecking props for the BaseLayout
BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
