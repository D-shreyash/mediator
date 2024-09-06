import Link from 'next/link';
import Image from 'next/image';
import { IoIosSearch } from "react-icons/io";
import { AiOutlineMail } from 'react-icons/ai';
import { FiBell } from 'react-icons/fi';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasNotifications, setHasNotifications] = useState(true);
    const [hasMessages, setHasMessages] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full bg-white py-2">
            <div className="container mx-auto flex flex-wrap items-center justify-between">

                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-black text-2xl">
                        {isMenuOpen ? (
                            <XMarkIcon className="w-6 h-6" />
                        ) : (
                            <Bars3Icon className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white backdrop-blur shadow-lg md:hidden">
                        <div className="flex flex-col p-4 space-y-4">
                            <Link href="#" className="text-black font-bold hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Link>
                            <Link href="#" className="text-black font-bold hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>
                                About
                            </Link>
                            <Link href="#" className="text-black font-bold hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>
                                Pricing
                            </Link>
                            <Link href="#" className="text-black font-bold hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>
                                Team
                            </Link>
                        </div>
                    </div>
                )}

                <nav className="hidden md:flex flex-wrap space-x-4 md:flex-row md:space-x-6">
                    <Link href="#" className="text-black font-bold hover:text-blue-500 pl-4">
                        Home
                    </Link>
                    <Link href="#" className="text-black font-bold hover:text-blue-500">
                        About
                    </Link>
                    <Link href="#" className="text-black font-bold hover:text-blue-500">
                        Pricing
                    </Link>
                    <Link href="#" className="text-black font-bold hover:text-blue-500">
                        Team
                    </Link>
                </nav>
                
                <div className="flex-shrink-0">
                    <Link href="#">
                        <div className="h-20 w-20">
                            <Image src="/logo.png" alt="Mediator" width={150} height={150} />
                        </div>
                    </Link>
                </div>

                <div className="flex items-center space-x-4 mt-2 md:mt-0">

                    <div className="relative block md:hidden">
                        <button className="text-black text-2xl">
                            <IoIosSearch />
                        </button>
                    </div>

                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            className="w-full max-w-xs rounded-full pl-10 py-2 bg-gray-200 hover:ring-gray-300 hover:ring-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black"
                            placeholder="Search"
                        />
                        <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black text-2xl" />
                    </div>

                    <div className="relative">
                        <a href="#" className="flex items-center text-gray-500">
                            <FiBell className="text-2xl hover:text-black" />
                            <span className="sr-only">Notifications</span>
                        </a>
                        {hasNotifications && (
                            <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-gray-500 rounded-full ring-2 ring-white" />
                        )}
                    </div>

                    <div className="relative">
                        <a href="#" className="flex items-center text-gray-500">
                            <AiOutlineMail className="text-2xl hover:text-black" />
                            <span className="sr-only">Inbox</span>
                        </a>
                        {hasMessages && (
                            <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-gray-500 rounded-full ring-2 ring-white" />
                        )}
                    </div>
                    
                    <div className="flex-shrink-0 w-12 h-12">
                        <Link href="#">
                            <Image
                                src="/avtar.png"
                                alt="Profile Picture"
                                width={40}
                                height={40}
                                className="rounded-full w-full h-full hover:ring-2 hover:ring-blue-500"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
