import SelectedCard from "../../../Ui/SelectedCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  setCoin,
  coin,
}) => {
  console.log(selectedPlayers, "selectedPlayers");
  const handleDeleteSelectedPlayer = (player) => {
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName !== player.playerName,
    );
    console.log(filteredPlayers, "filteredPlayers");
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.price);
  };

  return (
    <div>
      <div className="space-y-5">
        {selectedPlayers.length === 0 ? (
          <div className="h-100 flex items-center justify-center flex-col gap-4">
            <h2 className="font-semibold text-xl">No Players selected yet</h2>
            <p>Go to Available tab to select players</p>
          </div>
        ) : (
          selectedPlayers.map((player, index) => {
            return (
              <SelectedCard
                key={index}
                player={player}
                handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default SelectedPlayers;
