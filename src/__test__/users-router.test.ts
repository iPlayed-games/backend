import request from 'supertest'
import app from '../app'

describe('GET /', () => {
  test('should return 404', function (done) {
    request(app).get('/').accept('json').expect(404).end(done)
  })
})

describe('GET /users', () => {
  test('should return data from database', function () {
    request(app)
      .get('/users')
      .accept('json')
      .expect(200)
      .then((response) => {
        expect(response.body.responseObject.length).toBeGreaterThanOrEqual(3)
        expect(Array.isArray(response.body.responseObject)).toBeTruthy()
        expect(response.body.responseObject.length).not.toBe(0)
      })
  })

  test('should return users and venue data from database', function () {
    request(app)
      .get('/users')
      .accept('json')
      .expect(200)
      .then((response) => {
        expect(response.body.responseObject[0].email).toEqual('raphael1@gmail.com')
        expect(response.body.responseObject[0].venue.name).toEqual('Play Center 1')
        expect(response.body.responseObject[0].venue.activity?.length).toBeUndefined()
      })
  })
})
