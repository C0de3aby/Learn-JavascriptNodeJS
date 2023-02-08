// let game = [
//   ['o','x','x'],
//   ['o','o','x'],
//   ['x','x','o']
// ]

// let result = ''
// for ( let rowData of game){
//   let rowStr = ''
//   for ( let field of rowData){
//     rowStr += field + ' '
//   }
//   result += rowStr + '\n'
// }

// console.log(result)

let rowCount = 6
let result = ''

for ( let i = 0 ; i <= rowCount ; i++ ){
  let data = ''
  for (let n = 0 ; n < i ; n ++ ) {
    data += '*'
    //console.log(data)
  }
  result += data+'\n'
}
console.log(result)
