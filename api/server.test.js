const request = require('supertest')
const server = require('./server')
const db = require('../data/db-config')

test('sanity' , () => {
    expect(true).not.toBe(false)
})