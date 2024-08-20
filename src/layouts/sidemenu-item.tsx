import { Home, Package } from "lucide-react";
// import { IconType } from "react-icons";
import { GoGraph, GoDeviceDesktop, GoAlert } from "react-icons/go";
import { ReactNode } from "react";

interface Ielement {
  id: number;
  name: string;
  link: string;
  icon: ReactNode;
}

const navElements: Ielement[] = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard",
    icon: <GoGraph />,
  },
  {
    id: 2,
    name: "Incident",
    link: "/incidents",
    icon: <GoAlert />,
  },
  {
    id: 3,
    name: "Application",
    link: "/application",
    icon: <GoDeviceDesktop />,
  },
];

export default navElements;
