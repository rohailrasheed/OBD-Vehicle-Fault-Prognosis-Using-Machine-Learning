import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import SignIn from "layouts/authentication/sign-in";
import ArgonBox from "components/ArgonBox";
import ElectricCarSharpIcon from '@mui/icons-material/ElectricCarSharp';

const routes = [
  {
    type: "route",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  {
    type: "route",
    name: "Drives",
    key: "Drives",
    route: "/drives",
    icon: (
      <ElectricCarSharpIcon color="error"/>
    ),
    component: <Tables />,
  },
  {
    type: "route",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card" />,
    component: <Billing />,
  },
  {
    type: "route",
    name: "Maintenance",
    key: "Maintenance",
    route: "/maintenance",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-app" />,
    component: <VirtualReality />,
  },
  {
    type: "route",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04" />
    ),
    component: <SignIn />,
  },
];

export default routes;
