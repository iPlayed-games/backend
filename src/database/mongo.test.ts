import mongoose from './mongo'

describe('Testing connections', () => {

  /* Connecting to the database before each test. */
  beforeEach(async () => { 
    await mongoose.connection.once('connected', () => console.log('Listening on port 3000'))
  })

  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close()
  })

  test('Testing database creating data', async () => {
    expect(1).toBe(1);
  })
})
