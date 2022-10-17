export const Upload = () => {
  const handleSubmit = (e: any) => {
    console.log(e);
  }
  return (
    <>
      <h1>Upload your crossword file:</h1>
      <form onSubmit={e => handleSubmit(e)}>
      <input id="xw-file" type="file" />
      <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default Upload;
