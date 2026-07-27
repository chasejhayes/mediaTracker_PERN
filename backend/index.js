require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express();

const PORT = process.env.PORT


app.use(express.json())
app.use(cors())

// app.use((req, res, next) => {
//   res.setHeader(
//     'Content-Security-Policy',
//     "connect-src 'self' http://localhost:3001/api/media;" // Replace with your source-expression-list
//   );
//   next();
// });

let media = [
    { title: "Perfume", dateFinished: "4/5/26", rating: 5, id: Math.random().toString(36).slice(2) },
    { title: "Perfame", dateFinished: "4/5/26", rating: 5, id: Math.random().toString(36).slice(2) },
    { title: "Perfumt", dateFinished: "4/5/26", rating: 5, id: Math.random().toString(36).slice(2) },
    { title: "Body Double", dateFinished: "6/4/26", rating: 3, id: Math.random().toString(36).slice(2)},
    { title: "Malazan Book 2", dateFinished: "5/22/26", rating: 1, id: Math.random().toString(36).slice(2) },
    { title: "Stalin", dateFinished: "5/22/1990", rating: 2, id: Math.random().toString(36).slice(2) },
    { title: "King of the World", dateFinished: "5/01/19", rating: 1, id: Math.random().toString(36).slice(2)}
]

app.get('/api/media/', (request, response) => {
    response.json(media)
})

app.get('/api/media/:id', (request, response) => {
    const itemId = parseInt(request.params.id)
    const item = media.find(m => m.id === itemId)
    if (item) {
        response.json(item)
    } else {
        response.status(404).end()
    }

})

app.delete('/api/media/:id', (req, res) => {
    const id = req.params.id

    media = media.filter(item => item.id !== id)

    res.status(204).end()


})

// Issue is that the id numbers are not matching as true, fixed with Number prefix but that doesn't work with the newly created ids as they are a string



app.patch('/api/media/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    console.log(req.body)

    console.log(media)
    media = media.map(item =>
        item.id === id
            ? { ...item, ...req.body }
            : item
    )

    console.log(media)

    const updatedMedia = media.find(item =>
        item.id === id
    )
    console.log(updatedMedia)
    res.json(updatedMedia)

})




app.post('/api/media', (request, response) => {
    let mediaData = request.body;

    let newMedia = {
        "title": mediaData.title,
        "dateFinished": mediaData.dateFinished,
        "rating": mediaData.rating,
        "id": Math.random().toString(36).slice(2)
    }

    media = [newMedia, ...media]

    response.status(201).json(newMedia)


})




app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`)
})


/*
test
{
        "title": "Russian Course",
        "dateFinished": "Ongoing",
        "rating": "Incomplete"
    }

*/