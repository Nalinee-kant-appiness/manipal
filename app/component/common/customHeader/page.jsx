"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CustomNavBar = () => {
  const [searchData, setSearchData] = useState("");

  const storeSearchData = (e) => {
    const { value } = e.target;
    setSearchData(value);
  };

  return (
    <div className="w-full  bg-white fixed">
      <div className=" flex flex-col ">
        <div className="bg-gradient-to-r from-blue-600 to-green-600	 w-full h-7"></div>

        <div className="flex items-center justify-between border-b-2 border-gray-200 pl-14 pr-14">
          <Image
            src="https://www.manipalcommunityconnect.in/images/logo.svg"
            width={150}
            height={42}
            alt="manipal nav logo"
          />
          <div className="flex gap-2">
            <div className="flex items-center border border-gray-400 rounded-full w-72 p-2">
              <img
                src="/component/hompage/search-svgrepo-com.svg"
                alt="Search Icon"
                className="mr-2 ml-2"
                width={15}
                height={15}
                
              />
              <input
                value={searchData}
                onChange={storeSearchData}
                className="w-full text-black focus:outline-none"
                placeholder="Search"
              />
            </div>
            <Button className="text-white rounded-xl text-base font-semibold bg-gradient-to-r from-blue-600 to-green-600">
              Create A Post
            </Button>
            <Button className="text-blue-700 rounded-xl text-base bg-white border border-blue-700">
              Sign Up/Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomNavBar;
