export default function Button({ text, showForm, setShowForm, setNewTitle, setNewRating, setNewFinishDate, setNewId, setShowEditForm}) {
  function handleShowForm() {
    if (showForm == false) {
      setShowForm(true);
      setShowEditForm(false);
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