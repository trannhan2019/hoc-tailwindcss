import React from 'react';
import clsx from 'clsx';
import { XIcon } from '@heroicons/react/outline';

export default function SearchBox({ show, onClose }) {
  return (
    <div
      className={clsx(
        'flex flex-col p-10 fixed top-0 right-0 bottom-0 w-[400px] bg-bg-color transition-transform duration-300 ease-in-out shadow-xl',
        show ? '-translate-x-[5%]' : 'translate-x-full'
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
      <div className="mt-8">
        <form>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
            Your Email
          </label>
          <div className="relative">
            <input
              type="text"
              className="block p-4 pl-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-hover-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div className="mt-6">
        <div className="text-2xl">
          <h4>Filtered Items</h4>
        </div>
        <div className="h-[37vh] overflow-x-hidden overflow-y-auto">
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h5></h5>
              <p></p>
              <div>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>author</div>
    </div>
  );
}
