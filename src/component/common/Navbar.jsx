import React, { useState } from "react";
import { PiStorefrontBold } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { LuUserRound } from "react-icons/lu";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/image/Logo/logo.png";



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="font-roboto w-full text-sm font-medium  bg-white ">
            <div className="hidden md:block bg-gray-50 border-b border-lightgray border-opacity-30">
                <div className="flex justify-between items-center px-6 lg:px-16 py-2 text-black">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center space-x-1 font-semibold hover:text-darkRed cursor-pointer">
                            <span className="text-lightgray">Trade Shows</span>
                            <ChevronDown className="w-4 h-4 text-lightgray" />
                        </div>
                        <div className="h-4 border-l border-lightgray" />
                        <div className="flex items-center space-x-1 hover:text-darkRed cursor-pointer">
                            <span className="text-lightgray font-normal">Asia Spotlight</span>
                            <ChevronDown className="w-4 h-4 text-lightgray" />
                        </div>
                        <div className="flex items-center space-x-1 hover:text-darkRed cursor-pointer">
                            <span className="font-normal text-lightgray">English</span>
                            <ChevronDown className="w-4 h-4 text-lightgray" />
                        </div>
                        <div className="flex items-center space-x-1 hover:text-darkRed cursor-pointer">
                            <span className="text-lightgray font-normal">Get the App</span>
                            <ChevronDown className="w-4 h-4 text-lightgray" />
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="hover:text-darkRed cursor-pointer text-lightgray">Sourcing Club</span>
                        <div className="flex items-center space-x-1 hover:text-darkRed cursor-pointer">
                            <span className="text-lightgray">Buyer Services</span>
                            <ChevronDown className="w-4 h-4 text-lightgray" />
                        </div>
                        <div className="flex items-center space-x-1 hover:text-darkRed cursor-pointer">
                            <span className="text-lightgray">Supplier Services</span>
                            <ChevronDown className="w-4 h-4 text-gray" />
                        </div>
                    </div>
                </div>
            </div>
            <nav className="w-full py-3 px-0 sm:px-6  flex items-center justify-between">
                <div className="flex items-center justify-between w-full md:w-auto  sm:px-0">
                    <img src={logo} alt="Logo" className="h-8 sm:h-16 object-contain" />
                    <div className="md:hidden">
                        <button
                            className="text-gray-700 focus:outline-none"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
                <div className="hidden md:flex flex-1 justify-between items-center mx-6 gap-6">
                    <div className="flex items-center border-2 border-red-500 rounded-full overflow-hidden w-full max-w-2xl">
                        <select className="text-sm px-4 py-2 bg-white text-gray-700 outline-none">
                            <option>Products</option>
                            <option>Suppliers</option>
                        </select>
                        <input
                            type="text"
                            placeholder="I'm looking for..."
                            className="flex-1 px-4 py-2 outline-none text-gray border-l border-lightGray placeholder:text-xs"
                        />
                        <button className="bg-gradient-to-r from-lightRed to-darkRed text-white px-5 py-2 text-base font-semibold rounded-r-full hover:bg-darkRed transition">
                            Search
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                            <PiStorefrontBold size={56} />
                            <span>Become a Supplier</span>
                        </div>
                        <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                            <TbTargetArrow size={56} />
                            <span>Request for Quotations</span>
                        </div>
                        <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                            <LuUserRound size={56} />
                            <span>Sign in / Register</span>
                        </div>
                    </div>
                </div>
            </nav>
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 px-0 pt-2 pb-6 space-y-4">
                    <div className="w-full px-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full px-3 py-2 border border-gray-300 rounded-full text-sm outline-none"
                        />
                    </div>
                    <div className="space-y-2 text-gray-700 px-4">
                        <div className="flex items-center justify-between cursor-pointer hover:text-darkRed">
                            <span>Trade Shows</span>
                            <ChevronDown size={16} />
                        </div>
                        <div className="flex items-center justify-between cursor-pointer hover:text-darkRed">
                            <span>Asia Spotlight</span>
                            <ChevronDown size={16} />
                        </div>
                        <div className="flex items-center justify-between cursor-pointer hover:text-darkRed">
                            <span>English</span>
                            <ChevronDown size={16} />
                        </div>
                        <div className="flex items-center justify-between cursor-pointer hover:text-darkRed">
                            <span>Get the App</span>
                            <ChevronDown size={16} />
                        </div>
                        <div className="flex items-center justify-between cursor-pointer hover:text-darkRed">
                            <span>Buyer Services</span>
                            <ChevronDown size={16} />
                        </div>
                        <div className="flex items-center justify-between cursor-pointer hover:text-darkRed">
                            <span>Supplier Services</span>
                            <ChevronDown size={16} />
                        </div>
                        <div className="hover:text-darkRed cursor-pointer">Sourcing Club</div>
                    </div>
                    <div className="space-y-3 pt-4 border-t border-gray-200 px-4">
                        <div className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                            <PiStorefrontBold size={20} />
                            <span>Become a Supplier</span>
                        </div>
                        <div className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                            <TbTargetArrow size={20} />
                            <span>Request for Quotations</span>
                        </div>
                        <div className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                            <LuUserRound size={20} />
                            <span>Sign in / Register</span>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
