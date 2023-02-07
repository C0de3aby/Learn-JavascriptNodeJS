//---------------------------------------------------- 1
// let a = 10
// let b = 10

// console.log('a = b',a == b)
// console.log('a = b',a != b)
// console.log('a = b',a > b)
// console.log('a = b',a >= b)
// console.log('a = b',a < b)
// console.log('a = b',a <= b)

// let age = 51

// if(age >= 51){
//     console.log('ผู้สูงอายุ')
// }else if(age > 18){
//     console.log('วัยรุ่น')
// }else{
//     console.log('เด็ก')
// }

//---------------------------------------------------- 2
// let username = prompt('username')
// let password = prompt('password')

// if (username == 'admin' && password == '1234') {
//   alert('Login Complet')
// }else if (username != 'admin' ) {
//   alert('Not username. Register Pls.')
// }else{
//   alert('Incorrect')
// }

//---------------------------------------------------- 3

let javascript = confirm('JS ?')
let python = confirm('PY ?')

if(javascript || python){
  alert('ok')
}else{
  alert('bye')
}

let stateBoolen = confirm('Select ?')

alert(!stateBoolen)
