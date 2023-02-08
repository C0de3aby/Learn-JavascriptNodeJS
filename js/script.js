let game = [
  ['o','x','x'],
  ['o','o','x'],
  ['x','x','o']
]

let result = ''
for ( let rowData of game){
  let rowStr = ''
  for ( let field of rowData){
    rowStr += field + ' '
  }
  result += rowStr + '\n'
}

console.log(result)
