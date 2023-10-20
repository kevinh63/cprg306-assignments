"use client"; 

import React, { useState } from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Shopping List</h1>
      
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
      
      <div className="mt-8">
        <Link href="../" className="hover:underline">
          Back &lt;-
        </Link>
      </div>
    </main>
  );
}
