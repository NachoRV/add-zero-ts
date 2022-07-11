import { addZero } from '../lib/index'

describe('Add zero', () => {
  test('Not a number soul be return an error', () => {
    const result = addZero('not a number')
    expect(result).toEqual('the value is not a number or valid string')
  })
  test('A positive number it return a positive number with two position', () => {
    const randomNum = Math.random() * 10
    const number = Math.round(randomNum)
    const result = addZero(number)
    expect(result).toEqual(`0${number}`)
  })
  test('A negative number it return a negative number with two position', () => {
    const randomNum = Math.random() * 10
    const number = Math.round(randomNum)
    const result = addZero(-number)
    expect(result).toEqual(`-0${number}`)
  })
})
