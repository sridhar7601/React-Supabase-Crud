
const notesCard = (notes) => {
  return (
    <div>
      <h1>{notes.title}</h1>
      <h2>{notes.method}</h2>
      <h3>{notes.rating}</h3>
    </div>
  )
}

export default notesCard
