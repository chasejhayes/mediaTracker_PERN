function sortByTitle(res, media, setMedia) {
    const sortedMedia = [res, ...media]
    return setMedia(
        sortedMedia.toSorted((a, b) => a.title.localeCompare(b.title))
    )
}


function sortByDate(res, media, setMedia) {
    const sortedMedia = [res, ...media]
    return setMedia(
        sortedMedia.sort((a, b) => new Date(b.dateFinished) - new Date(a.dateFinished))
    )
}

function sortByRating(res, media, setMedia) {
    const sortedMedia = [res, ...media]
    return setMedia(
        sortedMedia.sort((a, b) => b.rating - a.rating)
    )
}




export { sortByTitle, sortByDate, sortByRating }