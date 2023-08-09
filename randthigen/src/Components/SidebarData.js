import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LockIcon from "@material-ui/icons/Lock";
import GetAppIcon from "@material-ui/icons/GetApp";
export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Sign Up",
    icon: <AccountBoxIcon />,
    link: "/signup",
  },
  {
    title: "Login",
    icon: <LockIcon />,
    link: "/login",
  },
  {
    title: "Download (JSON Format)",
    icon: <GetAppIcon />,
    link: "/download",
  },
];