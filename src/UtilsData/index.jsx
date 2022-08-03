import { MdColorLens } from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineBorderColor } from "react-icons/md";

export const categoryData = [
  {
    cardIcon: <MdColorLens size={40} color="white" />,
    cardTitle: "Design",
    cardTask: "5 task",
    cardBg: "#ff4674",
  },
  {
    cardIcon: <GiBookmarklet size={40} color="white" />,
    cardTitle: "Prototyping",
    cardTask: "2 task",
    cardBg: "#099efe",
  },
  {
    cardIcon: <IoIosPeople size={40} color="white" />,
    cardTitle: "Meeting",
    cardTask: "1 task",
    cardBg: "#ffbd35",
  },
  {
    cardIcon: <MdOutlineBorderColor size={40} color="white" />,
    cardTitle: "Learning",
    cardTask: "2 task",
    cardBg: "#5455ba",
  },
];
