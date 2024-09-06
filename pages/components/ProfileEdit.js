import React from "react";
import NavBar from "./NavBar";
import Image from "next/image";
import { CiLocationOn, CiStar } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import Footer from "./Footer";
import CommentsSection from "./CommentsSection";
import { FaStar } from "react-icons/fa6";
const ProfileEdit = () => {
  return (
    <div className="bg-white min-h-screen text-black">
      <NavBar />
      <div className="flex flex-col sm:flex-row sm:justify-center items-center w-screen gap-10 mb-20">
        <div className="">
          <Image
            src="/adam.png"
            alt="Profile Picture"
            width={50}
            height={50}
            className="rounded-full w-[7rem]"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="">Ratings</h2>
          <div className="flex gap-1 items-center">
            <FaStar color="#F7D323" />
            <p>
              4.9 <span>(156)</span>
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-5 w-2/5 mb-20">
          <input
            placeholder="name"
            className="p-2 px-4 w-full  outline-none bg-slate-200 rounded-md"
          />
          <input
            placeholder="occupation"
            className="p-2 px-4 w-full outline-none bg-slate-200 rounded-md"
          />
          <input
            placeholder="place"
            className="p-2 px-4 w-full outline-none bg-slate-200 rounded-md"
          />
          <input
            placeholder="description"
            className="p-2 px-4 w-full outline-none bg-slate-200 rounded-md"
          />
          <input
            placeholder="hashtags"
            className="p-2 px-4 w-full outline-none bg-slate-200 rounded-md"
          />

          <div className="flex justify-center h-full">
            <div className="flex gap-4 h-full">
              <button className="">Basic</button>
              <div className="w-[1px] h-[30px] bg-slate-500"></div>
              <button className="">Standard</button>
              <div className="w-[1px] h-[30px] bg-slate-500"></div>
              <button className=" bg-blue-500 rounded-md p-1 px-2 text-white">
                Premium
              </button>
            </div>
          </div>

          <input
            placeholder="<duration>"
            className="p-2 px-4 w-full outline-none bg-slate-200 rounded-md"
          />
          <input
            placeholder="<rate>"
            className="p-2 px-4 w-full outline-none bg-slate-200 rounded-md"
          />
          <input
            placeholder="<feature>"
            className="p-2 px-4 w-full outline-none bg-slate-200 rounded-md"
          />
          <div className="flex justify-center">
            <button className="p-1 px-2 shadow-lg rounded-xl border border-slate-300">
              <span className="text-blue-600">+</span>add
            </button>
          </div>
        </div>
      </div>


      {/* Statistics */}
      <div className="flex p-5 px-20 justify-evenly bg-blue-500">
        <img src="/assets/stats1.png" className="w-44"></img>
        <img src="/assets/stats2.png" className="w-44"></img>
        <img src="/assets/stats3.png" className="w-44"></img>
        <img src="/assets/stats4.png" className="w-44"></img>
        <img src="/assets/stats5.png" className="w-44"></img>

      </div>

      <Footer />
    </div>
  );
};

export default ProfileEdit;
