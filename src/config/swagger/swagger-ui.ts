import swaggerUi from 'swagger-ui-express'
import { convertToYAML } from 'utils/converter-json-yaml'

const swaggerJSONParsed = convertToYAML('/src/config/swagger/', 'docs.yaml')

export const swaggerServer = swaggerUi.serve
export const swaggerDocumented = swaggerUi.setup(swaggerJSONParsed)
