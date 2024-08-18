import React from "react";

export default function ManageUsers() {

    return(
        <div>
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
                <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">Manage Users</h2>
                <ul>
                    <li className="flex justify-between items-center py-2">
                        <span>User Name</span>
                        <div className="space-x-2">
                            <button className="text-[#003f5c]">Edit</button>
                            <button className="text-red-600">Delete</button>
                        </div>
                    </li>
                    {/* Add more user items here */}
                </ul>
            </div>
        </div>
    )
}