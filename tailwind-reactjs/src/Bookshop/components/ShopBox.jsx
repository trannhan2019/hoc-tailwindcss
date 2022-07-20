import clsx from 'clsx';
import { XIcon } from '@heroicons/react/outline';
import { listSearchFillter } from './listSearchFiller';
import SearchFillterItem from './SearchFillterItem';

export default function ShopBox({ show, onClose }) {
  return (
    <div
      className={clsx(
        'flex flex-col p-10 fixed top-0 right-0 bottom-0 w-[400px] bg-bg-color transition-transform duration-300 ease-in-out shadow-xl',
        show ? '-translate-x-[3%]' : 'translate-x-full'
      )}
    >
      <div className="flex justify-end">
        <button
          onClick={() => onClose(false)}
          className="hover:text-hover-color"
        >
          <XIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="mt-6">
        <div className="text-2xl">
          <h4 className="text-3xl font-semibold">Shop Cart</h4>
        </div>
        <div className="h-[37vh] overflow-x-hidden overflow-y-auto mt-5 scrollbar">
          {listSearchFillter.map((item) => (
            <SearchFillterItem item={item} key={item.h5} />
          ))}
        </div>
      </div>
      <div className="mt-4 px-4">
        <div className="text-left">
          <h4 className="text-3xl font-semibold">Total:100$</h4>
        </div>
        <div className="mt-4 text-white font-bold">
          <button className="px-8 py-2 bg-[#62ab00] hover:bg-hover-color transition-colors duration-500">
            View Bag
          </button>
          <button className="px-8 py-2 bg-hover-color ml-2 hover:bg-[#62ab00] transition-colors duration-500">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
