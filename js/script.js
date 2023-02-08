while (true) {
  let username = prompt('name')
  if(username){
    console.log(username)
    break
  }
}

let set = [0,1,2,3,4,5,6,7,8,9,10]

for(let n of set){
  if(n % 2){
    continue
  }
  console.log(n)
}
