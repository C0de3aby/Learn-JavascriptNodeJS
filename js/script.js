let arr = ['a','b','c','d','e']
let obj = { a: 1,b: 2,c: 3,d: 4 }
// let index = 0

// while (index < arr.length) {
//   console.log(arr[index])
//   index++
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// for (let item of arr) {
//   console.log(item)
// }

// for (let key in obj) {
//   console.log(`${key} : ${obj[key]}`)
// }

// let dataSet = [1,2,3,4,5]
// let result  = 0

// for( let n of dataSet ){
//   result += n
// }

// console.log(result)

let dataSet = [1,2,3,4,5,-1,-3,10]

let minResult = dataSet[0]
let maxResult = dataSet[0]

for (let n of dataSet){
  if (n < minResult){
    minResult = n
  }
  if (n > maxResult){
    maxResult = n
  }
}

console.log('min : ',minResult)
console.log('max : ',maxResult)
