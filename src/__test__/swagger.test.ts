import { convertToYAML } from '@utils/converter-json-yaml'
import fs from 'fs'

describe('Testing Converting', () => {
  const JsonFromYAML = {
    YAML: ['name', 'JohnDoe'],
    Other: ['venue', 'activity'],
  }

  test('should convert data from YAML to JSON', () => {
    jest
      .spyOn(fs, 'readFileSync')
      .mockImplementationOnce(() => '{"YAML": ["name", "JohnDoe"], "Other": ["venue", "activity"]}')

    const converted = convertToYAML('/', 'fakeFile.yaml')
    expect(converted).toEqual(JsonFromYAML)
  })
})
