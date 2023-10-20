"use client";
import React, { useState } from 'react';

const NewItem = ({onAddItem}) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow" >
      <h2 className="text-2xl mb-4 text-center">Adding New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" />
        </div>

        
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantity:
          </label>
          <input type="number" id="quantity" min="1" max="99" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} required className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" />
        </div>

        
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category:
          </label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500">
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        
        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewItem;