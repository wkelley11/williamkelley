// import * as gamefile from "../sample.json";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { GameData } from "../data";
const ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const createBlankArray = (answers: string[]) => {
  return answers.map((answer: any) => (answer === "." ? "." : ""));
};

export const MakeGame = ({
  gameData,
}: {
  gameData: GameData
}) => {
  const {grid, title, size} = gameData
  const board = [];
  const [userAnswers, setUserAnswers] = useState<string[]>(() =>
    createBlankArray(grid)
  );

  /** TODO: handle user action through grid and  */
  const [direction, setDirection] = useState<"across" | "down">("across");
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    let counter = 0;
    console.log({ userAnswers });
    Array.isArray(userAnswers) &&
      userAnswers.forEach((answer: string) => {
        answer !== "" ? counter++ : counter--;
      });
    counter >= grid.length - 1 ? setCanSubmit(true) : setCanSubmit(false);
  }, [userAnswers, grid]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log({ e });
    const inputNum = e.target.id;
    const nextInputNum = (parseInt(inputNum) + 1).toString();
    const nextInput = document.getElementById(nextInputNum);
    const updatedUserAnsers = [...userAnswers]
    if (grid[parseInt(nextInputNum)] === ".") {
      const followingInpuNum = (parseInt(nextInputNum) + 1).toString();
      const followingInput = document.getElementById(followingInpuNum);
      followingInput?.focus();
    }

    if (ALPHABET.includes(e.target.value) && e.target.value !== "") {
      updatedUserAnsers[parseInt(inputNum)] = e.target.value.toUpperCase();

      const currentInput = document.getElementById(inputNum.toString());

      nextInput?.focus();
    } else if (e.target.value === "") {
      updatedUserAnsers[parseInt(inputNum)] = ""
    }
    setUserAnswers(updatedUserAnsers)
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //   console.log({ e });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isCorrect = userAnswers.every((square, index) => {
      if (square.toUpperCase() !== grid[index].toUpperCase()) {
        return false;
      } else {
        return true;
      }
    });
    window.alert(`This puzzle is ${isCorrect ? "complete!" : "not correct"}`);
    return isCorrect;
  };

  const CellRefNumber = ({num}: {num: number}) => {
    if(gameData.clues.across.find((clue: {number: number}) => clue.number === num) || 
    gameData.clues.down.find((clue: {number: number}) => clue.number === num)){
    return <div className="label">{num}</div>
    } else return <></>

  }

  // rows
  for (let row = 0; row < size.rows; row++) {
    const thisRow = [];
    // columns
    for (let col = 0; col < size.cols; col++) {
      thisRow.push(
        <td className="black">
        {grid[col + row * size.rows] === "." ? <div
          id="black"
          style={{
            backgroundColor: "black",
            border: "none",
            textAlign: "center",
            textTransform: "capitalize",
            height: "42px",
            width: "42px",
            margin: "-2px",
          }}>

          </div> : 
          <>
          <CellRefNumber num={col + row * size.rows + 1}/>
            <input
              style={{
                backgroundColor:
                grid[col + row * size.rows] === "." ? "black" : "white",
                border: "none",
                textAlign: "center",
                textTransform: "capitalize",
                height: "40px",
                width: "40px",
                margin: 0,
              }}
              type="text"
              autoComplete="off"
              maxLength={1}
              onKeyUp={(e) => handleKeyUp(e)}
              onChange={(e) => handleChange(e)}
              key={col + row * size.rows}
              id={(col + row * size.rows).toString()}
            />
          </>}

          
        </td>
      );
    }
    board.push(thisRow);
  }


  return (
    <>
      <div className="body-item-a">
      <form className="game-board" onSubmit={(e) => handleSubmit(e)} key={"answer"}>
        <p>{title}</p>
        <table id="grid">
          <thead></thead>
          <tbody>
            {Array.isArray(board) && board.map((row) => <tr>{row}</tr>)}
          </tbody>
        </table>
        <button disabled={!canSubmit}  type="submit">
          Check Puzzle
        </button>
      </form>
      </div>
     
      <div className="body-item-b">

        <h2 style={{textAlign: "left"}}>Across</h2>
        <span style={{textAlign: "left"}}>{gameData.clues.across.map((clue: {number: number, clue: string}) => {
          return <p>{clue.number}: {clue.clue}</p>
        })}</span>
        </div>
      <div className="body-item-c">
        <h2 style={{textAlign: "left"}}>Down</h2>
        <span style={{textAlign: "left"}}>{gameData.clues.down.map((clue: {number: number, clue: string}) => {
          return <p>{clue.number}: {clue.clue}</p>
        })}</span>
      </div>
    </>
  );
};

export default MakeGame;
