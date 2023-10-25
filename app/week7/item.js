import React from 'react';

function Item({ item, onSelect }) {
  return (
    <div 
      className="p-2 w-30 h-35 bg-white rounded-xl shadow-md flex flex-col justify-center items-center space-y-2"
      onClick={() => onSelect(item)}
    >
      <ul className="text-center">
        <li className="text-lg font-bold text-indigo-600 hover:text-indigo-300 hover:underline focus:outline-none uppercase">{item.name}</li>
        <li className="text-gray-600">Buy {item.quantity} in {item.category}</li>
      </ul>
    </div>
  );
}

export default Item;
