import React, { useState } from "react";
import AddProductForm from "./AddProductForm";

export default function ManageProducts(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [showAddProductForm, setShowAddProductForm] = useState(false);


    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", category: "Category 1", sex: "Unisex", price: 100, inStock: true },
        { id: 2, name: "Product 2", category: "Category 2", sex: "Male", price: 150, inStock: false },

    ]);

    const filteredProducts = products.filter(product =>
        product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddProduct = (product) => {

        const newProduct = { id: products.length + 1, ...product };
        setProducts([...products, newProduct]);
        setShowAddProductForm(false);
    };

    return (
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
            <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">Manage Products</h2>

            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={() => setShowAddProductForm(!showAddProductForm)}
                    className="w-full lg:w-auto px-4 py-2 bg-[#003f5c] text-white rounded-md hover:bg-[#002b40]"
                >
                    {showAddProductForm ? "Cancel" : "Add Product"}
                </button>
                <input
                    type="text"
                    placeholder="Search Products"
                    className="px-4 py-2 border rounded-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {showAddProductForm && <AddProductForm onAddProduct={handleAddProduct} />}

            <ul>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <li key={product.id} className="flex justify-between items-center py-2">
                            <span>{product.name}</span>
                            <span>{product.inStock ? "In Stock" : "Out of Stock"}</span>
                            <div className="space-x-2">
                                <button className="text-[#003f5c]">Edit</button>
                                <button className="text-red-600">Delete</button>
                            </div>
                        </li>
                    ))
                ) : (
                    <li>No products found</li>
                )}
            </ul>
        </div>
    );
}
