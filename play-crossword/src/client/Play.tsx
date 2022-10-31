import MakeGame from "../server/MakeGame";
import * as game_data from "../data";

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

export const Play = (game: any) => {
  const size = { rows: 5, cols: 5 };
  const clues = {
    across: [],
    down: [],
  };

  const answerGrid = [
    ".",
    "I",
    "S",
    "L",
    "E",
    ".",
    "O",
    "K",
    "A",
    "Y",
    "T",
    "W",
    "I",
    "N",
    "E",
    "W",
    "A",
    "L",
    "K",
    ".",
    "O",
    "N",
    "L",
    "Y",
    ".",
  ];

  const emptyGrid = answerGrid.map((cell) => (cell === "." ? "." : ""));

  return (
    <>
      <MakeGame size={size} clues={clues} answers={emptyGrid} title="Empty" />
      <span style={{ margin: 24 }}></span>
      <MakeGame
        size={size}
        clues={clues}
        answers={answerGrid}
        title="Answer Grid"
      />
    </>
  );
};

export default Play;
