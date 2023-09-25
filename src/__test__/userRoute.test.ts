import request from 'supertest'
import app from '../app'
import fs from 'fs'
import http from 'http'

let server: http.Server

describe('Check if userRoute.ts exists in the project', () => {
  test('Should check if the file exists', () => {
    const filepath = './src/routes/userRoute.ts'
    const fileExists = fs.existsSync(filepath)
    expect(fileExists).toBe(true)
  })
})

beforeAll(() => {
  server = app.listen(3003)
})

afterAll((done) => {
  server.close(done)
})

describe('GET /users', () => {
  test('Should return all user data from the database', async () => {
    const response = await request(app).get('/users').accept('json').expect(200)

    const { data } = response.body
    expect(data.length).toBeGreaterThanOrEqual(3)
    expect(Array.isArray(data)).toBeTruthy()
    expect(data).not.toBe(0)
  })

  test('Should return users and venue data from the database', async () => {
    const response = await request(app).get('/users').accept('json').expect(200)

    const { data } = response.body
    expect(data[0].email).toEqual('raphael1@gmail.com')
    expect(data[0].venue.name).toEqual('Play Center 1')
    expect(data[0].venue.activity?.length).toBeUndefined()
  })
})

describe('GET /users/:id', () => {
  test('Should return 404 for invalid ids', async () => {
    const response = await request(app).get('/users/11111111').accept('json').expect(200)

    const { code, realErrorMessage } = response.body
    expect(code).toEqual(404)
    expect(realErrorMessage.name).toEqual('PrismaClientKnownRequestError')
  })

  test('Should return 200 for valid ids', async () => {
    const response = await request(app).get('/users').accept('json').expect(200)

    const { id } = response.body.data[0]
    const userResponse = await request(app)
      .get('/users/' + id)
      .accept('json')
      .expect(200)

    const { data } = userResponse.body
    expect(data.email).toEqual('raphael1@gmail.com')
    expect(data.venue.name).toEqual('Play Center 1')
    expect(data.venue.activity?.length).toBeUndefined()
  })
})
