import request from 'supertest'
import app from '../app'

describe('GET /', () => {
  test('should return 404', function (done) {
    request(app).get('/').accept('json').expect(404).end(done)
  })
})
