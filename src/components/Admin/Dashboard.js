export default function Dashboard({ posts }) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">

            <aside className="w-full lg:w-64 bg-[#003f5c] text-white flex-shrink-0">
                <div className="p-4">
                    <h2 className="text-xl lg:text-2xl font-bold">Admin Dashboard</h2>
                    <nav className="mt-4 lg:mt-8">
                        <ul className="space-y-2 lg:space-y-4">
                            <li><a href="#" className="block text-white hover:bg-[#002b40] px-3 py-2 rounded-md">Manage Products</a></li>
                            <li><a href="#" className="block text-white hover:bg-[#002b40] px-3 py-2 rounded-md">Manage Users</a></li>
                            <li><a href="#" className="block text-white hover:bg-[#002b40] px-3 py-2 rounded-md">Manage Blogs</a></li>
                            <li><a href="#" className="block text-white hover:bg-[#002b40] px-3 py-2 rounded-md">Contact Info</a></li>
                            <li><a href="#" className="block text-white hover:bg-[#002b40] px-3 py-2 rounded-md">Advertisements</a></li>
                        </ul>
                    </nav>
                </div>
            </aside>

            <main className="flex-1 p-4 lg:p-6">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-4 lg:mb-6">
                    <h1 className="text-2xl lg:text-3xl font-bold">Dashboard</h1>
                    <div className="space-y-2 lg:space-y-0 lg:space-x-2 mt-2 lg:mt-0">
                        <button className="w-full lg:w-auto px-4 py-2 bg-[#003f5c] text-white rounded-md hover:bg-[#002b40]">Add Product</button>
                        <button className="w-full lg:w-auto px-4 py-2 bg-[#003f5c] text-white rounded-md hover:bg-[#002b40]">Add Blog</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">

                    <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">Manage Products</h2>
                        <ul>
                            <li className="flex justify-between items-center py-2">
                                <span>Product Name</span>
                                <div className="space-x-2">
                                    <button className="text-[#003f5c]">Edit</button>
                                    <button className="text-red-600">Delete</button>
                                </div>
                            </li>
                        </ul>
                    </div>

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
                        </ul>
                    </div>

                    <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">Manage Blogs</h2>
                        <ul>
                            <li className="flex justify-between items-center py-2">
                                <span>Blog Title</span>
                                <div className="space-x-2">
                                    <button className="text-[#003f5c]">Edit</button>
                                    <button className="text-red-600">Delete</button>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">Contact Information</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <input type="email" className="w-full px-4 py-2 border rounded-md" placeholder="Enter contact email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Phone</label>
                                <input type="tel" className="w-full px-4 py-2 border rounded-md" placeholder="Enter contact phone" />
                            </div>
                            <button className="w-full lg:w-auto px-4 py-2 bg-[#003f5c] text-white rounded-md hover:bg-[#002b40]">Update</button>
                        </form>
                    </div>

                    <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">Advertisements</h2>
                        <button className="w-full lg:w-auto px-4 py-2 bg-[#003f5c] text-white rounded-md hover:bg-[#002b40]">Post Advertisement</button>
                        <ul className="mt-4">
                            <li className="flex justify-between items-center py-2">
                                <span>Ad Title</span>
                                <div className="space-x-2">
                                    <button className="text-[#003f5c]">Edit</button>
                                    <button className="text-red-600">Delete</button>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </main>
        </div>
    );
}
