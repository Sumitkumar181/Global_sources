import React from 'react';
import { motion } from 'framer-motion';
import yrc from '../../assets/homePageImage/yrc.jpg';
import kinggold from '../../assets/homePageImage/kinggold.jpg';
import china from '../../assets/homePageImage/china.jpg';
import gasAtv from '../../assets/homePageImage/gas-atv.jpg';
import Atv1 from '../../assets/homePageImage/ATV.jpg';
import Atv2 from "../../assets/homePageImage/ATV1.jpg";
import Atv3 from "../../assets/homePageImage/ATV2.jpg";
import phone1 from '../../assets/homePageImage/5G-phone 1.jpg';
import phone2 from '../../assets/homePageImage/5G-phone 2.jpg';
import phone3 from '../../assets/homePageImage/5G-phone.jpg';
import stainlessSteel from '../../assets/homePageImage/stainless-steel-insert.jpg';
import stamping from '../../assets/homePageImage/stamping.jpg';
import Fixture from '../../assets/homePageImage/Fixture.jpg';

const suppliers = [
    {
        logo: kinggold,
        name: 'Yichun Xinrui Electric Vehicle Ltd',
        badge: 'Premier',
        years: '18 yrs',
        verified: true,
        country: 'China',
        info: 'Exporter, M...',
        employees: 450,
        images: [Atv1, Atv2, Atv3]
    },
    {
        logo: yrc,
        name: 'Yichun Xinrui Electric Vehicle Ltd',
        badge: 'Premier',
        years: '10 yrs',
        verified: true,
        country: 'China',
        info: 'Exporter, M...',
        employees: 20,
        images: [phone1, phone2, phone3]
    },
    {
        logo: china,
        name: 'Weifang Tianyi Craft Carving Co., Ltd.',
        badge: 'Super',
        years: '1 year',
        verified: true,
        country: 'China',
        info: 'Agent, Online S...',
        employees: 550,
        images: [stainlessSteel, stamping, Fixture]
    }
];


const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut'
        }
    })
};

export default function RecommendedSuppliers() {
    return (
        <div className="w-full max-w-7xl mx-auto mt-10 px-2 sm:px-6 lg:px-8 py-8 bg-white shadow-md rounded-xl font-roboto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-normal text-[#2d2d2d]">Recommended Suppliers</h2>
                <button className="text-blue-600 text-sm hover:underline">See All</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {suppliers.map((supplier, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariant}
                        whileHover={{ scale: 1.03 }}
                        className="relative bg-[#f0f2f3] p-3 pt-10 rounded-lg shadow hover:shadow-md transition-all duration-300"
                    >
                        
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md">
                            <img
                                src={supplier.logo}
                                alt="Supplier Logo"
                                className="w-12 h-12 object-contain"
                            />
                        </div>

                        
                        <div className="mt-4 text-center">
                            <h3 className="text-lg font-medium text-gray-800 leading-snug">{supplier.name}</h3>

                            <div className="mt-2 text-xs flex justify-center flex-wrap gap-1 text-gray-600">
                                <span className="text-red-600 font-semibold">{supplier.badge}</span>
                                <span className="text-purple-600">{supplier.years}</span>
                                <span className="text-blue-600 font-semibold">Verified Manufacturer</span>
                                <span>• {supplier.country}</span>
                            </div>

                            <p className="text-xs mt-1 text-gray-500">
                                Business Type: {supplier.info} • No. of employees: {supplier.employees}
                            </p>
                        </div>

                        <div className="mt-4 flex justify-center gap-2 flex-wrap">
                            {supplier.images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt="product"
                                    className="w-28 h-28 sm:w-28 sm:h-28 rounded-lg object-cover"
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
