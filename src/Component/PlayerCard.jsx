import React, { useState } from "react";

const PlayerCard = ({ player, setavailableBalance, availableBalance }) => {
  console.log(availableBalance);

  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="border border-base-300 rounded-2xl shadow-md p-4 bg-white">
      <img
        src={player.playerImg}
        alt={player.playerName}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-xl font-bold mt-3 flex items-center gap-2">
        <span>👤</span> {player.playerName}
      </h2>

      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-600">🏳️ {player.country}</p>
        <span className="bg-gray-200 px-3 py-1 rounded-xl text-sm font-semibold">
          {player.role}
        </span>
      </div>

      <hr className="my-3 text-gray-400" />

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

      {/* Price + Button */}
      <div className="flex items-center justify-between gap-1 text-sm">
        <p className="font-bold text-green-600 ">💰 {player.price}</p>

        <button
          onClick={() => {
            if (availableBalance < player.price) {
              alert("Check Your Balance");
              return;
            }
            setIsSelected(true);
            setavailableBalance(availableBalance - player.price);
          }}
          disabled={isSelected}
          className={`border-2 px-3 py-1 rounded-2xl text-sm font-semibold mt-2 transition-all
            ${
              isSelected
                ? "bg-green-300 text-gray-700 border-green-500"
                : "bg-base-200 text-gray-800 border-base-300 hover:border-gray-500"
            }`}
        >
          {isSelected ? "Selected" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
