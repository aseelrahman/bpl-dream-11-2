import { use } from "react";

const Players = ({playersPromise}) => {
    const data = use(playersPromise)
    console.log(data.length);
    
    return (
        <div>
            Players
        </div>
    );
};

export default Players;