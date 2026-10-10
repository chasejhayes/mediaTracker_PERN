export default function MediaDisplay({
  media,
  toggleFilter,
  filter,
  toggleSearch,
  searchArr,
  deleteMedia,
  setNewId,
  setNewTitle,
  setNewRating,
  setNewFinishDate,
  showEditForm,
  setShowEditForm,
  setShowForm

}) {
 function handleShowEditForm() {
    if (showEditForm == false) {
      setShowEditForm(true)
      setShowForm(false)
    } else {
      setShowEditForm(false)
    }
  }
  let displayType = media;
  if (toggleFilter) {
    displayType = filter
  } else if (toggleSearch) {
    displayType = searchArr
  }

  return (
    <div>
      <ul id='card'>
        {displayType.map((media) =>
            <li className="list_item" key={media.id}>
              <h2>{media.title}</h2>
              <p>Date Finished: {media.datefinished}</p>
              <p>Rating: {media.rating}</p>
              <button onClick={() => deleteMedia(media.id)}
              >Delete</button>
              <button onClick={() => { setNewId(media.id); setNewTitle(media.title); setNewRating(media.rating); setNewFinishDate(media.datefinished), handleShowEditForm() }}>
                Edit
              </button>
            </li>
        )}
      </ul>
    </div>
  )

}
