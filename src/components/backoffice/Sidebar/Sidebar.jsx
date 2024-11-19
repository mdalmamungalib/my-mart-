import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "../../../app/Logo.svg";
import { LayoutDashboard, Slack, Users2} from "lucide-react";


const Sidebar = () => {
  return (
    <div
      className="dark:bg-[#122136]  bg-slate-100 space-y-6 w-60 h-full 
    dark:text-teal-50 text-slate-800 
     pt-0 fixed left-0 top-0 "
    >
      <Link className="flex items-center justify-center mb-0" href={"/"}>
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="Logo"
          className="w-40 -mt-8"
        />
      </Link>
      <div className="flex flex-col space-y-3 ">
        <Link href={"/"} className="flex items-center px-6 py-2 space-x-3 border-l-4 border-green-600 rounded hover:text-[#04bd7f]">
          {" "}
          <LayoutDashboard />
          <span>Dashboard</span>
        </Link>
        <Link href={"/"} className="flex items-center px-6 py-2 space-x-3 border-l-4 border-green-600 rounded hover:text-[#04bd7f]">
          {" "}
          <Slack />
          <span>Catalogue</span>
        </Link>
        <Link href={"/"} className="flex items-center px-6 py-2 space-x-3 border-l-4 border-green-600 rounded hover:text-[#04bd7f]">
          {" "}
          <Users2 />
          <span>Customers</span>
        </Link>
        <Link href={"/"} className="flex items-center px-6 py-2 space-x-3 border-l-4 border-green-600 rounded">
          {" "}
          <LayoutDashboard />
          <span>Markets</span>
        </Link>
        <Link href={"/"} className="flex items-center px-6 py-2 space-x-3 border-l-4 border-green-600 rounded">
          {" "}
          <LayoutDashboard />
          <span>Sellers</span>
        </Link>
        <Link href={"/"} className="flex items-center px-6 py-2 space-x-3 border-l-4 border-green-600 rounded">
          {" "}
          <LayoutDashboard />
          <span>Orders</span>
        </Link>
        <Link href={"/"} className="flex items-center px-6 py-2 space-x-3 border-l-4 border-green-600 rounded">
          {" "}
          <LayoutDashboard />
          <span>Staff</span>
        </Link>
        <Link href={"/"} className="flex items-center px-6 py-2 space-x-3 border-l-4 border-green-600 rounded">
          {" "}
          <LayoutDashboard />
          <span>Settings</span>
        </Link>
        <Link href={"/"} className="flex items-center px-6 py-2 space-x-3 border-l-4 border-green-600 rounded">
          {" "}
          <LayoutDashboard />
          <span>Online Store</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
