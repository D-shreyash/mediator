import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
const Footer = () => {
  return (
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
  )
}

export default Footer