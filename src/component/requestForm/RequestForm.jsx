import React, { useState } from 'react'
import { MdOutlineFileUpload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const names = [
    'Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard',
    'Omar Alexander', 'Carlos Abbott', 'Miriam Wagner',
    'Bradley Wilkerson', 'Virginia Andrews', 'Kelly Snyder',
];

export default function RequestForm() {
    const [image, setImage] = useState(null);
    const [selectedNames, setSelectedNames] = useState([]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleRemoveImage = () => setImage(null);

    const handleSelectChange = (e) => {
        const value = e.target.value;
        if (selectedNames.includes(value)) {
            setSelectedNames(selectedNames.filter((name) => name !== value));
        } else if (value) {
            setSelectedNames([...selectedNames, value]);
        }
    };

    const handleRemoveChip = (name) => {
        setSelectedNames(selectedNames.filter((item) => item !== name));
    };

    return (
        <div className="bg-[#f6f6f6] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[3fr,1fr] font-roboto px-4 sm:px-8 py-10 sm:py-20 gap-6">
          
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                <h2 className="font-bold text-xl sm:text-2xl text-gray mb-4">
                    Request for Quotations - RFQ
                </h2>

                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
                    {[
                        ["Submit a RFQ in just 1", "minute."],
                        ["Get multiple quotations from", "verified suppliers."],
                        ["Compare and choose the best", "quotation!"]
                    ].map((text, i) => (
                        <div key={i} className="flex gap-3 items-center bg-[#f6f6f6da] p-3 rounded-lg flex-1">
                            <div className="h-6 w-6 border flex items-center justify-center text-sm font-semibold rounded-full">
                                {i + 1}
                            </div>
                            <div className="flex flex-col text-sm font-medium text-gray">
                                <p>{text[0]}</p>
                                <p>{text[1]}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-blue-600 text-sm mb-6 cursor-pointer hover:underline">Learn More</p>

               
                <form className="space-y-4">
                   
                    <div className="flex flex-col">
                        <label className="text-gray text-base sm:text-lg mb-1">
                            Product Name<span className="text-darkRed">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter a specific product name..."
                            className="border border-opacity-30 rounded-md border-gray py-2 px-3 placeholder:text-sm w-full"
                        />
                    </div>

                   
                    <div className="flex flex-col">
                        <label className="text-gray text-base sm:text-lg mb-1">
                            Product Category<span className="text-darkRed">*</span>
                        </label>
                        <select
                            onChange={handleSelectChange}
                            className="w-full border border-gray border-opacity-30 rounded-md p-2 focus:border-darkRed"
                        >
                            <option value="">Select the closest matching product category</option>
                            {names.map((name) => (
                                <option key={name} value={name}>{name}</option>
                            ))}
                        </select>

                      
                        <div className="flex flex-wrap gap-2 mt-3">
                            {selectedNames.map((name) => (
                                <div key={name} className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                    {name}
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveChip(name)}
                                        className="ml-2 text-blue-500 hover:text-blue-700 font-bold"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                  
                    <div className="flex flex-col">
                        <label className="text-gray text-base sm:text-lg mb-1">
                            About your Product<span className="text-darkRed">*</span>
                        </label>
                        <textarea
                            maxLength={3000}
                            className="border border-gray border-opacity-30 rounded-md h-36 p-3 w-full"
                        ></textarea>
                    </div>

                   
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-lg p-6 cursor-pointer hover:border-blue-400 transition w-full">
                        <input
                            type="file"
                            accept="image/*"
                            id="file-upload"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                        <label htmlFor="file-upload" className="cursor-pointer text-blue-600 flex flex-col items-center gap-2">
                            <MdOutlineFileUpload size={28} />
                            Click to Upload
                        </label>
                        <p className="text-xs text-gray-500 mt-1 text-center">PNG, JPG, JPEG allowed</p>
                    </div>

                    
                    {image && (
                        <div className="mt-4 relative inline-block">
                            <img src={image} alt="Preview" className="h-20 w-20 sm:h-24 sm:w-24 rounded-md object-cover" />
                            <button
                                type="button"
                                onClick={handleRemoveImage}
                                className="absolute bg-red-400 -top-2 -right-2 text-white p-1 rounded-full hover:bg-darkRed"
                            >
                                <RxCross2 size={12} />
                            </button>
                        </div>
                    )}

                    
                </form>
            </div>

           
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
                <h2 className="font-bold text-lg mb-2 text-gray">Request for Quotations - RFQ</h2>
                <p className="text-gray-600 text-sm">Additional info can go here...</p>
            </div>
        </div>
    );
}
