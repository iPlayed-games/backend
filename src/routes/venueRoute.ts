import express from 'express'
import { getAllVenues, getOneVenueById } from '../controller/venueController'

const venueRouter = express.Router()

/**
 * @Method GET
 * @returns All venues
 */
venueRouter.get('/', getAllVenues)

/**
 * @Method GET
 * @returns one venue find by Id
 */
venueRouter.get('/:id', getOneVenueById)

export default venueRouter
