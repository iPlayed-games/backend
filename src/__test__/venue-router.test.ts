import request from 'supertest'
import app from '../app'
import { getAllVenues } from '../services/venueService'

describe('GET /', () => {
  test('should return 404', function (done) {
    request(app).get('/').accept('json').expect(404).end(done)
  })
})

describe('GET /venues', () => {
  test('should return data from database', function () {
    request(app)
      .get('/venues')
      .accept('json')
      .expect(200)
      .then((response) => {
        expect(response.body.length).toBeGreaterThanOrEqual(3)
        expect(Array.isArray(response.body)).toBeTruthy()
        expect(response.body.length).not.toBe(0)
      })
  })

  test('should return venues data from database', function () {
    request(app)
      .get('/venues')
      .accept('json')
      .expect(200)
      .then((response) => {
        expect(response.body[0].email).toEqual('playcenter1@gmail.com')
        expect(response.body[0].name).toEqual('Play Center 1')
      })
  })
})

describe('GET /venues/:id', () => {
  test('given venue that does not exist', function () {
    const venueId: string = 'venue-123'
    request(app).get(`/venues/${venueId}`).accept('json').expect(404)
  })

  test('should return venue data by ID that does exist', async function () {
    const venue = await Promise.resolve(getAllVenues())
    request(app).get(`/venues/${venue[0].id}`).accept('json').expect(200)
  })
})
