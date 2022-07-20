import clsx from 'clsx';
import { XIcon } from '@heroicons/react/outline';

export default function MenuSide({ show, onClose }) {
  return (
    <div
      className={clsx(
        'flex w-full fixed top-0 bottom-0 right-0 transition-transform duration-500 ease-in-out shadow-xl ',
        show ? '-translate-x-[0%]' : 'translate-x-full'
      )}
    >
      <div
        onClick={() => onClose(false)}
        className="flex-1 bg-gray-600 opacity-10"
      ></div>
      <div className="w-96 bg-bg-color p-16">
        <span onClick={() => onClose(false)}>
          <XIcon className="w-7 h-7 cursor-pointer absolute top-4 right-8" />
        </span>
        <nav>menu</nav>
        <div>
          <ul>
            <li>
              <a href="#">icon</a>
            </li>
            <li>
              <a href="#">icon</a>
            </li>
            <li>
              <a href="#">icon</a>
            </li>
          </ul>
          <p>
            ©{' '}
            <span>
              Product Shop. Made With Love by ThemesIndustry
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
