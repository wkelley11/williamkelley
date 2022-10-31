// import * as gamefile from "../sample.json";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const createBlankArray = (answers: string[]) => {
  return answers.map((answer: any) => (answer === "." ? "." : ""));
};

export const MakeGame = ({
  size,
  clues,
  answers,
  title,
}: {
  size: { rows: number; cols: number };
  clues: { across: string[]; down: string[] };
  answers: string[];
  title: string;
}) => {
  const board = [];
  const [userAnswers, setUserAnswers] = useState<string[]>(() =>
    createBlankArray(answers)
  );
  const [direction, setDirection] = useState<"across" | "down">("across");
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    let counter = 0;
    console.log({ userAnswers });
    Array.isArray(userAnswers) &&
      userAnswers.forEach((answer: string) => {
        answer !== "" ? counter++ : counter--;
      });
    counter >= answers.length - 1 ? setCanSubmit(true) : setCanSubmit(false);
  }, [userAnswers, answers.length]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log({ e });
    const inputNum = e.target.id;
    const nextInputNum = (parseInt(inputNum) + 1).toString();
    const nextInput = document.getElementById(nextInputNum);
    if (answers[parseInt(nextInputNum)] === ".") {
      const followingInpuNum = (parseInt(nextInputNum) + 1).toString();
      const followingInput = document.getElementById(followingInpuNum);
      followingInput?.focus();
    }

    if (ALPHABET.includes(e.target.value) && e.target.value !== "") {
      userAnswers[parseInt(inputNum)] = e.target.value.toUpperCase();
      // const currentInput = document.getElementById(inputNum.toString());

      nextInput?.focus();
    } else if (e.target.value === "") {
      userAnswers[parseInt(inputNum)] = "";
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //   console.log({ e });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isCorrect = userAnswers.every((square, index) => {
      if (square !== answers[index]) {
        return false;
      } else {
        return true;
      }
    });
    window.alert(`This puzzle is ${isCorrect ? "complete!" : "not correct"}`);
    return isCorrect;
  };
  // rows
  for (let row = 0; row < size.rows; row++) {
    const thisRow = [];
    // columns
    for (let col = 0; col < size.cols; col++) {
      thisRow.push(
        <td>
          <div className="label">{col + row * size.rows + 1}</div>
          <input
            style={{
              backgroundColor:
                answers[col + row * size.rows] === "." ? "black" : "white",
              // display: "grid",
              border: "none",
              textAlign: "center",
              textTransform: "capitalize",
              height: "40px",
              width: "40px",
              // gridGap: 0,
              margin: 0,
            }}
            type="text"
            autoComplete="off"
            maxLength={1}
            onKeyUp={(e) => handleKeyUp(e)}
            onChange={(e) => handleChange(e)}
            key={col + row * size.rows}
            id={(col + row * size.rows).toString()}
          ></input>
          {/* <div onChange={(e: ChangeEvent<HTMLDivElement>) => handleChange(e)}>
            {userAnswers[col + row * size.rows]}
          </div> */}
        </td>
      );
    }
    board.push(thisRow);
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} key={"answer"}>
        <p>{title}</p>
        <table id="grid">
          <thead></thead>
          <tbody>
            {Array.isArray(board) && board.map((row) => <tr>{row}</tr>)}
          </tbody>
        </table>
        <button disabled={!canSubmit} type="button">
          Check Puzzle
        </button>
      </form>
    </div>
  );
};

export default MakeGame;
