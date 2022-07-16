import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <header className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff]">DEFI</h1>
        </div>
        <div>
          <ul className="hidden md:flex text-white items-center">
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className="ml-4">Use Defi</button>
          </ul>
        </div>
        {/* Hamburger menu */}
        <div
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setNav(!nav)}
        >
          {nav ? (
            <XIcon className="h-8 w-8 " />
          ) : (
            <MenuIcon className="h-8 w-8 " />
          )}
        </div>
        {/* Hamburger menu */}
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center'
              : 'absolute left-[-100%]'
          }
        >
          <ul>
            <li className="text-2xl">Platform</li>
            <li className="text-2xl">Developers</li>
            <li className="text-2xl">Community</li>
            <li className="text-2xl">About</li>
            <button className="m-8">Use Defi</button>
          </ul>
        </div>
      </div>
    </header>
  );
}
