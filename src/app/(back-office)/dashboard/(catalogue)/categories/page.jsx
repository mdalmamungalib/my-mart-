import Heading from "components/backoffice/Heading/Heading";
import PageHeader from "components/backoffice/PageHeader/PageHeader";
import { Plus, Search, Trash2, Download } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Categories"}
        href={"/dashboard/categories/new"}
        LinkTitle={"Add Category"}
      />
      {/* Table */}
      {/* Export || Bulk Delete || Search */}
      <div className="flex items-center justify-between gap-8 px-12 py-6 rounded-lg dark:bg-slate-700 bg-slate-100">
        {/* export */}
        <button className="text-white bg-slate-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center gap-2 border border-lime-500">
          <Download />
          <span>Export</span>
        </button>
        {/* search */}
        <div className="flex-grow ">
          <label for="table-search" className="sr-only">
            Search
          </label>
          <div className="relative ">
            <div className="absolute inset-y-0 flex items-center pointer-events-none rtl:inset-r-0 start-0 ps-3">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="table-search"
              className="block w-full pt-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        {/* delete */}
        <button className="flex items-center justify-center gap-2 text-white bg-red-600 rounded-lg text-sm px-5 py-2.5">
          <Trash2 />
          <span>Bulk Delete</span>
        </button>
      </div>
      <h1>Welcome to categories page</h1>
    </div>
  );
};

export default page;
