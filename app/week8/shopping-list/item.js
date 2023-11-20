function Item({ item, onSelect }) {
  const handleClick = () => {
      // onSelect function and pass the selected item as an argument
      onSelect(item);
  };

  return (
      <div 
          onClick={handleClick} // add onClick handler to handleClick
          className="p-2 w-30 h-35 bg-white rounded-xl shadow-md flex flex-col justify-center items-center space-y-2 cursor-pointer"
      >
          <ul className="text-center">
              <li className="text-lg font-bold text-indigo-600 hover:text-indigo-300 hover:underline focus:outline-none uppercase">{item.data.name}</li>
              <li className="text-gray-600">Buy {item.data.quantity} in {item.data.category}</li>
          </ul>
      </div>
  );
}

export default Item;
