import React from 'react'
import NavBar from './NavBar'
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import Footer from './Footer';
import CommentsSection from './CommentsSection';
const Businessprofile = () => {

    const reels = [
        {
            url: "https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=1024x1024&w=is&k=20&c=X8Fq8SVoZRTEs-Rwt5iAaX3dbZehWmFssd857ez66D8=",
        },
        {
            url: "https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=1024x1024&w=is&k=20&c=X8Fq8SVoZRTEs-Rwt5iAaX3dbZehWmFssd857ez66D8=",
        },
        {
            url: "https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=1024x1024&w=is&k=20&c=X8Fq8SVoZRTEs-Rwt5iAaX3dbZehWmFssd857ez66D8=",
        },
        {
            url: "https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=1024x1024&w=is&k=20&c=X8Fq8SVoZRTEs-Rwt5iAaX3dbZehWmFssd857ez66D8=",
        },
        {
            url: "https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=1024x1024&w=is&k=20&c=X8Fq8SVoZRTEs-Rwt5iAaX3dbZehWmFssd857ez66D8=",
        },
        {
            url: "https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=1024x1024&w=is&k=20&c=X8Fq8SVoZRTEs-Rwt5iAaX3dbZehWmFssd857ez66D8=",
        }
    ]
    return (
        <div className="bg-white min-h-screen">
            <NavBar />
            <div className="flex flex-col sm:flex-row sm:justify-center items-center w-screen gap-10 mb-10 mt-10 p-10"  >
                <div className="flex-shrink-0 w-40 h-40">
                    <Image
                        src="/profile.jpg"
                        alt="Profile Picture"
                        width={150}
                        height={100}
                        className="rounded-full w-full h-full"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-black font-bold text-4xl font-">Bianco</h2>
                    <div className="flex text-black">
                        <p className=" p-2 flex items-center ">
                            
                            Restaurant</p>
                        <p className=" p-2 flex items-center ">
                            <CiLocationOn className="pr-1 text-black font-bold" />
                            Kollam
                        </p>
                        <p className=" p-2 flex items-center">
                            <GrGroup className="pr-1" />
                            5.6k
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                    <button className="mt-4 px-4 py-2 bg-[#539DF2] text-white rounded-full w-40 ">
                        Contact me
                    </button>
                    </div>
                </div>

            </div>
            <div className="flex flex-col w-screen items-center text-black mb-10 ">
                <div className="w-8/12">
                    <h1 className="font-bold text-gray-500 italic  text-left">
                        About John
                    </h1>
                    <p className=" text-left 2xl:w-6/12 text-xl lg:8/12">
                        John is not just a food vlogger; he is a culinary storyteller
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea.
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center w-screen mb-10">
                <div className="grid grid-cols-3 gap-1 ">
                    {
                        reels.map((r) => {
                            return (
                                <img src={r.url} className="xl:h-80 xl:w-80 lg:h-80 lg:w-80 md:w-64 md:h-64 sm:w-52 sm:h-52 h-32 w-28 " />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col w-screen items-center ">
                    <div className="2xl:w-6/12 text-xl lg:8/12 p-1">
                        <CommentsSection/>
                    </div>
                    
        </div>
            <Footer />
        </div>
    )
}

export default Businessprofile