function checkNumber (n) {
  if(typeof n !== 'number'){
    throw 'error : not a number'
  }
  return true
}

// ------------ Ex 1

// try {
//   let a = checkNumber(1)
//   let b = checkNumber('a')
//   console.log(a,b)
// } catch (error) {
//   alert(error)
// }

// ------------ Ex 2

// try {
//   let a = checkNumber(1)
//    console.log(a)
// } catch (error) {
//   alert(error)
// }

// try {
//   let b = checkNumber('a')
//   console.log(a)
// } catch (error) {
//   alert(error)
// }

// ------------ Ex 3

function findCircleArea ( radius ) {
  if (radius <= 0) {
    throw new Error('Less than or equal to 0')
  }
  return (22/7)*(radius ** 2)
}

try {
  a = findCircleArea(0)
  b = findCircleArea('1')
  c = findCircleArea(2)
} catch (error) {
  console.warn(error)
}

console.log('END')
