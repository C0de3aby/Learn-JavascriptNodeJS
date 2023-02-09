console.log(1,2,3,4,5)

// rest params
function sum1(...number) {
  console.log(number)
}

sum1(1,2,3,4,5)

function sum2(...number) {
  return number.reduce((p,c) => p + c,0)
}

let result = sum2(1,2,3,4,5)
console.log(result)

// spread params
let set = [1,3,0,-1,-2,4,5,6,7,-3]
// const min1 = Math.min(set) // Not use
// console.log(min1)
const min2 = Math.min(...set)
console.log(min2)

// spread params ( array )

let a = [2,4,5,6,7,-3]
let b = [1,3,0,-1,-2]

console.log(a,b)
console.log(...a,...b)
console.log(a.concat(b))

// spread params ( object )

let c = { one: 1, two:2 }
let d = { three: 3, four:4 }

console.log(c,d)
console.log({...c,...d})
