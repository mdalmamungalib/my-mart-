"use client";
import React, { useState } from "react";
import data from "../../../../data.json";

const CustomDataTable = () => {
  const PAGE_SIZE = 10;
  const [currentPage, SetCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const CurrentDisplayData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data?.length / PAGE_SIZE);

  const itemStartIndex = startIndex + 1;
  const itemEndIndex = Math.min(
    startIndex + PAGE_SIZE,
    data.length
  );

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Recent Orders</h2>
      {/* Table */}
      <div className="p-8">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="checkbox-all-search"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Least Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {CurrentDisplayData.map((item, i) => {
                return (
                  <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item?.id}
                    </th>
                    <td className="px-6 py-4">
                      {item?.first_name}
                    </td>
                    <td className="px-6 py-4">{item?.last_name}</td>
                    <td className="px-6 py-4">{item?.email}</td>
                    <td className="px-6 py-4">{item?.gender}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <nav
            className="flex flex-wrap items-center justify-between p-4 flex-column md:flex-row"
            aria-label="Table navigation"
          >
            <span className="block w-full mb-4 text-sm font-normal text-gray-500 dark:text-gray-400 md:mb-0 md:inline md:w-auto">
              Showing{" "}
              <span className="font-semibold text-gray-50 dark:text-white">
                {itemStartIndex}-{itemEndIndex}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-50 dark:text-white">
                {data?.length}
              </span>
            </span>
            <ul className="inline-flex text-sm h-14 -s1pace-x-px rtl:space-x-reverse">
              <li>
                <button
                  onClick={() => SetCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center h-10 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </button>
              </li>
              {
  <>
    {/* First Button */}
    <li>
      <button
        onClick={() => SetCurrentPage(1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center h-10 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        First
      </button>
    </li>

    {/* Left Ellipsis if needed */}
    {currentPage > 4 && (
      <li>
        <span className="flex items-center justify-center h-10 px-3 text-gray-500">
          ...
        </span>
      </li>
    )}

    {/* Dynamic Pages */}
    {Array.from(
      { length: Math.min(5, totalPages) },
      (_, i) => {
        const startPage = Math.max(
          1,
          Math.min(currentPage - 2, totalPages - 4)
        );
        const page = startPage + i;

        return (
          <li key={page}>
            <button
              onClick={() => SetCurrentPage(page)}
              disabled={currentPage === page}
              className={
                currentPage === page
                  ? "flex items-center justify-center h-10 px-3 leading-tight text-gray-50 bg-blue-600 border border-blue-300 hover:bg-blue-800 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  : "flex items-center justify-center h-10 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              }
            >
              {page}
            </button>
          </li>
        );
      }
    )}

    {/* Right Ellipsis if needed */}
    {currentPage < totalPages - 3 && (
      <li>
        <span className="flex items-center justify-center h-10 px-3 text-gray-500">
          ...
        </span>
      </li>
    )}

    {/* Last Button */}
    <li>
      <button
        onClick={() => SetCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center h-10 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Last
      </button>
    </li>
  </>
}

             
              <li>
                <button
                  onClick={() => SetCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center justify-center h-10 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CustomDataTable;
