import React, { use } from "react";
import PlayerCard from "./PlayerCard";

const AvailablePlayer = ({ PlayerPromice ,setavailableBalance,availableBalance }) => {
  const PlayerData = use(PlayerPromice);
  console.log(PlayerData);

  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4 mb-20 md:mb-30 max-w-11/12 mx-auto">
      {PlayerData.map((player) => (
        <PlayerCard availableBalance={availableBalance} setavailableBalance={setavailableBalance} player={player}></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayer;
