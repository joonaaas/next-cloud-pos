const Card = () => {
  return (
    <div className="bg-[#93C5FD] h-26 rounded p-5">
      <div className="flex flex-row items-center justify-center w-full">
        <div className="w-full pl-2 space-y-2">
          <div className="w-full h-4">Item Name</div>
          <p>₱0.00</p>
        </div>
        <div>
          <div className="w-[70px] h-[70px] bg-[#4C4C4C] rounded ">Image</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
