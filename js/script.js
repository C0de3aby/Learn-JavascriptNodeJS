function myAddFunc1 (a,b) {
  return a + b
}

console.log(myAddFunc1(1,2))

let myAddFunc2 = function (a,b) {
  return a + b
}

console.log(myAddFunc2(1,2))

let myAddFunc3 = (a,b) => {
  return a + b
}

console.log(myAddFunc3(1,2))

let myAddFunc4 =  {
  add: (a,b) => { return a + b },
  sub: (a,b) => { return a - b }
}

console.log(myAddFunc4.add(1,2))
console.log(myAddFunc4.sub(1,2))
