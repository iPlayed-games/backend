import { sum } from './index.ts'

test('basic', () => {
  expect(sum()).toBe(0)
})

test('basic again', () => {
  expect(sum(1, 2)).toBe(3)
})
