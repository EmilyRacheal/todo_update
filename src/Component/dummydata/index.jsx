import { FiFramer } from "react-icons/fi";
import { RiWirelessChargingFill } from "react-icons/ri";
import { SiVisualstudiocode } from "react-icons/si";

export const todayData = [
  {
    todayCategory: "Sketching",
    todayTrack: "2 completed",
    todayNumber: "4",
    Icon: <FiFramer size={20} color="white" />,
    color: "#51d7bc",
    numColor: "#51d7bc",
    numBg: "#ecfefb",
    numBorder: "1px solid #51d7bc",
  },

  {
    todayCategory: "Wireframe",
    todayTrack: "1 Completed",
    todayNumber: "3",
    Icon: <RiWirelessChargingFill size={20} color="white" />,
    color: "#7775d1",
    numColor: "#7775d1",
    numBg: "#dcdbfe",
    numBorder: "1px solid #7775d1",
  },
  {
    todayCategory: "Visual Design",
    todayTrack: "2 Completed",
    todayNumber: "5",
    Icon: <SiVisualstudiocode size={20} color="white" />,
    color: "#fc6817",
    numColor: "#fc6817",
    numBg: "#fef2ec",
    numBorder: "1px solid #fc6817",
  },
];
