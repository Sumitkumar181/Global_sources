import { ChevronDown } from "lucide-react";

const TopNav = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center font-roboto px-4 sm:px-8 md:px-20 py-3 text-sm font-medium text-black">

          
            <div className="flex flex-wrap items-center gap-4 mb-2 sm:mb-0">
                <div className="flex items-center space-x-1 font-semibold hover:text-darkRed">
                    <span className="hover:text-darkRed">Trade Shows</span>
                    <ChevronDown className="w-4 h-4" />
                </div>

                <div className="hidden sm:block h-4 border-l border-gray-300"></div>

                <div className="flex items-center space-x-1 hover:text-darkRed">
                    <span className="text-gray font-normal hover:text-darkRed">Asia Spotlight</span>
                    <ChevronDown className="w-4 h-4" />
                </div>

                <div className="flex items-center space-x-1 hover:text-darkRed">
                    <span className="text-gray font-normal hover:text-darkRed">English</span>
                    <ChevronDown className="w-4 h-4" />
                </div>

                <div className="flex items-center space-x-1 hover:text-darkRed">
                    <span className="text-gray font-normal hover:text-darkRed">Get the App</span>
                    <ChevronDown className="w-4 h-4" />
                </div>
            </div>

           
            <div className="flex flex-wrap items-center gap-4">
                <span className="hover:text-darkRed">Sourcing Club</span>

                <div className="flex items-center space-x-1 hover:text-darkRed">
                    <span>Buyer Services</span>
                    <ChevronDown className="w-4 h-4" />
                </div>

                <div className="flex items-center space-x-1 hover:text-darkRed">
                    <span>Supplier Services</span>
                    <ChevronDown className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
};

export default TopNav;
