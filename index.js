const userString = prompt('Введите текст для обрезки')
console.log('Text', String(userString.trim()))
const startSliceIndex = prompt(
  'Введите индекс с которым нужно закончить обрезку строки'
)
console.log(Number(startSliceIndex))
const endSliceIndex = prompt(
  'Введите индекс, которым нужно закончить обрезку строки'
)
console.log(Number(endSliceIndex))
console.log(userString.slice(startSliceIndex, endSliceIndex))

alert(`результат: ${userString.slice(startSliceIndex, endSliceIndex)}`)
