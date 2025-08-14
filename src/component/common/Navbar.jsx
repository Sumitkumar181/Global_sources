import React, { useState } from "react";
import { PiStorefrontBold } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { LuUserRound } from "react-icons/lu";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/image/Logo/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Dropdown = ({ label, items, isMobile }) => {
    const [open, setOpen] = useState(false);

    if (isMobile) {
        return (
            <div className="border-b border-lightgray border-opacity-50 font-roboto pb-1">
                <div
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-between cursor-pointer py-2  text-gray hover:text-darkRed"
                >
                    <span>{label}</span>
                    <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    />
                </div>
                {open && (
                    <ul className="pl-4  space-y-1">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="text-sm text-gray  hover:text-darkRed cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }

   
    return (
        <div className="relative group cursor-pointer ">
            <div className="flex items-center space-x-1 hover:text-darkRed">
                <span className="text-lightgray font-normal">{label}</span>
                <ChevronDown className="w-4 h-4 text-lightgray" />
            </div>
            <div className="absolute left-0 mt-2 w-56  bg-white  rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                <ul className="py-2">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 text-gray-700 hover:bg-gray-100  hover:text-darkRed text-xs"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const dropdowns = {
        "Trade Shows": ["April 2025 Show", "Online Show", "Featured Events"],
        "India Spotlight": [
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chhattisgarh",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Madhya Pradesh",
            "Tamil Nadu",
            "Telangana",
            "Tripura",
            "Uttar Pradesh",
            "Uttarakhand",
            "West Bengal"],
        English: ["English", "हिन्दी", "বাংলা", "తెలుగు", "मराठी", "தமிழ்", "اردو", "ગુજરાતી", "ಕನ್ನಡ"],
        "Get the App": ["iOS App", "Android App", "Download via SMS"],
        "Buyer Services": ["Sourcing Services", "Inspection", "Logistics"],
        "Supplier Services": ["Membership", "Booth Booking", "Promotions"],
    };

    return (
        <header className="font-roboto w-full text-sm font-medium bg-white">
           
            <div className="hidden md:block bg-gray-50 border-b border-lightgray border-opacity-40">
                <div className="flex justify-between items-center px-6  lg:px-16 py-2 text-gray ">
                    <div className="flex  items-center gap-6">
                        {Object.entries(dropdowns).slice(0, 4).map(([label, items]) => (
                            <Dropdown key={label} label={label} items={items} isMobile={false} />
                        ))}
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="hover:text-darkRed cursor-pointer text-lightgray">
                            Sourcing Club
                        </span>
                        {Object.entries(dropdowns).slice(4).map(([label, items]) => (
                            <Dropdown key={label} label={label} items={items} isMobile={false} />
                        ))}
                    </div>
                </div>
            </div>

          
            <nav className="w-full py-3 px-4 sm:px-6 flex items-center justify-between">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <img src={logo} alt="Logo" className="h-8 sm:h-12 object-contain" />
                    <div className="md:hidden">
                        <button
                            className="text-gray-700 focus:outline-none"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>

               
                <div className="hidden md:flex flex-1  justify-between items-center mx-6 gap-4">
                  

                    <div className="w-full max-w-2xl flex items-center rounded-full bg-white border-2 border-darkRed shadow-sm overflow-hidden focus-within:ring-1 focus-within:ring-red-400">
                     
                        <div className="relative">
                            <select className="appearance-none text-sm px-4 py-3 pr-10 bg-white text-gray-700 outline-none border-none">
                                <option>Products</option>
                                <option>Suppliers</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>

                       
                        <input
                            type="text"
                            placeholder="I'm looking for..."
                            className="flex-1 px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none border-l border-gray-200"
                        />

                      
                        <button className="bg-gradient-to-r from-lightRed to-darkRed text-white px-6 py-3 text-sm font-semibold hover:from-darkRed hover:to-darkRed transition-all duration-200 rounded-r-full">
                            Search
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link to="/become-supplier" className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                            <PiStorefrontBold size={56}  className="text-gray"/>
                            <span className="text-gray">Become a Supplier</span>
                        </Link>
                        <Link to="/request-buyer" className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                            <TbTargetArrow size={56} className="text-gray" />
                            <span className="text-gray">Request for Quotations</span>
                        </Link>
                        <div className="flex items-center gap-1 hover:text-red-500  cursor-pointer">
                            <LuUserRound size={56} className="text-gray" />
                            <span className="text-gray">Sign in / Register</span>
                        </div>
                    </div>
                </div>
            </nav>

            
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-4 pb-6 space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full px-3 py-2 border border-gray-300 rounded-full text-sm outline-none"
                        />
                    </div>
                    <div className="space-y-3">
                        {Object.entries(dropdowns).map(([label, items]) => (
                            <Dropdown
                                key={label}
                                label={label}
                                items={items}
                                isMobile={true}
                            />
                        ))}
                        <div className="hover:text-darkRed cursor-pointer text-gray-700 border-b border-gray-200 pb-2">
                            Sourcing Club
                        </div>
                    </div>
                    <div className="space-y-3 pt-4 border-t border-gray-200">

                        <Link to="/become-supplier" className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                            <PiStorefrontBold size={20} />
                            <span>Become a Supplier</span>
                        </Link>
                        <Link to="/request-buyer" className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                            <TbTargetArrow size={20} />
                            <span>Request for Quotations</span>
                        </Link>
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
