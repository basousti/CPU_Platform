import React from "react";
import "../../App.css";
import cpu1 from "../../image/Cpu1.png";
import Description from "./Description";

export default function Container() {
  return (
    <div className="container">
        <div className="flex w-auto h-auto border rounded-lg bg-white shadow-md p-2">
          <img
            src={cpu1}
            alt="cpu1"
            className="w-10 h-10 object-contain mr-3"
          />
          <input
            type="text"
            className="w-4/5 py-2 px-2y text-gray-700 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="  What's on your mind , CPU member..."
          />
          <button className="w-20 px-2 py-1 bg-blue-500 text-white rounded-xl mx-3">
            Post
          </button>
        </div>
        <Description/>
      </div>
  );
}
