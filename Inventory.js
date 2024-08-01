import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const InventoryApp = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  
  const categories = {
    Electronics: ['Mobile', 'Laptop', 'Tablet'],
    Clothing: ['Men', 'Women', 'Kids'],
    Groceries: ['Fruits', 'Vegetables', 'Dairy'],
  };

  const addItem = () => {
    if (itemName && itemPrice && itemQuantity && category && subcategory) {
      if (editIndex !== null) {
        const updatedItems = items.map((item, index) => (
          index === editIndex
            ? { name: itemName, price: itemPrice, quantity: itemQuantity, category, subcategory }
            : item
        ));
        setItems(updatedItems);
        setEditIndex(null);
        toast.success('Item updated successfully!'); 
      } else {
        setItems([...items, { name: itemName, price: itemPrice, quantity: itemQuantity, category, subcategory }]);
        toast.success('Item added successfully!'); 
      }
      setItemName('');
      setItemPrice('');
      setItemQuantity('');
      setCategory('');
      setSubcategory('');
    } else {
      toast.error('Please fill in all fields!'); 
    }
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    toast.success('Item deleted successfully!'); 
  };

  const startEdit = (index) => {
    const { name, price, quantity, category, subcategory } = items[index];
    setItemName(name);
    setItemPrice(price);
    setItemQuantity(quantity);
    setCategory(category);
    setSubcategory(subcategory);
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">Inventory Management</h1>
        <div className="flex flex-col mt-6 space-y-4">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSubcategory(''); 
            }}
            className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          >
            <option value="">Select Category</option>
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            disabled={!category} 
          >
            <option value="">Select Subcategory</option>
            {category && categories[category].map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>

          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Item Name"
            className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <input
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            placeholder="Item Price"
            className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <input
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
            placeholder="Item Quantity"
            className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <button onClick={addItem} className="bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-700 transition w-full">Add Item</button>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">Inventory List</h2>
          {items.length === 0 ? (
            <p className="text-gray-500">No items in inventory.</p>
          ) : (
            <table className="min-w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Name</th>
                  <th className="border border-gray-300 p-3 text-left">Price</th>
                  <th className="border border-gray-300 p-3 text-left">Quantity</th>
                  <th className="border border-gray-300 p-3 text-left">Category</th>
                  <th className="border border-gray-300 p-3 text-left">Subcategory</th>
                  <th className="border border-gray-300 p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="border border-gray-300 p-3">{item.name}</td>
                    <td className="border border-gray-300 p-3">${item.price}</td>
                    <td className="border border-gray-300 p-3">{item.quantity}</td>
                    <td className="border border-gray-300 p-3">{item.category}</td>
                    <td className="border border-gray-300 p-3">{item.subcategory}</td>
                    <td className="border border-gray-300 p-3 flex space-x-2">
                      <button onClick={() => startEdit(index)} className="text-yellow-500 hover:underline flex items-center">
                        <FaEdit className="mr-1" /> Edit
                      </button>
                      <button onClick={() => deleteItem(index)} className="text-red-500 hover:underline flex items-center">
                        <FaTrash className="mr-1" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <ToastContainer /> 
    </div>
  );
};

export default InventoryApp;
