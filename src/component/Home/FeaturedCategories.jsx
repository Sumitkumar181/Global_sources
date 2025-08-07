import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import RefurbishedLaptops from '../../assets/homePageImage/Refurbished-Laptops.png';
import laptop_dell from '../../assets/homePageImage/laptop_dell.jpg';
import tousor from '../../assets/homePageImage/tousor.png';
import tshirt from '../../assets/homePageImage/tshirt.png';
import fan from '../../assets/homePageImage/fan.jpg'
import bed from '../../assets/homePageImage/bed.png'
import pant from '../../assets/homePageImage/pant.jpg'
import shap from '../../assets/homePageImage/shap.jpg';
import light from '../../assets/homePageImage/light.jpg'
import camp from '../../assets/homePageImage/camp.jpg'

import { ChevronLeft, ChevronRight } from 'lucide-react';

const productList = [
    { title: 'Rick And Morty Bong', image: laptop_dell },
    { title: 'Oil Burner Pipe', image: tousor },
    { title: 'T Rex Motorcycle', image: fan },
    { title: 'Polaris Slingshot price', image: tshirt },
    { title: 'Gas Scooter', image: bed },
    { title: 'Bose Car Speakers', image: pant },
    { title: '100 Inch Tv', image: shap },
    { title: 'Vioc Pos', image: light },
    { title: 'Basketball Backpack', image: camp },
    { title: 'LED Projector', image: laptop_dell },
    { title: 'Smart Watch', image: tousor },
    { title: 'Gaming Console', image: fan },
    { title: 'Rick And Morty Bong', image: laptop_dell },
    { title: 'Oil Burner Pipe', image: tousor },
    { title: 'T Rex Motorcycle', image: fan },
    { title: 'Polaris Slingshot price', image: tshirt },
    { title: 'Gas Scooter', image: bed },
    { title: 'Bose Car Speakers', image: pant },
    { title: '100 Inch Tv', image: shap },
    { title: 'Vioc Pos', image: light },
    { title: 'Basketball Backpack', image: camp },
    { title: 'LED Projector', image: laptop_dell },
    { title: 'Smart Watch', image: tousor },
    { title: 'Gaming Console', image: fan },
    
];


const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: 'easeOut',
        },
    }),
};

export default function FeaturedCategories() {
    const scrollRef = useRef(null);

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: dir === 'left' ? -300 : 300,
                behavior: 'smooth',
            });
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-7xl mx-auto px-4 py-6 font-roboto relative"
        >
            
            <motion.div
                variants={fadeInUp}
                custom={1}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-10"
            >
                <h2 className="font-bold text-2xl text-gray font-[roboto]">
                    Featured Categories
                </h2>
                <p className="text-xs text-lightgray font-[roboto]">
                    The most in-demand categories among buyers.
                </p>
            </motion.div>

        
            <motion.div
                variants={fadeInUp}
                custom={2}
                className="relative mt-10"
            >
                
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10  shadow h-full rounded-tr-lg rounded-br-lg bg-[#e1ecf7]"
                >
                    <ChevronLeft size={28} />
                </button>

                
                <div
                    ref={scrollRef}
                    className="flex space-x-6 overflow-hidden scroll-smooth bg-white px-4 py-10 rounded-lg shadow scrollbar-hide"
                >
                    {productList.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            custom={index * 0.1 + 3}
                            className="flex-shrink-0 flex flex-col items-center text-center space-y-2"
                        >
                            <div className="h-20 w-20 rounded-full bg-gray-100 shadow flex items-center justify-center overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <p className="text-sm font-medium text-lightgray">{item.title}</p>
                        </motion.div>
                    ))}
                </div>

                
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full rounded-tl-lg rounded-bl-lg bg-[#e1ecf7] hover:text-blue-900"
                >
                    <ChevronRight size={28} />
                </button>
            </motion.div>
        </motion.div>
    );
}
