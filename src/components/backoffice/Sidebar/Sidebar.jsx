import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#122136] space-y-6 w-60 h-screen 
    text-teal-50 p-3 fixed left-0 top-0">
      <Link className="mb-6" href={"/"}>Logo</Link>
      <div className="flex flex-col space-y-3">
        <Link href={"/"}>Dashboard</Link>
        <Link href={"/"}>Catalogue</Link>
        <Link href={"/"}>Customers</Link>
        <Link href={"/"}>Markets</Link>
        <Link href={"/"}>Sellers</Link>
        <Link href={"/"}>Orders</Link>
        <Link href={"/"}>Staff</Link>
        <Link href={"/"}>Settings</Link>
        <Link href={"/"}>Online Store</Link>
      </div>
    </div>
  );
};

export default Sidebar;
