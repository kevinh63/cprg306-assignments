"use client";
import Link from 'next/link';
import ItemList from './item-list.js';
import Newitem from "./new-item.js";
import MealIdea from "./meal-ideas.js"; // Import the MealIdeas component
import { getItems, addItem } from '../_services/shopping-list-service';
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";

export default function Week7page() {
    const { user } = useUserAuth();

    // Check if the user is logged in
    if (!user) {
        return <p>Please log in to access the shopping list.</p>;
    }

    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const loadItems = async () => {
        const itemsData = await getItems(user.uid);
        setItems(itemsData);
    };

    useEffect(() => {
        loadItems();
    }, [user.uid]);

    async function handleAddItem(item) {
        try {
            const newItemId = await addItem(user.uid, item);
            setItems((prevItems) => [...prevItems, { id: newItemId, data: item }]);
        } catch (error) {
            console.error("Error adding item:", error.message);
        }
    }

    const handleSubmit = (item) => {
        handleAddItem(item); // Call the Firestore function to add the item
    };

    function handleItemSelect(item) {
        setSelectedItemName(item.data.name); // Update the selected item name
    }

    return (
        <div className="flex-col">
            <h1 className="text-3xl font-bold text-center mt-5 mb-5">{user.email}'s Shopping List (week10)</h1>
            <div className='mb-5'>
                <Newitem onAddItem={(item) => handleSubmit(item)}></Newitem>
            </div>
            <div className="flex justify-center">
                <div className="flex-1">
                    <ItemList items={items} onItemSelect={handleItemSelect}></ItemList>
                </div>
                <div className="flex-1">
                    <MealIdea ingredient={selectedItemName}></MealIdea>
                </div>
            </div>
            <div className="text-center hover:text-cyan-400 hover:underline p-2">
                <Link href="/">Back</Link>
            </div>
        </div>
    );
}
