import { use } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";

const Players = ({playersPromise}) => {
    const players = use(playersPromise)
 
    
    return (
        <div className="container mx-auto">
            Players: {players.length}
            <AvailablePlayers players={players} />
        </div>
    );
};

export default Players;