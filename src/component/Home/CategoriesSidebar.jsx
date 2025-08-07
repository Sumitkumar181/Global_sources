import { LuList } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";



const categories = [
    "Auto Vehicle & Accessories",
    "Beauty & Personal Care",
    "Consumer Electronics",
    "Electronic Components",
    "Fashion Accessories & Footwear",
    "Fashion Apparel & Fabrics",
    "Food & Beverages",
    "Furniture & Home Decor",
    "Gifts, Festival & Hobbies",
    "Hardware",
    "Health Care",
    "Home Appliances",
    "Hardware",
    "Health Care",
    "Home Appliances",
];

const CategoriesSidebar = () => {
    return (
        <div className="w-full sm:w-64 font-roboto  p-4 rounded  shadow-sm">
            <div className="flex items-center gap-2">
                <LuList color="black" size={24} />
                <h2 className="text-black font-roboto font-bold">categories</h2>
            </div>
            <div className="mt-4 ">
                {categories.map((item, index) => (
                    <div className="flex justify-between ">
                        <p className="text-gray text-left justify-start mb-2 font-roboto text-sm hover:text-darkRed hover:text-base cursor-pointer">{item}</p>
                        <IoIosArrowForward color="gray" />
                    </div>
                    

            ))}
            
            </div>
            
        </div>
    );
};

export default CategoriesSidebar;
