import dotenv from "dotenv"
import express, { response } from "express"
import cors from "cors"
// const mongoose = require('mongoose')
import pool from "./config/db.js"
import mediaRoutes from "./routes/mediaRoutes.js"
import errorHandling from "./middleware/errorHandler.js"
dotenv.config()
const app = express();


// Middlewares
app.use(express.json())
app.use(cors())

// Routes
app.use("/api", mediaRoutes)




// Error handling middleware
app.use(errorHandling);

// Testing Postgres connection
app.get("/", async(req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`The database name is : ${result.rows[0].current_database}`)
})


// Server running

let notes = [
  {
    title: "Test",
    releaseDate: "123123",
    rating: 10
  },
]

// app.get('/api/media', (req, res) => {
//     Media.find({}).then(media => {
//         res.json(media)
//     })
//     .catch(error => {
//         console.log(error)
//         res.status(500).end()
//     })
// })

// app.get('/api/media', (req, res) => {
//     res.json(notes)

// })


// app.get('/api/media/:id', (req, res) => {
//     Media.findById(req.params.id)
//         .then(media => {
//             if (media) {
//                 res.json(media)
//             } else {
//                 res.status(404).end()
//             }
//         })
//         .catch(error => {
//             console.log(error)
//             res.status(400).send({ error: 'malformatted id' })
//         })
// })


// app.delete('/api/media/:id', (req, res) => {
//     Media.findByIdAndDelete(req.params.id).then(result => {
//         res.status(204).end()
//     })
//         .catch(error => console.log(error))
// })

// app.patch('/api/media/:id', (req, res) => {
//     const update = req.body;
//     Media.findByIdAndUpdate(req.params.id, update)
//         .then(media => {
//             if (!media) {
//                 return res.status(404).end()
//             }
//             return (
//                 res.json(update)
//             )
//         })
//         .catch(err => {
//             res.status(400).json({ error: err.message })
//         })
// })



// app.post('/api/media', (req, res) => {
//     const body = req.body

//     const media = new Media({
//         title: body.title,
//         dateFinished: body.dateFinished,
//         rating: body.rating
//     })

//     media.save().then(savedMedia => {
//         res.json(savedMedia)
//     })
//     .catch(error => {
//         console.log(error)
//     })
// })

// Add this to handle requests to the root URL
// app.get('/', (req, res) => {
//     res.status(200).json({ message: "Backend is running smoothly!" });
// });




// Server running
const PORT = process.env.PORT 

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`)
})




// module.exports = app

