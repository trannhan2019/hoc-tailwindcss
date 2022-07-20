import { ShoppingBagIcon, EyeIcon } from "@heroicons/react/outline";

export default function SearchFillterItem({ item }) {
  return (
    <div className="flex mb-5">
      <div className="w-1/3">
        <img src={item.img} alt="" />
      </div>
      <div className="w-2/3 px-3 ml-2">
        <h5 className="text-xl font-semibold text-gray-600">{item.h5}</h5>
        <p>{item.p}</p>
        <div className="flex justify-start items-center mt-3">
          <button className=" flex justify-center items-center w-8 h-8 border border-black hover:bg-hover-color hover:text-white hover:border-none">
            <ShoppingBagIcon className="h-4 w-4" />
          </button>
          <button className=" ml-2 flex justify-center items-center w-8 h-8 border border-black hover:bg-hover-color hover:text-white hover:border-none">
            <EyeIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
