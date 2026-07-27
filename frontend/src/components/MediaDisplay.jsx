export default function MediaDisplay({
  media,
  toggleFilter,
  filter,
  toggleSearch,
  searchArr,
  deleteMedia,
  setNewId,
  showEditForm,
  setShowEditForm

}) {
 function handleShowEditForm() {
    if (showEditForm == false) {
      setShowEditForm(true)
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
  
  console.log(media.map(media => media.id))

  return (
    <div>
      <ul id='card'>
        {displayType.map((media) =>
            <li className="list_item" key={media.id}>
              <h2>{media.title}</h2>
              <p>Date Finished: {media.dateFinished}</p>
              <p>Rating: {media.rating}</p>
              <button onClick={() => deleteMedia(media.id)}
              >Delete</button>
              <button onClick={() => { setNewId(media.id); handleShowEditForm() }}>
                Edit
              </button>
            </li>
        )}
      </ul>
    </div>
  )

}
