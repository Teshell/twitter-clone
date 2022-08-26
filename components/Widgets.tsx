import React from "react";

import { SearchIcon } from "@heroicons/react/outline";

const Widgets = () => {
  return (
    <div className="hidden col-span-2 mt-2 space-y-2 mx-2 lg:inline">
      {/* Searchbox */}
      <div className="flex items-center space-x-2 bg-gray-100 rounded-full mt-2 p-3">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 outline-none bg-transparent"
        />
      </div>

      <div className="w-full h-[500px] bg-gray-100 rounded-2xl">
        <h1 className="p-4 text-lg text-twitter">Widgets</h1>
      </div>
    </div>
  );
};

export default Widgets;
