import React from 'react';
import logoblog from "../image/logoblog.png";
import { participents } from './participents';
import '../App.css';

const Sidebar = () => {
  return (
    <div className="sidebar">  
  

         <img
          src={logoblog}
          alt="logoblog"
          className="w-full h-20 object-contain"
        />


        {/* serch bar  */}
      <div className="relative mb-4">
      <input
        type="text"
        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Search..."
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.415l4.508 4.507a1 1 0 01-1.415 1.415l-4.507-4.508zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
        </svg>
      </div>
    </div>

    {/* list of cpu members */}
    <div
      className="overflow-y-scroll "
      style={{
        height: '550px',
        scrollbarWidth: 'thin ',
        scrollbarColor: 'rgba(229, 231, 235, 0.5) rgba(229, 231, 235, 0.5)',
      }}
    >
    <ul className="space-y-2">
      {participents.map((participant) => (
          <li
            key={participant.id}
            className="px-3 py-2 rounded-md hover:bg-gray-500 transition-colors duration-200"
          >
            <div className="flex items-center">
            <img
              src={participant.image}
              alt={participant.Name}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div>
              <h5 className="text-sm font-bold">{participant.Name}</h5>
              <p className="text-xs text-gray-800">{participant.description}</p>
            </div>
          </div>

          </li>
      ))}

      </ul>
      </div>
    </div>
  );
};

export default Sidebar;