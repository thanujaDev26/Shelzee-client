import React, { useState } from 'react';
import ManageProducts from "./ManageProducts";
import ManageUsers from "./ManageUsers";
import ManageBlogs from "./ManageBlogs";
import ContactInfo from "./ContactInfo";
import Advertisements from "./Advertisements";
import {Link} from "react-router-dom";

export default function Dashboard({ posts }) {
    const [activeSection, setActiveSection] = useState('manageProducts');

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'manageProducts':
               return <div>
                    <ManageProducts/>
                </div>
            case 'manageUsers':
                return (
                    <>
                        <ManageUsers/>
                    </>
                );
            case 'manageBlogs':
                return (
                    <div>
                        <ManageBlogs/>
                    </div>
                );
            case 'contactInfo':
                return (
                    <div>
                        <ContactInfo/>
                    </div>
                );
            case 'advertisements':
                return (
                    <div>
                        <Advertisements/>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
            <aside className="w-full lg:w-64 bg-[#003f5c] text-white flex-shrink-0">
                <div className="p-4">
                    <h2 className="text-xl lg:text-2xl font-bold">Admin Dashboard</h2>
                    <nav className="mt-4 lg:mt-8">
                        <ul className="space-y-2 lg:space-y-4">
                            <li>
                                <Link
                                    to="/manage-products"
                                   className="block text-white hover:bg-[#002b40] px-3 py-2 rounded-md"
                                   onClick={() => setActiveSection('manageProducts')}>
                                    Manage Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/manage-users"
                                   className="block text-white hover:bg-[#002b40] px-3 py-2 rounded-md"
                                   onClick={() => setActiveSection('manageUsers')}>
                                    Manage Users
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/manage-blogs"
                                   className="block text-white hover:bg-[#002b40] px-3 py-2 rounded-md"
                                   onClick={() => setActiveSection('manageBlogs')}>
                                    Manage Blogs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/manage-info"
                                   className="block text-white hover:bg-[#002b40] px-3 py-2 rounded-md"
                                   onClick={() => setActiveSection('contactInfo')}>
                                    Contact Info
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/manage-adds"
                                   className="block text-white hover:bg-[#002b40] px-3 py-2 rounded-md"
                                   onClick={() => setActiveSection('advertisements')}>
                                    Advertisements
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            <main className="flex-1 p-4 lg:p-6">
                {renderActiveSection()}
            </main>
        </div>
    );
}
