import { IoIosSearch } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { useState } from "react";
import AdCard from "./adCard";
import ProfileCard from "./profileCard";
import { Popover, PopoverPanel } from "@headlessui/react";
import MailItemList from "./mailItemList";
import Image from "next/image";
import ProfileOptions from "./profileOptions";

function MainPage() {

    const [notify,setNotify] = useState(false);
    const [profcard,setProfCard] = useState([
        {name:"John Paul",img:"/person1.png",proffession:"Travel Vlogger",desc:"Instagram Influencer",followers:"5.6k",rating:"4.9",price:"3000/-",type:"profile"},
        {name:"John Paul",img:"/person1.png",proffession:"Travel Vlogger",desc:"Instagram Influencer",followers:"5.6k",rating:"4.9",price:"3000/-",type:"profile"},
        {image:"/ad1.png",link:"Hello",type:"ad"},
        {name:"John Paul",img:"/person1.png",proffession:"Travel Vlogger",desc:"Instagram Influencer",followers:"5.6k",rating:"4.9",price:"3000/-",type:"profile"},
        {image:"/ad1.png",link:"Hello",type:"ad"},
        {name:"John Paul",img:"/person1.png",proffession:"Travel Vlogger",desc:"Instagram Influencer",followers:"5.6k",rating:"4.9",price:"3000/-",type:"profile"},
        {name:"John Paul",img:"/person1.png",proffession:"Travel Vlogger",desc:"Instagram Influencer",followers:"5.6k",rating:"4.9",price:"3000/-",type:"profile"},
        {name:"John Paul",img:"/person1.png",proffession:"Travel Vlogger",desc:"Instagram Influencer",followers:"5.6k",rating:"4.9",price:"3000/-",type:"profile"}
    ]);

    return(
        <div className="min-h-screen bg-white flex flex-col items-center">
        {/* Navbar  */}

        <header className="w-full bg-white py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <nav className="mb-4 md:mb-0">
                <a href="#" className="mx-2">
                Home
                </a>
                <a href="#" className="mx-2">
                About
                </a>
                <a href="#" className="mx-2">
                Pricing
                </a>
                <a href="#" className="mx-2">
                Team
                </a>
            </nav>
            <div className="w-32 mb-4 md:mb-0">
                <Image src="/logo_small.png" alt="Mediater" width={200} height={10} />
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
                {(notify)?(<Image className="m-2 text-xl" src="/Bell_pin_fill.png" alt="Notification on" width={21} height={21}/>):<Image className="m-2 text-xl" src="/Bell_pin.png" alt="Notification on" width={20} height={20}/>}
                <Popover className="">
                <Popover.Button className="m-2 text-xl focus:outline-none">
                <GoMail className="" />
                </Popover.Button>
                <PopoverPanel className="absolute p-3 w-full sm:w-auto right-0 sm:right-0 mt-3">
                    <MailItemList items={[{name:"Robert Fox",msg:"AWW",followers:"15M"},{name:"Kathyryn Munroe",msg:"AWW",followers:"15M"},{name:"Robert Fox",msg:"AWW",followers:"15M"},{name:"Robert Fox",msg:"AWW",followers:"15M"},{name:"Robert Fox",msg:"AWW",followers:"15M"},{name:"Robert Fox",msg:"AWW",followers:"15M"},{name:"Robert Fox",msg:"AWW",followers:"15M"},{name:"Robert Fox",msg:"AWW",followers:"15M"},{name:"Robert Fox",msg:"AWW",followers:"15M"}]}/>
                </PopoverPanel>
                </Popover>
                <Popover className="">
                <Popover.Button className="m-2 text-xl focus:outline-none">
                <Image className="m-2" src="/google.png" alt="Profile Picture" width={40} height={40}/>
                </Popover.Button>
                <PopoverPanel className="absolute p-3 w-full sm:w-auto right-0 sm:right-0">
                    <ProfileOptions details={{name:"John Paul",proffession:"Food Vlogger",coins:"1000",bills:"1000",image:"/dp2.png"}} type={"Influencer"}/>
                </PopoverPanel>
                </Popover>
                
            </div>
            </div>
        </header>
        
        {/*Banner*/}
        <div className="flex w-full justify-center p-2 sm:mb-6">
            <Image className="" src="/banner.png" alt="Banner" width={1200} height={255.5}/>
        </div>

        {/*Profile Cards*/}
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 lg:gap-20 m-3">
            {(profcard.map((item,key) => {
            return(item.type == "ad")?(<AdCard image={item.image} link={item.link} key={key}/>):(<ProfileCard name={item.name} key={key} img={item.img} proffession={item.proffession} desc={item.desc} followers={item.followers} rating={item.rating} price={item.price}/>);
            }))}
            
        </div>

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
                    Mediater
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
                <p>&copy; 2024 Mediater</p>
            </div>
            </div>
        </footer>
        </div>
    );
}

export default MainPage;