import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import { Menu } from '@headlessui/react';

export default function MenuItem({ title, listItem }) {
  return (
    <div>
      <h5 className="text-xl font-semibold">{title}</h5>
      <ul className="mt-2">
        {listItem.map((item, idx) => (
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
      </ul>
    </div>
  );
}
