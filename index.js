function rotateLeft(array, number) {
  for (let i = 0; i < number; i++) {
    const firstItem = array.shift()
    array.push(firstItem)
  }

  return array
}

const output = rotateLeft([1, 2, 3, 4, 5], 4)
console.log(output)
