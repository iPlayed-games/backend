import request from 'supertest'
import app from '../app'
import fs from 'fs'
import http from 'http'

let server: http.Server

describe('Check if venueRoute.ts exists in the project', () => {
  it('Should check if the file exists', () => {
    const filepath = './src/routes/venueRoute.ts'
    const fileExists = fs.existsSync(filepath)
    expect(fileExists).toBe(true)
  })
})

beforeAll(() => {
  server = app.listen(3001)
})

afterAll((done) => {
  server.close(done)
})

describe('GET /venues', () => {
  test('Should return all venues from the database.', async () => {
    const response = await request(app).get('/venues').accept('json').expect(200)

    const { data } = response.body
    expect(data.length).toBeGreaterThanOrEqual(3)
    expect(Array.isArray(data)).toBeTruthy()
    expect(data).not.toBe(0)
  })

  test('Should return venues with activity data from database', async () => {
    const response = await request(app).get('/venues').accept('json').expect(200)

    const { data } = response.body
    const { activities } = data[0]
    expect(data[0].email).toEqual('playcenter1@gmail.com')
    expect(activities[0].name).toEqual('play game 1')
    expect(activities[0].category).toEqual('Indoor')
  })
})

describe('GET /venues/:id', () => {
  test('Should return 404 error code and error message for invalid ids', async () => {
    const response = await request(app).get('/venues/11111111').accept('json').expect(200)
    const { code, realErrorMessage } = response.body
    expect(code).toEqual(404)
    expect(realErrorMessage.name).toEqual('PrismaClientKnownRequestError')
  })

  test('Should return 200 for valid ids', async () => {
    const response = await request(app).get('/venues').accept('json').expect(200)

    const { id } = response.body.data[0]
    const venueResponse = await request(app)
      .get('/venues/' + id)
      .accept('json')
      .expect(200)

    const { data } = venueResponse.body
    const { activities } = data
    expect(data.email).toEqual('playcenter1@gmail.com')
    expect(activities[0].name).toEqual('play game 1')
    expect(activities[0].category).toEqual('Indoor')
  })
})
