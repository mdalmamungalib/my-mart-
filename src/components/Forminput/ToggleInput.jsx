import React from "react";

const ToggleInput = ({ name, label, trueTitle, falseTitle, register }) => {
  return (
    <div className="w-full">
      <h2 className="mb-2 text-sm font-medium leading-6">
        {label}
      </h2>
      <label class="inline-flex items-center me-5 cursor-pointer">
        <input
          {...register(`${name}`)}
          type="checkbox"
          className="sr-only peer"
        />
        <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-lime-300 dark:peer-focus:ring-lime-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-lime-600"></div>
        <span className="ml-3 text-sm font-medium ">
          {name ? `${trueTitle}` : `${falseTitle}`}
        </span>
      </label>
    </div>
  );
};

export default ToggleInput;
