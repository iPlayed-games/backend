import mongoose from '../config/mongo/mongo'

describe('Testing connections', () => {
  /* Connecting to the database before each test. */
  beforeEach(async () => {
    await mongoose.connection.once('connected', () => {
      console.log('Listening on port 3000')
    })
  })

  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close()
  })

  test.todo('Testing connections to the database')
})
