import React from 'react';
import { motion } from 'framer-motion';
import match from '../../assets/homePageImage/match2x.jpg';
import VipBuyer from '../../assets/homePageImage/vip-buyers2x.jpg';
import magazines from '../../assets/homePageImage/magazines2x.jpg';
import onlineEvent from '../../assets/homePageImage/online-event2x.jpg';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

export default function SourcingServices() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-7xl mx-auto px-4 py-8 font-roboto bg-[#e6e9ed] rounded-lg"
        >
            
            <motion.h2
                variants={fadeInUp}
                custom={1}
                className="text-xl sm:text-2xl font-semibold mb-6"
            >
                Sourcing Services
            </motion.h2>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                    { title: "MATCH", desc: "Meet suppliers hassle-free and without boundaries", image: match },
                    { title: "VIP Buyer", desc: "Join Our VIP Buyer Community, find out more", image: VipBuyer },
                    { title: "Sourcing Magazines", desc: "Subscribe to receive Global Sources e-magazines — FREE", image: magazines },
                    { title: "Online Events", desc: "Watch videos of the latest trends and products from our suppliers.", image: onlineEvent },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        custom={index + 2}
                        className="bg-white rounded-lg shadow p-4 flex flex-col space-y-2"
                    >
                        <img src={item.image} alt={item.title} className="rounded-lg w-full h-40 object-cover" />
                        <h3 className="text-gray text-xl font-bold mt-2">{item.title}</h3>
                        <p className="text-xs text-lightgray">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

           
            <motion.div
                variants={fadeInUp}
                custom={6}
                className="relative rounded-lg overflow-hidden text-white cursor-pointer bg-cover bg-center"
                style={{ backgroundImage: `url(${match})` }}
            >
                <div className="p-6 sm:px-12 bg-gradient-to-r from-[#6820cd]/90 to-[#2b88e8]/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-3 max-w-xl">
                        <h3 className="text-lg sm:text-2xl font-bold">
                            October 2025 Global Sources Hong Kong Shows
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
                            <div className="bg-darkRed px-3 py-1 rounded-sm">
                                <p className="text-xs font-semibold">11-14 & 18-24 October</p>
                            </div>
                            <div className="bg-white px-3 py-1 rounded-sm">
                                <p className="text-xs font-semibold text-blue-600">
                                    AsiaWorld-Expo, Hong Kong
                                </p>
                            </div>
                            <div className="px-3 py-1 rounded-sm">
                                <p className="text-xs font-semibold">
                                    World Class AI Innovation & Lifestyle Sourcing
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="bg-white text-[#2234d4] font-bold px-5 py-2 rounded hover:bg-gray-100 transition">
                        Register Now
                    </button>
                </div>
            </motion.div>

            
            <motion.div
                variants={fadeInUp}
                custom={7}
                className="mt-6"
            >
                <h2 className="text-gray font-semibold text-xl mb-4">
                    Recommended Product List
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4">
                    {[...Array(5)].map((_, colIdx) => (
                        <div
                            key={colIdx}
                            className="text-sm font-roboto py-4 rounded-lg text-lightgray"
                        >
                            <ul className="flex flex-col gap-2">
                                {[
                                    'T Rex Aero 3s',
                                    '3 Wheel Electric Scooter',
                                    'Colored Wine Glasses',
                                    'Monster Energy Drink'
                                ].map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="hover:text-darkRed cursor-pointer"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}
