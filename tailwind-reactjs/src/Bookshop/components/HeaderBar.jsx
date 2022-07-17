import { Menu } from '@headlessui/react';
import {
  ChevronDownIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/solid';
import LogoIcon from '../../assets/images/logo.png';

const mostWanted = [
  'Love Does',
  'No One Belongs',
  'As I Lay Dying',
  'Life is Elsewhere',
  'The Road',
  'Why Me?',
];
const classic = [
  'Lorna Doone',
  'Lord of Flies',
  'Kidnapped',
  'End World',
];

export default function HeaderBar() {
  return (
    <header className="w-full h-[85px] bg-bg-color border shadow-lg">
      <div className="container h-full mx-auto px-4 flex justify-between">
        <div className="h-full flex justify-center items-center">
          <a href="#" className="inline-block">
            <img className="w-[85px]" src={LogoIcon} alt="" />
          </a>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <ul className="flex gap-10">
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
                  className="absolute w-[85%] right-5 border rounded shadow-md bg-bg-color"
                >
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 py-4 text-gray-500 ">
                    <div className="border-r-2 border-dotted px-5">
                      <div>
                        <h5 className="text-xl font-semibold">
                          Most Wanted
                        </h5>
                        <ul className="mt-2">
                          {mostWanted.map((item, idx) => (
                            <Menu.Item
                              as="li"
                              key={idx}
                              className="mt-2"
                            >
                              <ChevronDoubleRightIcon className="w-4 h-4 inline-flex" />
                              <a
                                className="ml-1 hover:text-hover-color hover:translate-x-2 inline-block transition-transform duration-300"
                                href="#"
                              >
                                {item}
                              </a>
                            </Menu.Item>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4">
                        <h5 className="text-xl font-semibold">
                          Classic
                        </h5>
                        <ul className="mt-2">
                          {classic.map((item, idx) => (
                            <Menu.Item
                              as="li"
                              key={idx}
                              className="mt-2"
                            >
                              <ChevronDoubleRightIcon className="w-4 h-4 inline-flex" />
                              <a className="ml-1" href="#">
                                {item}
                              </a>
                            </Menu.Item>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="border-r-2 border-dotted px-5">
                      <ul>
                        <li>
                          <i className="lni-angle-double-right right-arrow"></i>
                          <a
                            className="dropdown-item"
                            href="product-listing.html"
                          >
                            Lorna Doone
                          </a>
                        </li>
                        <li>
                          <i className="lni-angle-double-right right-arrow"></i>
                          <a
                            className="dropdown-item"
                            href="product-listing.html"
                          >
                            Lord of Flies
                          </a>
                        </li>
                        <li>
                          <i className="lni-angle-double-right right-arrow"></i>
                          <a
                            className="dropdown-item"
                            href="product-listing.html"
                          >
                            Kidnapped
                          </a>
                        </li>
                        <li>
                          <i className="lni-angle-double-right right-arrow"></i>
                          <a
                            className="dropdown-item"
                            href="product-listing.html"
                          >
                            End World
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-2 px-4">
                      <h5 className="dropdown-title text-left">
                        Featured Items{' '}
                      </h5>
                      <div className="carousel-menu mt-4">
                        <div className="featured-megamenu-carousel owl-carousel owl-theme">
                          <div className="item ">
                            <img
                              src="img\shop1.jpg"
                              alt="shop-image"
                            />
                          </div>
                          <div className="item">
                            <img
                              src="img\shop2.jpg"
                              alt="shop-image"
                            />
                          </div>
                        </div>
                        <i className="lni-chevron-left ini-customPrevBtn"></i>
                        <i className="lni-chevron-right ini-customNextBtn"></i>
                      </div>
                      <p className="mt-4 megamenu-slider-para">
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text
                      </p>
                      <a
                        href="product-listing.html"
                        className="btn black-border-color-yellow-gradient-btn slider-btn text-left"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </Menu.Items>
              </Menu>
              <li className="p-4 font-bold">sdfasdf</li>
              <li className="p-4 font-bold">sdfasdf</li>
              <li className="p-4 font-bold">sdfasdf</li>
            </ul>
          </div>
          <div>cart</div>
        </div>
      </div>
    </header>
  );
}
