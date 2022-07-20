import React from "react";

export default function SearchAuthorItem({ item }) {
  return (
    <div className="flex justify-between">
      <div className="w-1/3">
        <a href="#">
          <img
            src={item.avatar}
            alt={item.name}
            className="rounded-full h-20 w-20"
          />
        </a>
      </div>
      <div className="w-2/3">
        <h5 className="text-2xl font-semibold">{item.name}</h5>
        <p className="mt-2">{item.des}</p>
      </div>
    </div>
  );
}
