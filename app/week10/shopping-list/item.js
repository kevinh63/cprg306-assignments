function Item({ item, onSelect }) {
  const handleClick = () => {
    // onSelect function and pass the selected item as an argument
    onSelect(item);
  };

  return (
    <div
      onClick={handleClick} // Add onClick handler to handleClick
      className="p-2 m-4 max-w-sm rounded-md shadow-lg flex flex-col justify-center items-center space-y-2 bg-white cursor-pointer"
    >
      <ul className="text-center">
        {/* Assuming item.data contains the actual item data */}
        <li className="text-lg font-bold text-indigo-600 hover:text-indigo-300 hover:underline focus:outline-none uppercase">{item.data.name}</li>
        <li className="text-gray-600">Buy {item.data.quantity} in {item.data.category}</li>
      </ul>
    </div>
  );
}

export default Item;
