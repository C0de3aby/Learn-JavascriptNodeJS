function myFunc1 () {
  console.log(1)
  console.log(2)
  console.log(3)
}

myFunc1()

function myFunc2 (value) {
  console.log('Hi ',value)
}

myFunc2('joe')

function myFunc3 (from,to) {
  console.log(`Say hi ${to} form ${from}`)
}

myFunc3('joe','doe')

function myFunc4 (a,b) {
  return a + b
}

let result = myFunc4(1,2)
console.log(result)
