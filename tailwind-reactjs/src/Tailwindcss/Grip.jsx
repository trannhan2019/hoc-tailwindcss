import React from 'react';
import './style.css';

export default function Grip() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <div className="box">01</div>
        <div className="box">02</div>
        <div className="box">03</div>
        <div className="box">04</div>
        <div className="box col-span-2">05</div>
        <div className="box">06</div>
        <div className="box">07</div>
        <div className="box">08</div>
        <div className="box">09</div>
      </div>
    </div>
  );
}
