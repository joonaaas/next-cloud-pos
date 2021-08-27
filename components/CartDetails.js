const ListItem = () => {
  return (
    <li className="flex animate-pulse border-[#2A2A2A] border-b py-4">
      <div className="flex flex-row items-center justify-center w-full">
        <div>
          <div className="w-[70px] h-[70px] bg-[#4C4C4C] rounded ">Image</div>
        </div>
        <div className="w-full pl-2 space-y-2">
          <div className="w-full h-4">Item Name</div>
          <div className="w-[40%] h-3">Pcs: 1</div>
          <p>₱0.00</p>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
