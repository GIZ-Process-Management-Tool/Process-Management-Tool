import React from "react";
import * as FaIcons from "react-icons/fa";

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
    pathAd: "/admin",
  },
  {
    title: "Orders",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
    pathAd: "/admin/orders",
  },
  {
    title: "Process Tracking",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
    pathAd: "/admin/progresstracking",
  },
  {
    title: "Expenses",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Calendar",
    path: "/support",
    icon: <FaIcons.FaCalendarAlt />,
    cName: "nav-text",
  },
];
