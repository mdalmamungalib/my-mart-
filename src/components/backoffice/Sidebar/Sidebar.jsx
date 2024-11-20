"use client"
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "../../../app/Logo.svg";
import {
  LayoutDashboard,
  Slack,
  Users2,
  Store,
  Gem,
  Compass,
  User,
  Settings,
  Radar,
  LogOut
} from "lucide-react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname()
  const sidebarLinks = [
    {
      title: "Dashboard",
      link: "/dashboard",
      icons: LayoutDashboard,
    },
    {
      title: "Catalogue",
      link: "/dashboard/catalogue",
      icons: Slack,
    },
    {
      title: "Customers",
      link: "/dashboard/customers",
      icons: Users2,
    },
    {
      title: "Markets",
      link: "/dashboard/markets",
      icons: Store,
    },
    {
      title: "Sellers",
      link: "/dashboard/sellers",
      icons: Gem,
    },
    {
      title: "Orders",
      link: "/dashboard/orders",
      icons: Compass,
    },
    {
      title: "Our Staff",
      link: "/dashboard/ourstaff",
      icons: Users2,
    },
    {
      title: "Settings",
      link: "/dashboard/settings",
      icons: Settings,
    },
    
    {
      title: "Online Store",
      link: "/dashboard/onlinestore",
      icons: Radar,
    },
  ];

  return (
    <div
      className="dark:bg-[#122136]  bg-slate-100 space-y-6 w-60 h-full 
    dark:text-teal-50 text-slate-800 
     pt-0 fixed left-0 top-0 "
    >
      <Link
        className="flex items-center justify-center mb-0"
        href={"/"}
      >
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="Logo"
          className="w-40 h-32 -mt-8"
        />
      </Link>
      <div className="flex flex-col space-y-3 ">
        {sidebarLinks.map((item, index) => {
          const Icon = item?.icons
          return (
            <Link
              key={index}
              href={item?.link}
              className={item?.link === pathname ? "flex items-center px-6 py-2 space-x-3 border-l-4 border-green-600 rounded text-[#04bd7f]" : "flex items-center px-6 py-2 space-x-3"}
            >
              {" "}
              <Icon />
              <span>{item?.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
        <button className="flex items-center justify-center px-14 py-3 bg-[#04bd7f] rounded-xl space-x-2">
          <LogOut/>
          <span>Logout</span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
