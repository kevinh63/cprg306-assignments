import React from 'react';

function Item({ item }) {
  return (
    <div className="p-2 w-30 h-35 bg-white rounded-xl shadow-md flex flex-col justify-center items-center space-y-2">
      <ul className="text-center">
        <li className="text-lg font-bold text-indigo-600 uppercase">{item.name}</li>
        <li className="text-gray-600">Buy {item.quantity} in {item.category}</li>
      </ul>
    </div>
  );
}

export default Item;
