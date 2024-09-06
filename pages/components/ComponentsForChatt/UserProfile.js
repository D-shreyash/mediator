// components/UserProfile.js
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaRegBellSlash } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

const UserProfile = ({ name, avatar, status }) => {
  return (
    <div className="p-4 flex flex-col items-center border-b border-gray-200">
      <img
        src={avatar}
        alt={name}
        className="w-[60%] h-[60%] rounded-full mr-4 "
      />
      <div className="p-2 w-full">
        <p className="text-center font-semibold uppercase text-xl">{name}</p>
        <p className="text-[#27B24E] text-center">{status}</p>

        <div className="flex mt-2 justify-between pt-5">
          <div className="flex flex-col items-center justify-center">
            <button className="rounded-full text-sm mr-2 bg-[#E9F5FF] p-2">
              <FaRegUser className="w-7 h-7 text-gray-800" />
            </button>
            <p className="text-[#187BCD]"> Profile</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button className="rounded-full text-sm mr-2 bg-[#E9F5FF] p-2">
              <FaRegBellSlash className="w-7 h-7 text-gray-800" />
            </button>
            <p className="text-[#187BCD]">Mute</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button className="rounded-full text-sm  bg-[#E9F5FF] p-2">
              <IoMdSearch className="w-7 h-7 text-gray-900" />
            </button>
            <p className="text-[#187BCD]">Search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
