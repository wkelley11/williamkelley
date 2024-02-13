import MakeGame from "../server/MakeGame";
import * as game_data from "../data";
import { game_one } from "../data";

export const Select = () => {
  return (
    <div>
      Choose a game you would like to play
      <ul>
        {Array.isArray(Object.keys(game_data)) &&
          Object.entries(game_data).map((game) => {
            return (
              <li key={game[0]}>
                <a href={`/play/${game[0]}`}>{game[1].title}</a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export const Play = () => {
  return (
    <div className="body-container">
      <MakeGame gameData={game_one} />
    </div>
  );
};

export default Play;
