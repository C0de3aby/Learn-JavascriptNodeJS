let fruits = ['apple','banana','cherry','durian']

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])

let [a,b,c,d] = fruits
console.log(a,b,c,d)

let student = { user:'John Doe', age:18,grade: 3.5}
let { user, age, grade} = student
console.log(user,age,grade)

// Ex 1

function screenResolution({width,height}) {
  return `${width} x ${height} px`
}

let input = {height: 1080,width:1920}
console.log(screenResolution(input))

// Ex 2

let obj = {one:1, two:2, three:3}

for(let [key, value] of Object.entries(obj)){
  console.log(`${key} : ${value}`)
}

let username = 'admin'
let password = '1234'

let auth = {
  username,
  password
}

console.log(auth)
