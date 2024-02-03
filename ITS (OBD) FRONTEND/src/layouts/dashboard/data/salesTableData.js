import Ignition from "assets/images/icons/faults/Ignition.png";
import AirBag from "assets/images/icons/faults/AirBag.png";
import ABS from "assets/images/icons/faults/ABS.svg.png";
import Cooling from "assets/images/icons/faults/Cooling.png";

const salesTableData = [
  {
    Fault: [Ignition, "Ignition System"],
    Type: "NO GO Item",
    Maintenance_Cost: "$30,900",
    Fault_Prediction: "29.9%",
  },
  {
    Fault: [ABS, "ABS System"],
    Type: "GO Item",
    Maintenance_Cost: "$25,750",
    Fault_Prediction: "65.5%",
  },
  {
    Fault: [AirBag, "Air Bags Faults"],
    Type: "GO Item",
    Maintenance_Cost: "$20,90",
    Fault_Prediction: "30%",
  },
  {
    Fault: [Cooling, "Cooling System"],
    Type: "NO GO Item",
    Maintenance_Cost: "$10,000",
    Fault_Prediction: "98.8%",
  },
];

export default salesTableData;
