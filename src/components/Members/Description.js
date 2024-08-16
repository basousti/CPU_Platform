import React from "react";
import "../../App.css";
import comment from "../../image/comment.png";
import like from "../../image/like.png";
import userImage from '../../image/utils.jpeg';
import { participents } from '../participents';

export default function description() {
  return (

    <div className="overflow-y-scroll "
      style={{
        height: '550px',
        scrollbarWidth: 'thin ',
        scrollbarColor: 'rgba(229, 231, 235, 0.5) rgba(229, 231, 235, 0.5)',
      }}>
    {participents.map((participant) => (

    <div className="flex-wrap w-auto mx-auto my-6 p-4 border rounded-lg shadow-md bg-white" key={participant.id}>
      <div className="flex items-center mb-4">
        <img src={userImage} 
        alt="user"
        className="w-12 h-12 rounded-full mr-3"
        />

        <div className="ml-4">
          <h2 className="text-lg font-semibold">{participant.Name}</h2>
          <p className="text-gray-500">{participant.description}</p>
        </div>
      </div>
      <hr className="bg-gray-400 h-0.5 mb-4" />
      <p className="text-gray-900 mb-4">
        Le président parfait d'un club est un leader visionnaire qui inspire et
        motive les membres à atteindre des objectifs communs. Il fait preuve de
        décision et d'intégrité, tout en étant à l'écoute des besoins de ses
        membres.
      </p>

      <div className="flex justify-between items-center text-gray-500 mb-3">
        <span>20 Likes, 0 comments</span>
      </div>
      <hr className="bg-gray-400 h-0.5 mb-4" />

      <div className="flex ">
        <button className="flex items-center ml-28 mb-3">
          <img src={like} alt="like" className="w-5 h-5 object-contain mr-3" />
          <span>Like</span>
        </button>

        <button className="flex items-center ml-52 mb-3">
          <img
            src={comment}
            alt="comment"
            className="w-5 h-5 object-contain mr-3"
          />
          <span>Comment</span>
        </button>
      </div>
      <hr className="bg-gray-400 h-0.5 mb-4" />

      <input
        type="text"
        placeholder="Write your comment here"
        className="w-full mt-4 p-2 border-2 rounded-lg"
      />
    </div>
    
    ))}
    </div>);
}
