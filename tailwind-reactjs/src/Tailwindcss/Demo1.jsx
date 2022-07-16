import React from 'react';

export default function Demo1() {
  return (
    <div className="p-2">
      <div className="flex rounded-lg shadow-md overflow-hidden">
        <img
          src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
          alt=""
          className="w-48"
        />
        <div className="p-5 space-y-5">
          <p className="text-md md:text-lg font-medium">
            “Tailwind “Tailwind CSS CSS is is the the only only
            framework framework that that I've I've seen seen scale
            scale on on large large teams. teams. It’s It’s easy easy
            to to customize, customize, adapts adapts to to any any
            design, design, and and the the build build size size is
            is tiny.” tiny.
          </p>
          <div className="font-medium">
            <p className="text-sky-500">Sarah Dayan</p>
            <p className="text-slate-700">Staff Engineer, Algolia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
