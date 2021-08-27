import ProductContainer from "./ProductContainer";
import SearchBox from "./SearchBox";

const LayoutRight = () => {
  return (
    <div className="w-[70%] h-full border-[#2A2A2A] border-r pt-4 flex flex-col">
      <div className="pb-[1.15rem] px-6 border-[#2A2A2A] border-b">
        <SearchBox />
      </div>
      <div className="flex-auto px-6 space-y-2 overflow-y-auto">
        <div className="grid grid-cols-3 gap-2 mt-4">
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
        </div>
      </div>
    </div>
  );
};

export default LayoutRight;
