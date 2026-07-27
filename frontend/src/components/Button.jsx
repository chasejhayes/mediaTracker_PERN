export default function Button({ text, showForm, setShowForm, setNewTitle, setNewRating, setNewFinishDate, setNewId}) {
  function handleShowForm() {
    if (showForm == false) {
      setShowForm(true);
      setNewTitle('')
      setNewRating('')
      setNewFinishDate('')
      setNewId('')
    } else {
      setShowForm(false)
    }
  }
  return (
    <button onClick={handleShowForm}>{text}</button>
  )
}