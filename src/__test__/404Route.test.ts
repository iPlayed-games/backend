import request from 'supertest'
import app from '../app'
import http from 'http'

let server: http.Server

beforeAll(() => {
  server = app.listen(3002)
})

afterAll((done) => {
  server.close(done)
})

describe('GET /', () => {
  test('should return 404', function (done) {
    request(app).get('/').accept('json').expect(404).end(done)
  })
})
