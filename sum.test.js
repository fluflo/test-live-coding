import { expect, test } from 'vitest'
import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('adds undefined which should be seen as 0 + 1 to equal 1', () => {
  //prepare phase
  const a = undefined
  const b = 1
  const expectedResult = 1

  //act phase
  const result = sum(a,b)

  //assert phase
  expect(result).toBe(expectedResult)
})

test('adds 1 + undefined which should be seen as 0 to equal 1', () => {
  //prepare phase
  const a = 1
  const b = undefined
  const expectedResult = 1

  //act phase
  const result = sum(a,b)

  //assert phase
  expect(result).toBe(expectedResult)
})

test('adds 1 + undefined which should be seen as 0 to equal 2', () => {
  //prepare phase
  const a = 1
  const b = undefined
  const expectedResult = 1

  //act phase
  const result = sum(a,b)

  //assert phase
  expect(result).toBe(expectedResult)
})

test('adds string "test" + 2 to be TypeError', () => {
  //prepare phase
  const a = "test"
  const b = 2

  //assert phase
  expect(() => sum(a,b)).toThrowError('TypeError')
})