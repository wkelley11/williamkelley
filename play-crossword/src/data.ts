export type GameData = {
  author: string,
  title: string,
  // data: string,
  size: {
    rows: number,
    cols: number,
  },
  clues: {
    across: Array<{
      number: number, clue: string
    }>,
    down: Array<{
      number: number, clue: string
    }>
  }
  grid: string[]
}
export const game_one = {
  "author": "Me I made it",
  "title": "My Puzzle",
  "date": "10/16/22",
  "size": {"rows":5,"cols":5},
  "clues": {
    "across": [{
      number: 2,
      clue: "Scotland has a great deal of these, or a fair one."},
  {number: 7, clue: "'It's alright with me.'"}
,
{number: 11, clue: "Twine"},
{number: 16, clue: "Four balls"},
{number: 21, clue: "Singularly"}],
    "down": [{number: 2, clue: "Lover of snickers salad, perhaps"},
{number: 3, clue: "Deftness"},
  {number: 4, clue: "'String bean' body type"},
  {number: 5, clue: "An exchange of this would make the whole world blind, per Ghandi."}
]
  },
  "grid": [
    ".", "i", "s", "l", "e", ".", "o", "k", "a", "y", "t", "w", "i", "n", "e", "w", "a", "l", "k", ".", "o", "n", "l", "y", "."
  ]
}

export const game_two = {
  "author": "Me I made it",
  "title": "My Second Puzzle",
  "date": "10/25/22",
  "size": {"rows":5,"cols":5},
  "clues": {
    "across": [],
    "down": []
  },
  "grid": [
    ".", "i", "s", "l", "e", ".", "o", "k", "a", "y", "t", "w", "i", "n", "e", "w", "a", "l", "k", "o", "n", "l", "k", ".", "o", "n", "l", "y", "."
  ]
}