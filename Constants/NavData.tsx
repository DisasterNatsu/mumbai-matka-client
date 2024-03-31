import {
  BadgeIndianRupee,
  ArrowLeftSquare,
  Clover,
  BarChart3,
  IndianRupee,
} from "lucide-react";

export const NavData: NavDataType[] = [
  {
    title: "Tips",
    path: "/tips",
    icon: <BadgeIndianRupee />,
  },
  {
    title: "Patti Tips",
    path: "/patti-tips",
    icon: <IndianRupee />,
  },
  {
    title: "Old Results",
    path: "/old-results",
    icon: <ArrowLeftSquare />,
  },
  {
    title: "Lucky Number",
    path: "/lucky-number",
    icon: <Clover />,
  },
  {
    title: "Patti Chart",
    path: "/patti-chart",
    icon: <BarChart3 />,
  },
];
