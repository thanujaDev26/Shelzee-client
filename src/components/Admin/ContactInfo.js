import React from "react";

export default function ContactInfo(props) {

    return(
        <div>
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
                <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">Contact Information</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full px-4 py-2 border rounded-md"
                               placeholder="Enter contact email"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Phone</label>
                        <input type="tel" className="w-full px-4 py-2 border rounded-md"
                               placeholder="Enter contact phone"/>
                    </div>
                    <button
                        className="w-full lg:w-auto px-4 py-2 bg-[#003f5c] text-white rounded-md hover:bg-[#002b40]">Update
                    </button>
                </form>
            </div>
        </div>
    )
}