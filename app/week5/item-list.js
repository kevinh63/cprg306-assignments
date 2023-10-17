"use client";
import Item from "./item";
import { useState } from "react";
import itemsData from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    let items = itemsData.map((item) => ({ ...item }));

    const sortItem = () => {
        if (sortBy === "name") {
            return items.sort((a, b) => a.name.localeCompare(b.name));
        }
        if (sortBy === "category") {
            return items.sort((a, b) => a.category.localeCompare(b.category));
        }
        return items;
    };

    const sortedItems = sortItem();

    return (
        <main className="container mx-auto mt-10">
            <div className="mb-4">
                <label className="mr-2">Sort By:</label>
                <button
                    className={`px-2 py-1 rounded-md mr-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-blue-300 text-black'}`}
                    onClick={() => setSortBy("name")}
                >
                    Name
                </button>
                <button
                    className={`px-2 py-1 rounded-md ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-blue-300 text-black'}`}
                    onClick={() => setSortBy("category")}
                >
                    Category
                </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {sortedItems.map((item) => (
                    <Item item={item} key={item.id} />
                ))}
            </div>
        </main>
    );
}
