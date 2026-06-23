import { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoin, coin }) => {
  const players = use(playersPromise);
  const [selectedType, setSelectedType] = useState("available")

  return (
    <div className="container mx-auto my-15">
      <div className="flex justify-between items-center mb-5">
        {selectedType === 'available' ? <h2 className="font-bold text-3xl">Available Players</h2> : <h2 className="font-bold text-3xl">Selected Players</h2>}

        <div>
          <button onClick={() => setSelectedType('available')} className={`btn ${selectedType === 'available' ? 'bg-[#E7FE29]' : ''} rounded-r-none rounded-l-2xl`}>Available</button>
          <button onClick={() => setSelectedType('selected')} className={`btn ${selectedType === 'selected' ? 'bg-[#E7FE29]' : ''} rounded-l-none rounded-r-2xl`}>Selected</button>
        </div>
      </div>

      {selectedType === 'available' ? <AvailablePlayers players={players} setCoin={setCoin} coin={coin} /> : <SelectedPlayers />}
    </div>
  );
};

export default Players;
