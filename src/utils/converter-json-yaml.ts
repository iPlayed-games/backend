import fs from 'fs'
import path from 'path'
import YAML from 'yaml'

const BASE_PATH: string = path.resolve()

export function convertToYAML(locationPath: string, filename: string) {
  const FULL_PATH: string = BASE_PATH + locationPath
  const file: string = fs.readFileSync(FULL_PATH + filename, 'utf8')
  const convertedFile = YAML.parse(file)
  return convertedFile
}
