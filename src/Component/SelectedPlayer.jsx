import React from "react";
import { FaTrash } from "react-icons/fa";

const SelectedPlayer = ({ addPlayer,handleRemove }) => {
  console.log(addPlayer);
  return (
    <div className="max-w-11/12 mx-auto p-4">
      {/* Player Card */}
      <div className="space-y-4">
        {addPlayer.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-xl border border-gray-400"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="">
                <img
                  className="w-14 h-14  rounded-lg object-cover"
                  src={item.playerImg}
                  alt=""
                />
              </div>

              <div>
                <h3 className="font-semibold">{item.playerName}</h3>
                <p className="text-sm text-gray-500">
                  {item.role === "Batsman" && item.battingStyle}
                  {item.role === "Bowler" && item.bowlingStyle}
                  {item.role === "Wicketkeeper" && (
                    <span>Wicketkeeper • {item.battingStyle}</span>
                  )}
                  {item.role === "All-rounder" && item.role}
                </p>
              </div>
            </div>

            {/* Delete Icon */}
            <button onClick={() => handleRemove(item.playerName)} className="text-red-500 hover:text-red-800">
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-8">
        <button className="bg-gradient-to-r from-yellow-300 to-pink-400 border-none px-5 py-2 md:mb-30 mb-18 rounded-xl font-semibold border shadow-sm">
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayer;
