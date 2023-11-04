import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    let itemsCopy = items.map((item) => ({ ...item }));

    const sortItem = (itemsToSort) => {
        if (sortBy === "name") {
            return itemsToSort.slice().sort((a, b) => a.name.localeCompare(b.name));
        }
        if (sortBy === "category") {
            return itemsToSort.slice().sort((a, b) => a.category.localeCompare(b.category));
        }
        return itemsToSort;
    };

    const sortedItems = sortItem(itemsCopy);

    const handleItemClick = (item) => {
        if (onItemSelect) {
            onItemSelect(item);
        }
    };

    return (
        <main className="container mx-auto mt-10 pl-20">
            <div className="mb-4">
                <label className="mr-2">Sort By:</label>
                <button
                    className={`hover:underline px-2 py-1 rounded-md mr-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-blue-300 text-black'}`}
                    onClick={() => setSortBy("name")}>
                    Name
                </button>
                <button
                    className={`hover:underline px-2 py-1 rounded-md ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-blue-300 text-black'}`}
                    onClick={() => setSortBy("category")}>
                    Category
                </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {sortedItems.map((item) => (
                    <Item item={item} key={item.id} onSelect={() => handleItemClick(item)} />
                ))}
            </div>
        </main>
    );
}
