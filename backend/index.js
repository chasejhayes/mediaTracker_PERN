require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Media = require('./models/media')
const mongoose = require('mongoose')
const app = express();

app.use(express.json())
app.use(cors())


app.get('/api/media', (req, res) => {
    Media.find({}).then(media => {
        res.json(media)
    })
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


app.patch('/api/media/:id', (req, res) => {
    const id = req.params.id
    media = media.map(item =>
        item.id === id
            ? { ...item, ...req.body }
            : item
    )

    const updatedMedia = media.find(item =>
        item.id === id
    )
    res.json(updatedMedia)
})




// app.post('/api/media', (request, response) => {
//     let mediaData = request.body;

//     let newMedia = {
//         "title": mediaData.title,
//         "dateFinished": mediaData.dateFinished,
//         "rating": mediaData.rating,
//         "id": Math.random().toString(36).slice(2)
//     }

//     media = [newMedia, ...media]

//     response.status(201).json(newMedia)
// })

app.post('/api/media', (req, res) => {
    const body = req.body
    if(!body.content){
        return res.status(400).json({ error: 'content missing' })
    }

    const media = new Media({
        title: body.title,
        dateFinished: body.dateFinished,
        rating: body.rating
    })

    media.save().then(savedMedia => {
        res.json(savedMedia)
    })
})


const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`)
})






// let media = [
//     { title: "Perfume", dateFinished: "4/5/26", rating: 2, id: Math.random().toString(36).slice(2) },
//     { title: "Perfame", dateFinished: "4/5/26", rating: 3, id: Math.random().toString(36).slice(2) },
//     { title: "Perfumt", dateFinished: "4/5/26", rating: 5, id: Math.random().toString(36).slice(2) },
//     { title: "Body Double", dateFinished: "6/4/26", rating: 3, id: Math.random().toString(36).slice(2)},
//     { title: "Malazan Book 2", dateFinished: "5/22/26", rating: 1, id: Math.random().toString(36).slice(2) },
//     { title: "Stalin", dateFinished: "5/22/1990", rating: 2, id: Math.random().toString(36).slice(2) },
//     { title: "King of the World", dateFinished: "5/01/19", rating: 1, id: Math.random().toString(36).slice(2)}
// ]