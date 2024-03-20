import {
  BadgeIndianRupee,
  ArrowLeftSquare,
  Clover,
  BarChart3,
  BookA,
  Lock,
} from "lucide-react";

export const NavData: NavDataType[] = [
  {
    title: "Tips",
    path: "/tips",
    icon: <BadgeIndianRupee />,
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
  {
    title: "About",
    path: "/about",
    icon: <BookA />,
  },
  {
    title: "Privacy",
    path: "/privacy",
    icon: <Lock />,
  },
];
