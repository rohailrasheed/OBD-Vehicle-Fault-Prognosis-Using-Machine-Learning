import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";
import Dashboard from "layouts/dashboard";
import { Link } from 'react-router-dom';

import Alyan from "assets/images/Alyan (1).png";
import Aarish from "assets/images/Aarish (1).png";
import Rohail from "assets/images/Rohail (1).png";
import Hussain from "assets/images/Hussain (1).png";

function Author({ image, name, email }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={image} alt={name} size="sm" variant="rounded" />
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {name}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="secondary">
          {email}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

function Function({ car, model }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {car}
      </ArgonTypography>
      <ArgonTypography variant="caption" color="secondary">
        {model}
      </ArgonTypography>
    </ArgonBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "Drivers", align: "left" },
    { name: "Vehicle", align: "left" },
    { name: "status", align: "center" },
    { name: "Last_Maintenance", align: "center" },
    { name: "Performance", align: "center" },
  ],

  rows: [
    {
      Drivers: <Author image={Rohail} name="Rohail Rasheed" email="se20-049@ssuet.edu.pk" />,
      Vehicle: <Function car="Land Cruiser" model="v8" />,
      status: (
        <ArgonBadge variant="gradient" badgeContent="Fault Alert" color="warning" size="xs" container />
      ),
      Last_Maintenance: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          28/11/21
        </ArgonTypography>
      ),
      Performance: ( <Link to={"/dashboard"}>
        <ArgonTypography
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          View
        </ArgonTypography>
        </Link>
      ),
    },
    {
      Drivers: <Author image={Alyan} name="Alyan Asif" email="se20-045@ssuet.edu.pk" />,
      Vehicle: <Function car="Vezel" model="Hybrid X" />,
      status: (
        <ArgonBadge variant="gradient" badgeContent="No Alert" color="success" size="xs" container />
      ),
      Last_Maintenance: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          01/02/23
        </ArgonTypography>
      ),
      Performance: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          View
        </ArgonTypography>
      ),
    },
    {
      Drivers: <Author image={Aarish} name="Aarish Ahmed" email="se20-030@ssuet.edu.pk" />,
      Vehicle: <Function car="Fortuner" model="GR-S" />,
      status: (
        <ArgonBadge variant="gradient" badgeContent="Fault Alert" color="warning" size="xs" container />
      ),
      Last_Maintenance: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          19/01/19
        </ArgonTypography>
      ),
      Performance: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          View
        </ArgonTypography>
      ),
    },
    {
      Drivers: <Author image={Hussain} name="Hussain Ahmed" email="se20-011@ssuet.edu.pk" />,
      Vehicle: <Function car="Corolla" model="Altis" />,
      status: (
        <ArgonBadge variant="gradient" badgeContent="Fault Alert" color="warning" size="xs" container />
      ),
      Last_Maintenance: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/15
        </ArgonTypography>
      ),
      Performance: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          View
        </ArgonTypography>
      ),
    },
        
  ],
};

export default authorsTableData;
