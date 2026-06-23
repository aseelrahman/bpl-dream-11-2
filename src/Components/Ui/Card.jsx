import { FaUser, FaFlag } from "react-icons/fa";

const Card = ({player}) => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img src={player.playerImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser /> {player.playerName}
        </h2>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FaFlag />
            <p>{player.playerCountry}</p>
          </div>
          <button className="btn">Rounder</button>
        </div>
        <div className="divider"></div>
        <h2 className="font-bold">Rating ({player.rating})</h2>
        <div className="flex justify-between font-bold">
          <span>{player.battingStyle}</span>
          <span>{player.bowlingStyle}</span>
        </div>

        <div className="card-actions justify-between items-center">
          <span className="font-semibold">Price: ${player.price}</span>
          <button className="btn">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
