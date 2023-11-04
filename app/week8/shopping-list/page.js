"use client"; 

import React, { useState } from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(""); 

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    let cleanName = item.name.split(',')[0].trim(); 
    cleanName = cleanName.replace(/[^a-zA-Z\s]+$/, ""); 
    setSelectedItemName(cleanName);
  };
  

  return (
    <main >
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping List</h1>
      
      <div className="flex">
        <div>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
      
      <div className="mt-8">
        <Link href="../" className="hover:underline">
          Back &lt;-
        </Link>
      </div>
    </main>
  );
}
