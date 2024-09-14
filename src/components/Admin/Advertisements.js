import React from "react";

export default function Advertisements(){

    return(
        <div>
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
                <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">Advertisements</h2>
                <button
                    className="w-full lg:w-auto px-4 py-2 bg-[#003f5c] text-white rounded-md hover:bg-[#002b40]">Post
                    Advertisement
                </button>
                <ul className="mt-4">
                    <li className="flex justify-between items-center py-2">
                        <span>Ad Title</span>
                        <div className="space-x-2">
                            <button className="text-[#003f5c]">Edit</button>
                            <button className="text-red-600">Delete</button>
                        </div>
                    </li>
                    {/* Add more ad items here */}
                </ul>
            </div>
        </div>
    )
}