function findCircleArea ( radius, callback ) {
  if (radius <= 0) {
    return callback(new Error('Less than or equal to 0'))
  } else if (typeof radius !== 'number') {
    return callback(new Error('params not a number'))
  }
  let result = (22/7)*(radius ** 2)
  return callback(null, result)
}

function handler (err,value){
  if (err) {
    console.warn(err)
  } else {
    console.log(value)
  }
}

findCircleArea('A',handler)
findCircleArea(0,handler)
findCircleArea(1,handler)
