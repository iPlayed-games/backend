import request from 'supertest'
import app from '../app'
import fs from 'fs'

describe('Check if userRoute.ts exists in the project', () => {
  test('Should check if the file exists', () => {
    const filepath = './src/routes/userRoute.ts'
    const fileExists = fs.existsSync(filepath)
    expect(fileExists).toBe(true)
  })
})

describe('GET /users', () => {
  test('Should return all user data from database', function () {
    request(app)
      .get('/users')
      .accept('json')
      .expect(200)
      .then((response) => {
        const { data } = response.body
        expect(data.length).toBeGreaterThanOrEqual(3)
        expect(Array.isArray(data)).toBeTruthy()
        expect(data).not.toBe(0)
      })
  })

  test('Should return users and venue data from database', function () {
    request(app)
      .get('/users')
      .accept('json')
      .expect(200)
      .then((response) => {
        const { data } = response.body
        expect(data[0].email).toEqual('raphael1@gmail.com')
        expect(data[0].venue.name).toEqual('Play Center 1')
        expect(data[0].venue.activity?.length).toBeUndefined()
      })
  })
})

describe('GET /users/:id', () => {
  test('Should return 404 for invalid ids', () => {
    request(app).get('/users/11111111').accept('json').expect(404)
  })

  test('Should return 200 for valid ids', () => {
    request(app)
      .get('/users')
      .accept('json')
      .expect(200)
      .then((response) => {
        const { id } = response.body[0]
        request(app)
          .get('/users/' + id)
          .accept('json')
          .expect(200)
          .then((response) => {
            const { data } = response.body
            expect(data.email).toEqual('raphael1@gmail.com')
            expect(data.venue.name).toEqual('Play Center 1')
            expect(data.venue.activity?.length).toBeUndefined()
          })
      })
  })
})
