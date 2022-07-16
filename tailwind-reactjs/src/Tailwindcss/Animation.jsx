import React, { useState } from 'react';
import { clsx } from 'clsx';

export default function Animation() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex h-screen">
      <div
        className={clsx(
          'w-1/3 h-full bg-sky-500 transition duration-700 delay-300 ease-in-out',
          show && '-translate-x-full '
        )}
      ></div>
      <div className="w-2/3 bg-slate-500">
        <button onClick={() => setShow(!show)}>show</button>
      </div>
    </div>
  );
}
