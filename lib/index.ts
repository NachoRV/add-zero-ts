const addZero = (value: number | string) => {
  let valueToNumber = +value
  let isNegative = false
  if (isNaN(+value)) return 'the value is not a number or valid string'
  if (valueToNumber < 0) {
    isNegative = true
    valueToNumber = Math.abs(valueToNumber)
  }

  return isNegative ? `-0${valueToNumber}` : `0${valueToNumber}`
}

export {
  addZero
}
