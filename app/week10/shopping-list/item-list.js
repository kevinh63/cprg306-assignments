"use client";

import React from 'react';
import Item from './item.js';
import { useState } from "react";

export default function ItemList({items, onItemSelect}) {
    const [sortBy, setSortBy] = useState("name");
    
    let theItems = items.map((item) => ({ ...item.data }));

    const sortItem = () => {
        if (sortBy === 'name') {
          return items.sort((a, b) => (a.data.name || '').localeCompare(b.data.name || ''));
        }
        if (sortBy === 'category') {
          return items.sort((a, b) => (a.data.category || '').localeCompare(b.data.category || ''));
        }
        return items;
    };

    const sortedItems = sortItem();

    return(
        <main className="container mx-auto mt-10 pl-20">
            <div className="mb-4">
                <label className="mr-2">Sort by:</label>
                <button
                    className={`hover:underline px-2 py-1 rounded-md mr-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-blue-300 text-black'}`}
                    onClick={()=> setSortBy('name')}>
                    Name
                </button>
                <button
                    className={`hover:underline px-2 py-1 rounded-md ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-blue-300 text-black'}`}
                    onClick={()=> setSortBy('category')}>
                    Category
                </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {sortedItems.map((item) => (
                <Item item={item} key={item.id} onSelect={() => onItemSelect(item)} />
                ))}
            </div>
        </main>
    );
}
