import React from "react";

export const Create = () => {
const [gridSize, setGridSize] = React.useState(4);

  return (
    <>
    <div>Create your own puzzle</div>
    <br/>
    <label htmlFor="size-select">Select puzzle size</label>
    <select
    id="size-select"
    onChange={(e) => setGridSize(parseInt(e.target.value))}>
    <option value={4}>4x4</option>
    <option value={5}>5x5</option>
    <option value={6}>6x6</option>
    </select>
    <br />
    <RenderGrid size={gridSize}/>
    </>

  )
};

export default Create;

const RenderGrid = ({size}: {size: number}) => {
  const gridArray = [];
  for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++) {
      gridArray.push(
        <SingleBox column={i} row={j}/>
      )
    }
  };
  return (
    <div style={{ display: "inline-block" }}>
    <div
      style={{
        backgroundColor: "#444",
        display: "grid",
        gridTemplateRows: `repeat(${size}, 1fr)`,
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridGap: 2
      }}
    >
      {gridArray.map((box :any) => box)}
    </div>
    </div>)
}

const SingleBox = ({column, row}: {column: number, row: number}) => {
  const handleChange = (e: any) => {

  }
  return (
    <div
    style={{
      backgroundColor: "#fff",
      width: 50,
      height: 50
    }}
  >
    <input style={{
          fontSize: "2.5rem",
          width: "100%",
          height: "100%",
          textAlign: "center",
        }}
        type="text"/>
    </div>
  )
}
