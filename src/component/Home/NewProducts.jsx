import React from 'react';
import { motion } from 'framer-motion';

import eyemasager from '../../assets/homePageImage/eye-masager.png';
import box from '../../assets/homePageImage/box.png';
import razors from '../../assets/homePageImage/razors.png';
import nightsuit from '../../assets/homePageImage/night-suit.png';
import third from '../../assets/homePageImage/third-1.png';

const newProducts = [
    {
        title: "Hot Selling 4 Wheel GY6 150CC/200cc Cargo Framing ATV",
        price: "US$ 2080.00",
        moq: "5 Pieces (MOQ)",
        image: eyemasager
    },
    {
        title: "Multifunction Portable Vacuum Cleaner for car",
        price: "US$ 6.66",
        moq: "2000 Pieces (MOQ)",
        image: box
    },
    {
        title: "Qi2 3-in-1 Magnetic Wireless Charging Stand",
        price: "",
        moq: "1000 Pieces (MOQ)",
        image: razors
    },
    {
        title: "Rolling lamp USB humidifier - 3D7 color car-mounted mini humidifier",
        price: "US$ 2.00",
        moq: "100 Pieces (MOQ)",
        image: nightsuit
    },
    {
        title: "Factory low price night vision AHD 1080P rear car front view camera",
        price: "US$ 10.90 - 13.90",
        moq: "100 Pieces (MOQ)",
        image: third
    }
];

// Animation Variants
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const card = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    }
};

export default function NewProducts() {
    return (
        <div className="w-full container mx-auto mt-10 px-4 font-roboto py-6 rounded-lg shadow-lg bg-[#0693e3]">
           
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-base sm:text-lg font-roboto font-semibold">
                    <span className="text-white text-3xl italic font-bold">New <span className='text-black'>Products</span></span>{' '}
                    <span className="text-white text-sm font-normal pl-4">Explore the hottest releases in the past two weeks</span>
                </h2>
                <button className="text-sm font-medium text-gray-600 hover:underline">See All</button>
            </div>

            
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} 
            >
                {newProducts.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={card}
                        whileHover={{ scale: 1.04 }}
                        className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="rounded-lg w-full h-40 object-contain mb-2"
                        />
                        <h3 className="text-sm text-[#7b7b7c] font-medium leading-tight mb-2 line-clamp-2">
                            {item.title}
                        </h3>
                        {item.price && (
                            <p className="text-sm text-black font-semibold mt-1">
                                {item.price}
                                <span className="text-gray-500 font-normal text-sm"> / Piece</span>
                            </p>
                        )}
                        <p className="text-xs text-gray-500 mb-2">{item.moq}</p>
                        <button className="mt-2 text-xs border border-gray-300 rounded-full px-4 py-1 text-gray-700 hover:bg-gray-100">
                            Inquire Now
                        </button>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
