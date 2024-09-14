import React from "react";

export default function ManageBlogs(props) {

    return(
        <div>
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
                <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">Manage Blogs</h2>
                <button className="w-full lg:w-auto px-4 py-2 bg-[#003f5c] text-white rounded-md hover:bg-[#002b40]">Add
                    Blog
                </button>
                <ul className="mt-4">
                    <li className="flex justify-between items-center py-2">
                        <span>Blog Title</span>
                        <div className="space-x-2">
                            <button className="text-[#003f5c]">Edit</button>
                            <button className="text-red-600">Delete</button>
                        </div>
                    </li>
                    {/* Add more blog items here */}
                </ul>
            </div>
        </div>
    )
}