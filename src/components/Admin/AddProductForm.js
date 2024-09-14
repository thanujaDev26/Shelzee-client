import React, { useState } from "react";

export default function AddProductForm({ onAddProduct }) {
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [sex, setSex] = useState("");
    const [price, setPrice] = useState("");
    const [inStock, setInStock] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct({ productName, productCategory, sex, price, inStock });
        setProductName("");
        setProductCategory("");
        setSex("");
        setPrice("");
        setInStock(true);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">Add New Product</h2>

            <div className="mb-4">
                <label className="block text-gray-700">Product Name</label>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Enter product name"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Category</label>
                <input
                    type="text"
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Enter product category"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Sex</label>
                <input
                    type="text"
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Enter sex (e.g., unisex)"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Price</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Enter product price"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        checked={inStock}
                        onChange={(e) => setInStock(e.target.checked)}
                        className="form-checkbox"
                    />
                    <span className="ml-2 text-gray-700">In Stock</span>
                </label>
            </div>

            <button type="submit" className="w-full lg:w-auto px-4 py-2 bg-[#003f5c] text-white rounded-md hover:bg-[#002b40]">Add Product</button>
        </form>
    );
}
