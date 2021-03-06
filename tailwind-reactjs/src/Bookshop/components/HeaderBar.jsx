import { useState } from 'react';
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import MenuMain from './MenuMain';
import SearchBox from './SearchBox';
import LogoIcon from '../../assets/images/logo.png';
import ShopBox from './ShopBox';
import MenuSide from './MenuSide';

export default function HeaderBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="w-full h-[85px] bg-bg-color border shadow-lg">
      <div className="container h-full mx-auto px-4 flex justify-between">
        <div className="h-full flex justify-center items-center">
          <a href="#" className="inline-block">
            <img className="w-[85px]" src={LogoIcon} alt="" />
          </a>
        </div>
        <div className="flex">
          <MenuMain />
          <div className="h-full flex items-center justify-center ml-16">
            <ul className="flex justify-between items-center px-5">
              <li
                className="px-3 hover:text-hover-color flex items-center"
                onClick={() => setShowSearch(true)}
              >
                <button>
                  <SearchIcon className="w-6 h-6" />
                </button>
              </li>

              <li className="px-3 hover:text-hover-color flex items-center">
                <button onClick={() => setShowShop(true)}>
                  <ShoppingCartIcon className="w-6 h-6" />
                </button>
              </li>
              <li className="px-3 hover:text-hover-color flex items-center">
                <button onClick={() => setShowMenu(true)}>
                  <MenuIcon className="w-6 h-6" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Search Box */}
      <SearchBox show={showSearch} onClose={setShowSearch} />
      {/* Shop Box */}
      <ShopBox show={showShop} onClose={setShowShop} />
      {/* MenuBox */}
      <MenuSide show={showMenu} onClose={setShowMenu} />
    </header>
  );
}
