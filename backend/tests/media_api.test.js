const { test, after } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index')
const assert = require('node:assert')

const api = supertest(app)

test('media is returned as json', async() => {
    await api
    .get('/api/media')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all media is returned', async() => {
    const response = await api.get('/api/media')

    assert.strictEqual(response.body.length, 8)
})

test('a specific media item is within the returned media items', async() => {
    const response = await api.get('/api/media')
    const contents = response.body.map(e => e.title)
    assert.strictEqual(contents.includes('Stalin'), true)
})

after(async () => {
    await mongoose.connection.close()
})

