const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, {family: 4})
.then(result => {
    console.log('connected to MongoDB')
})
.catch(error => {
    console.log('error connecting to MongoDB:', error.message)
})


const mediaSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: 1,
        required: true
    },
    dateFinished: {
        type: String,
        minLength: 6,
        required: true
    },
    rating: {
        type: Number,
        minLength: 1,
        required: true
    }
})


mediaSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})


module.exports = mongoose.model('Media', mediaSchema)

