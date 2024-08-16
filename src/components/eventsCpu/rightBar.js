import React from "react";
import "../../App.css";
import { events } from "./list";
import cpu2 from "../../image/logoblog.png";

const RightBar = () => {
  return (
    <div className="righter">
      <div
        className="overflow-y-scroll"
        style={{
          height: "550px",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(229, 231, 235, 0.5) rgba(229, 231, 235, 0.5)",}}>

        {events.map((event) => (
          <div
            className="flex-wrap w-auto mx-auto my-6 px-2 border rounded-lg shadow-md bg-white" key={event.id}>
            <div className="flex items-center mb-4" >
              <img
                src={cpu2}
                alt="cpu2"
                className="w-20 h-20 object-contain mr-3"
              />
              <div className="ml-4">
                <h2 className="text-gray-900 text-lg font-semibold">{event.name}</h2>
                <p className="text-gray-500">24/04/2024</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightBar;
