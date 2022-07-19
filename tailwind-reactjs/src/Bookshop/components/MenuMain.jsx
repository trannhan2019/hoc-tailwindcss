import { Menu } from '@headlessui/react';
import {
  ChevronDownIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/solid';

import Shop1 from '../../assets/images/shop1.jpg';
import FeatureProduct from '../../assets/images/featured-product.jpg';

import MenuItem from './MenuItem';
import {
  mostWanted,
  classic,
  novel,
  history,
  categories,
  others,
  pages,
  authors,
} from './listItemMenu';

export default function MenuMain() {
  return (
    <div className="items-center hidden lg:flex">
      <ul className="flex gap-4">
        <Menu as="li">
          <Menu.Button className=" p-4 font-bold hover:text-hover-color">
            HOME
          </Menu.Button>
        </Menu>
        <Menu as="li">
          <Menu.Button className="inline-flex items-center p-4 font-bold hover:text-hover-color">
            BOOKS
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
          <Menu.Items
            as="div"
            className="absolute w-[85%] right-10 border rounded shadow-md bg-bg-color"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 py-4 text-gray-500 px-16">
              <div className="border-r-2 border-dotted px-4">
                <div>
                  <MenuItem
                    title="Most Wanted"
                    listItem={mostWanted}
                  />
                </div>
                <div className="mt-4">
                  <MenuItem title="Classic" listItem={classic} />
                </div>
              </div>
              <div className="border-r-2 border-dotted px-5">
                <div>
                  <MenuItem title="NOVEL's" listItem={novel} />
                </div>
                <div className="mt-4">
                  <MenuItem title="HISTORY" listItem={history} />
                </div>
              </div>
              <div className="col-span-2 px-4">
                <h5 className="text-xl font-semibold">
                  Featured Items
                </h5>
                <div className="mt-4">
                  <div className="item ">
                    <img src={Shop1} alt="shop-image" />
                  </div>
                </div>
                <p className="text-xl mt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block px-6 py-2 border border-black text-gray-800 font-semibold hover:border-hover-color hover:bg-hover-color hover:text-white"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </Menu.Items>
        </Menu>

        <Menu>
          <Menu.Button className="inline-flex items-center p-4 font-bold hover:text-hover-color">
            E-BOOKS
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
          <Menu.Items
            as="div"
            className="absolute w-[85%] top-[80px] right-10 border rounded shadow-md bg-bg-color"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 py-4 text-gray-500 px-8">
              <div className="border-r-2 border-dotted px-4">
                <div>
                  <MenuItem
                    title="Categories"
                    listItem={categories}
                  />
                </div>
              </div>

              <div className="border-r-2 border-dotted px-5">
                <div>
                  <MenuItem title="Others" listItem={others} />
                </div>
              </div>

              <div className="border-r-2 border-dotted px-5">
                <h5 className="text-xl font-semibold">Author's</h5>
                <div className="flex flex-col">
                  {authors.map((item) => (
                    <div key={item.name} className="flex">
                      <div className="flex items-center">
                        <img
                          className="w-12 h-12 rounded-full"
                          src={item.avatar}
                          alt={item.name}
                        />
                      </div>
                      <div className="w-[130px] ml-2 flex items-center py-5 px-2 border-b-[1px]">
                        <h6 className="hover:text-hover-color hover:translate-x-2 inline-block transition-transform duration-300">
                          <a href="#">{item.name}</a>
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4">
                <img src={FeatureProduct} alt="" />
              </div>
            </div>
          </Menu.Items>
        </Menu>

        <Menu as="li">
          <Menu.Button className="inline-flex items-center p-4 font-bold hover:text-hover-color">
            BOOKS
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
          <Menu.Items
            as="ul"
            className="absolute border rounded shadow-md bg-bg-color w-52 px-4 py-4"
          >
            {pages.map((item, idx) => (
              <Menu.Item as="li" key={idx} className="mt-3">
                <ChevronDoubleRightIcon className="w-4 h-4 inline-flex" />
                <a
                  className="ml-1 hover:text-hover-color hover:translate-x-2 inline-block transition-transform duration-300"
                  href="#"
                >
                  {item}
                </a>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
        <Menu as="li">
          <Menu.Button className=" p-4 font-bold hover:text-hover-color">
            CONTACT
          </Menu.Button>
        </Menu>
      </ul>
    </div>
  );
}
