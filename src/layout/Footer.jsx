import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-700 px-4 sm:px-6 lg:px-8 py-10 font-roboto">
     
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={1}
        className="max-w-4xl mx-auto text-center mb-10"
      >
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Send me the latest products in Car water pump.
        </h2>

      
        <div className="flex items-stretch w-full max-w-md mx-auto rounded-full overflow-hidden border-2 border-red-600">
          <input
            type="email"
            placeholder="Your Email"
            className="flex-grow px-4 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none rounded-l-full"
          />
          <button className="bg-gradient-to-r from-[#ec1c24] to-[#f26722] text-white px-6 text-sm font-semibold rounded-r-full hover:opacity-90 transition-all">
            Subscribe
          </button>
        </div>

       
        <p className="text-xs text-red-600 mt-2">
          Please enter your e-mail address.
        </p>
      </motion.div>

     
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm text-lightgray mb-10">
        
        <div>
          <h3 className="font-semibold text-base text-gray-700 mb-3">
            Find Suppliers Online
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-red-600 cursor-pointer">Browse Product Categories</li>
            <li className="hover:text-red-600 cursor-pointer">Browse Supplier Categories</li>
            <li className="hover:text-red-600 cursor-pointer">Wholesale Catalog</li>
            <li className="hover:text-red-600 cursor-pointer">Ready to Order</li>
            <li className="hover:text-red-600 cursor-pointer">New Product Rollouts</li>
          </ul>

          <h3 className="font-semibold text-base text-gray-700 mt-6 mb-3">
            Meet Suppliers Face-to-Face
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-red-600 cursor-pointer">Trade Shows</li>
            <li className="hover:text-red-600 cursor-pointer">Global Sources MATCH</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-base text-gray-700 mb-3">
            Supplier Tools
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-red-600 cursor-pointer">Reach Qualified Buyers</li>
            <li className="hover:text-red-600 cursor-pointer">Join as a Free Supplier</li>
            <li className="hover:text-red-600 cursor-pointer">Become a Verified Supplier</li>
            <li className="hover:text-red-600 cursor-pointer">Sell Your Products</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-base text-gray-700 mb-3">Buyer Tools</h3>
          <ul className="space-y-2">
            <li className="hover:text-red-600 cursor-pointer">Global Sources Apps</li>
            <li className="hover:text-red-600 cursor-pointer">Import & Export Services</li>
            <li className="hover:text-red-600 cursor-pointer">Sourcing Knowledge Center</li>
            <li className="hover:text-red-600 cursor-pointer">Sourcing e-Magazines</li>
            <li className="hover:text-red-600 cursor-pointer">RFQ</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-base text-gray-700 mb-3">Help</h3>
          <ul className="space-y-2">
            <li className="hover:text-red-600 cursor-pointer">Help Center</li>
            <li className="hover:text-red-600 cursor-pointer">3 Wheel Electric Scooter</li>
            <li className="hover:text-red-600 cursor-pointer">What Every Buyer Needs to Know</li>
            <li className="hover:text-red-600 cursor-pointer">Ask the Sourcing Experts</li>
            <li className="hover:text-red-600 cursor-pointer">Report Intellectual Property</li>
            <li className="hover:text-red-600 cursor-pointer">Infringement</li>
            <li className="hover:text-red-600 cursor-pointer">Latest Policy on Mercury-Related</li>
            <li className="hover:text-red-600 cursor-pointer">Products</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-base text-gray-700 mb-3">About Us</h3>
          <ul className="space-y-2">
            <li className="hover:text-red-600 cursor-pointer">About Global Sources</li>
            <li className="hover:text-red-600 cursor-pointer">Our Services</li>
            <li className="hover:text-red-600 cursor-pointer">Our Quality Commitment</li>
            <li className="hover:text-red-600 cursor-pointer">Buyer Stories</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 border-t border-b border-lightgray py-4 mb-4">
        <span className="text-sm text-lightgray">Follow Us:</span>
        <FaFacebookSquare size={20} className="hover:text-blue-600 text-lightgray cursor-pointer" />
        <FaSquareXTwitter size={20} className="hover:text-black text-lightgray cursor-pointer" />
        <FaInstagramSquare size={20} className="hover:text-red-500 text-lightgray cursor-pointer" />
        <FaLinkedin size={20} className="hover:text-blue-700 text-lightgray cursor-pointer" />
        <FaSquareYoutube size={20} className="hover:text-red-600 text-lightgray cursor-pointer" />
      </div>

    
      <div className="flex flex-wrap justify-center gap-2 text-sm text-lightgray mb-3">
        <span>Global Sourcing Sites:</span>
        {["English", "हिन्दी", "বাংলা", "తెలుగు", "मराठी", "தமிழ்", "اردو", "ગુજરાતી", "ಕನ್ನಡ"].map((language, i) => (
          <a
            key={i}
            className="px-3 border-l border-gray-300 first:border-l-0 hover:text-red-600 cursor-pointer"
          >
            {language}
          </a>
        ))}
      </div>

    
      <div className="flex flex-wrap justify-center gap-4 text-sm text-lightgray mb-3">
        {["Terms of Use", "Privacy Policy", "Security Measures", "IP Policy", "Cookie Policy", "Preference"].map(
          (item, i) => (
            <p key={i} className="hover:text-red-600 cursor-pointer">
              {item}
            </p>
          )
        )}
      </div>

      <div className="text-center text-sm text-lightgray mt-4">
        © 2025 Publishers Representatives Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;