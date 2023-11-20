"use client"

import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
};

const fetchMealDetails = async (mealId) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals[0];
};

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
    const [expandedMeal, setExpandedMeal] = useState(null);

    const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    };

    const handleMealClick = async (mealId) => {
        if (expandedMeal && expandedMeal.idMeal === mealId) {
            setExpandedMeal(null);
        } else {
            const mealDetails = await fetchMealDetails(mealId);
            setExpandedMeal(mealDetails);
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="bg-white p-8 rounded-lg shadow-md absolute right-20 h-[90%] w-1/3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-track-gray-800">
            <h2 className="text-2xl mb-4 text-center">Meal Ideas for {ingredient}</h2>
            <ul className="divide-y divide-gray-300 max-h-[calc(100%-3rem)]">
                {meals && meals.map(meal => (
                    <li key={meal.idMeal} className="py-2">
                        <span 
                            onClick={() => handleMealClick(meal.idMeal)}
                            className="cursor-pointer text-blue-600 hover:underline"
                        >
                            {meal.strMeal}
                        </span>
                        {expandedMeal && expandedMeal.idMeal === meal.idMeal && (
                            <div className="mt-2">
                                <strong className="block mb-2">Ingredients needed:</strong>
                                <ul className="list-disc pl-5">
                                    {Array.from({ length: 20 }).map((_, index) => {
                                        const ingredientName = expandedMeal[`strIngredient${index + 1}`];
                                        const ingredientMeasure = expandedMeal[`strMeasure${index + 1}`];
                                        if (ingredientName && ingredientName.trim() !== "") {
                                            return (
                                                <li key={ingredientName} className="mb-1">
                                                    {ingredientName} ({ingredientMeasure})
                                                </li>
                                            );
                                        }
                                        return null;
                                    })}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealIdeas;
