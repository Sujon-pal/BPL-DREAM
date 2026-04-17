import React, { use } from "react";

const AvailablePlayer = ({ PlayerPromice }) => {
  const PlayerData = use(PlayerPromice);
  console.log(PlayerData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {PlayerData.map((player) => (
        <div className="border border-base-300 rounded-2xl shadow-md p-4 bg-white">
          {/* Image */}
          <img
            src={player.playerImg}
            alt={player.playerName}
            className="w-full h-48 object-cover rounded-lg"
          />

          {/* Name */}
          <h2 className="text-xl font-bold mt-3 flex items-center gap-2">
            <span>👤</span> {player.playerName}
          </h2>

          {/* Country + Role */}
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-600">🏳️ {player.country}</p>
            <span className="bg-gray-200 px-3 py-1 rounded-xl text-sm font-semibold">
              {player.role}
            </span>
          </div>

          <hr className="my-3 text-gray-400" />

       
          {/* Details */}
          <div className="flex flex-col gap-1 text-sm">
            <div className="flex justify-between">
              <span className="font-bold text-gray-800">⭐ Rating:</span>
              <span className="px-4 p-1 bg-gray-100 rounded-2xl">
                {player.rating}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-gray-800">🏏 Bat:</span>
              <span className="px-3 p-1 bg-gray-100 rounded-2xl">
                {player.battingStyle}
              </span>
            </div>

            {player.role !== "Batsman" && player.role !== "Wicketkeeper" && (
              <div className="flex justify-between">
                <span className="font-semibold text-gray-800">🎯 Bowl:</span>
                <span className="px-3 p-1 bg-gray-100 rounded-2xl">
                  {player.bowlingStyle}
                </span>
              </div>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between gap-1 text-sm">
            <p className="font-bold text-green-600">💰 {player.price}</p>
            <button className=" border-2 border-base-300 px-3 py-1 rounded-2xl bg-base-200 text-sm text-gray-800 cursor-pointer shadow-2xl hover:border-gray-500 font-semibold mt-2">
              Choose Player
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayer;
