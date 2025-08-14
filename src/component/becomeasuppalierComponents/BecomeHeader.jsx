import React from 'react'
import office from '../../assets/becomeSuppalier/office.jpg'

export default function BecomeHeader() {

    const memberships = [
        {
            title: "Free Membership",
            button: "Apply Now",
            bg: "bg-[#e6f0ff]",
            textColor: "text-gray",
            buttonColor: "bg-gray",
            icon: "🆓", 
        },
        {
            title: "Standard Membership",
            button: "Inquire Now",
            bg: "bg-[#fcefe9]",
            textColor: "text-[#5c2c13]",
            buttonColor: "bg-[#5c2c13]",
            icon: "🥉", 
        },
        {
            title: "Advance Membership",
            button: "Inquire Now",
            bg: "bg-[#e6e9ff]",
            textColor: "text-[#1e1eaa]",
            buttonColor: "bg-[#1e1eaa]",
            icon: "💎", 
        },
    ];


  return (
      <div className='w-screen  font-roboto '>
          <div className='relative grid justify-center items-center bg-darkIndigo  h-[500px] w-screen '>
           <img src={office} alt=' Office' className=' absolute h-full w-full opacity-40 object-fit'  /> 
          <div className=' absolute  px-24 py-20 grid gap-4 '>
          <h2 className='text-white text-4xl font-bold'>Register as a</h2>
              <h2 className='text-white text-4xl font-bold'>Global Sources Supplier Now</h2>
              <div>
              <p className='text-white text-sm'>Join GSOL and forge a new era of digital foreign trade, enabling businesses to thrive </p>
                  <p className='text-white text-sm'>in the global marketplace.</p>
              </div>
              <button className='h-12 w-40 mt-4 font-bold grid justify-center items-center  text-sm text-white px-8 py-2 rounded-full bg-darkRed'>Apply Now</button>
              </div>
          </div>
          <div className='h-72  pl-24 flex items-center relative'>
              <div className='w-80  flex flex-col gap-2'>
                  <h2 className='text-gray text-3xl font-bold'>Explore tailor-made </h2>
                  <h2 className='text-gray text-3xl font-bold'>benefits for your</h2>
                  <h2 className='text-gray text-3xl font-bold'>business.</h2>
              </div>
              
              <div className='flex  gap-14 px-16'>
              <div>
                  <h2 className='text-darkRed text-4xl font-bold'>30M+ </h2>
                 <p className='text-lg font-bold mt-2'>Products</p>
              </div>

              <div>
                  <h2 className='text-darkRed text-4xl font-bold'>30M+ </h2>
                      <p className='text-lg font-bold mt-2'>Suppliers</p>
              </div>

              <div>
                  <h2 className='text-darkRed text-4xl font-bold'>30M+ </h2>
                      <p className='text-lg font-bold mt-2'>Product Categories</p>
                  </div>
              </div>
              <div>
                  <h2 className='text-darkRed text-4xl font-bold'>30M+ </h2>
                  <p className='text-lg font-bold mt-2'>Registered Buyers & Users</p>
              </div>
              
          </div>

          <section className="bg-gradient-to-b from-[#0b1c3f] to-[#132d5c] py-10 px-4 md:px-12 text-center">
              <h2 className="text-white text-2xl sm:text-3xl font-bold mb-10">
                  Supplier Membership Program
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {memberships.map((item, index) => (
                      <div
                          key={index}
                          className={`rounded-2xl p-6 flex flex-col items-center shadow-xl ${item.bg}`}
                      >
                          <div className="text-5xl mb-4">{item.icon}</div>

                          <h3 className={`text-xl  font-semibold mb-6 ${item.textColor}`}>
                              {item.title}
                          </h3>

                          <button
                              className={`text-white text-sm font-semibold px-16 py-2 rounded-full ${item.buttonColor} hover:opacity-90 transition`}
                          >
                              {item.button}
                          </button>
                      </div>
                  ))}
              </div>
          </section>

          <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-6 sm:py-8 md:py-10 w-full flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center justify-between bg-slate-200">
              
              <div className="flex-1">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                      For more membership plans, please contact us immediately!
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg mt-3">
                      Click the button on the right to learn about the{" "}
                      <span className="italic">"Infinite Opportunities Beyond Borders"</span> sales
                  </p>
                  <p className="text-sm sm:text-base md:text-lg">
                      package. Get the <span className="italic">"O2O Cross-Border Service Pack"</span>.
                  </p>
              </div>

              
              <div className="flex justify-start md:justify-end w-full md:w-auto">
                  <button className="bg-[#4A45D2] w-full sm:w-auto px-6 sm:px-12 md:px-20 py-2 sm:py-3 rounded-full text-white font-bold text-sm sm:text-base transition-transform hover:scale-105">
                      Inquire Now
                  </button>
              </div>
          </div>

          
    </div>
  )
}
