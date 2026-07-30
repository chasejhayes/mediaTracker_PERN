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
    .catch(error => {
        console.log(error)
        res.status(500).end()
    })
})

app.get('/api/media/:id', (req, res) => {
    Media.findById(req.params.id)
        .then(media => {
            if (media) {
                res.json(media)
            } else {
                res.status(404).end()
            }
        })
        .catch(error => {
            console.log(error)
            res.status(400).send({ error: 'malformatted id' })
        })
})


app.delete('/api/media/:id', (req, res) => {
    Media.findByIdAndDelete(req.params.id).then(result => {
        res.status(204).end()
    })
        .catch(error => console.log(error))
})

app.patch('/api/media/:id', (req, res) => {
    const update = req.body;
    Media.findByIdAndUpdate(req.params.id, update)
        .then(media => {
            if (!media) {
                return res.status(404).end()
            }
            return (
                res.json(update)
            )
        })
        .catch(err => {
            res.status(400).json({ error: err.message })
        })
})



app.post('/api/media', (req, res) => {
    const body = req.body

    const media = new Media({
        title: body.title,
        dateFinished: body.dateFinished,
        rating: body.rating
    })

    media.save().then(savedMedia => {
        res.json(savedMedia)
    })
    .catch(error => {
        console.log(error)
    })
})


const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`)
})




