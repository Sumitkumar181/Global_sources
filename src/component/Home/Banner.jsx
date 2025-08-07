import CategoriesSidebar from '../Home/CategoriesSidebar';
import TaiwanPromo from "../Home/TaiwanPromo";
import MostPopular from "../Home/MostPopular";


const Banner = () => {
    return (
        <div className="bg-gradient-to-t to-[#2f67eb] from-white font-roboto text-white text-center py-6 px-4">
            <div className='flex flex-col sm:flex-row justify-between items-center max-w-screen-xl mx-auto w-full gap-4'>
                <div className="text-center sm:text-left sm:flex-1 grid items-center justify-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-1">
                        October 2025 Global Sources Hong Kong Shows
                    </h2>
                    <p className="text-sm">World-class AI, innovation and lifestyle sourcing</p>
                    <div className='mt-3'>
                        <button className="mt-2 sm:mt-0 bg-white text-indigo font-semibold px-4 py-1 text-sm rounded-full hover:bg-gray-100 transition">
                            Register Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-screen-xl mx-auto bg-white mt-6 rounded-lg px-4 py-6 flex flex-col lg:flex-row gap-4 text-black">
                <CategoriesSidebar />
                <TaiwanPromo />
                <MostPopular />
            </div>
        </div>
    );
};

export default Banner;
