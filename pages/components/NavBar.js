import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";

export const NavBar = () => {
  const router = useRouter();

  const handleChats = () => {
    router.push("/ChattingPage");
  };

  const handleProfile = () => {
    router.push("/components/profilePage");
  };

  return (
    <header className="w-full bg-white p-2 mt-2 mb-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <nav className="mb-4 md:mb-0">
          <a href="#" className="mx-2 font-semibold">
            Home
          </a>
          <a href="#" className="mx-2 font-semibold">
            About
          </a>
          <a href="#" className="mx-2 font-semibold">
            Pricing
          </a>
          <a href="#" className="mx-2 font-semibold">
            Team
          </a>
        </nav>
        <div className=" h-10 ">
          <img src="/logo.png" className="h-full " />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center relative">
            <input
              type="text"
              className="flex-grow rounded-full pl-10 py-1 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black"
              placeholder="Search"
            />
            <IoIosSearch className="absolute m-2 font-medium" />
          </div>
          <CiBellOn className="m-2  w-8 h-8 hover:cursor-pointer" />
          <GoMail
            className="m-2 w-7 h-7  hover:cursor-pointer"
            onClick={handleChats}
          />
          <CgProfile
            className="m-2 w-7 h-7  hover:cursor-pointer"
            onClick={handleProfile}
          />
        </div>
      </div>
    </header>
  );
};
