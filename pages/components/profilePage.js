import Image from "next/image";
import React, { useState } from "react";
import PricingOption from "./pricingOption";
import { IoIosSearch } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import HorizontalScrollSection from "../components/HorizontalScrollSection";
import CommentsSection from "../components/CommentsSection";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import NavBar from "./NavBar";

const pricingPlans = [
  {
    title: "Basic",
    delivery: "14 days delivery",
    features: ["Mention in story", "Promo video", "Post"],
    isActive: true, // Initially set the Basic plan to be active
  },
  {
    title: "Standard",
    delivery: "7 days delivery",
    features: ["Mention in story", "Promo video", "Post"],
  },
  {
    title: "Premium",
    delivery: "3 days delivery",
    features: ["Mention in story", "Promo video", "Post"],
  },
];

const ProfilePage = () => {
  // const [activePlan, setActivePlan] = useState(pricingPlans[0]);
  const [activePlan, setActivePlan] = useState("Basic");

  const handleButtonClick = (plan) => {
    setActivePlan(plan);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <NavBar />
      
      <main className="container mx-auto p-4 bg-white mt-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          <div className="flex-shrink-0 w-40 h-40">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={150}
              height={100}
              className="rounded-full w-full h-full"
            />
          </div>
          <div className="mt-4 lg:mt-0 text-center lg:text-left lg:w-[50%]">
            <h2 className="text-3xl font-bold">John Paul</h2>
            <div className="flex">
              <p className="text-gray-600 p-2">Food Vlogger</p>
              <p className="text-gray-600 p-2 flex items-center ">
                <CiLocationOn className="pr-1" />
                Kollam
              </p>
              <p className="text-gray-600 p-2 flex items-center">
                <GrGroup className="pr-1" />
                5.6k
              </p>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full">
              Contact me
            </button>
            <p className="mt-4">
              John is not just a food vlogger; he is a culinary storyteller
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="flex">
              <button
                className={`mt-4 px-4 py-2 mr-2 ${
                  activePlan === "Basic"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                } rounded`}
                onClick={() => handleButtonClick("Basic")}
              >
                Basic
              </button>
              <button
                className={`mt-4 px-4 py-2 mr-2 ${
                  activePlan === "Standard"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                } rounded`}
                onClick={() => handleButtonClick("Standard")}
              >
                Standard
              </button>
              <button
                className={`mt-4 px-4 py-2 ${
                  activePlan === "Premium"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                } rounded`}
                onClick={() => handleButtonClick("Premium")}
              >
                Premium
              </button>
            </div>

            {pricingPlans
              .filter((plan) => plan.title === activePlan)
              .map((plan) => (
                <PricingOption
                  key={plan.title}
                  plan={plan}
                  isActive={plan.title === activePlan.title}
                />
              ))}
          </div>
        </div>

        <HorizontalScrollSection />
        <div>
          <h1 className="text-3xl font-bold  mt-8">Reviews</h1>
          <CommentsSection />
        </div>
      </main>
      <footer className="w-full text-white mt-8">
        <div className="wave-container bg-blue-600">
          <svg
            className="wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,181.3C672,181,768,139,864,122.7C960,107,1056,117,1152,122.7C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <div className="container mx-auto text-center grid grid-cols-1 sm:grid-cols-3 gap-x-6 md:gap-x-14">
            {/* First Column */}
            <div className="flex flex-col items-center justify-center mb-8 sm:mb-0">
              <h1 className="mb-4 font-bold text-[24px] sm:text-[40px]">
                Mediator
              </h1>
              <button className="px-4 py-2 bg-white text-black rounded-lg w-[150px]">
                Contact Us
              </button>
            </div>
            {/* Second Column */}
            <div className="flex flex-col items-center justify-center mb-8 sm:mb-0">
              <ul className="gap-y-6 sm:gap-y-10 text-lg">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
              </ul>
            </div>
            {/* Third Column */}
            <div className="flex flex-col items-center justify-center">
              <ul className="gap-y-6 sm:gap-y-20 text-lg">
                <li>
                  <a href="#">
                    <FaFacebook size={30} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaSquareInstagram size={30} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <CiLinkedin size={30} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <CiMail size={30} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Text */}
          <div className="container mx-auto text-center py-4 sm:py-8">
            <p>&copy; 2024 Mediator</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;
