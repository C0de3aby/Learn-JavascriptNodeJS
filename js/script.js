// throw error

function isNumber(n) {
  if (typeof n !== "number") {
    throw new Error("Throw error - Not a number")
  }
}

try {
  isNumber('1')
} catch (error) {
  console.log(error)
}

// Callback

function isNumberCallback(n, callback) {
  if (typeof n !== "number") {
    return callback(new Error("Callback - Not a number"))
  }
}

isNumberCallback(1,(err)=>{
  console.log(err)
})

isNumberCallback('1',(err)=>{
  console.log(err)
})

function isNumberAsync(n) {
  return new Promise((resolve,reject) => {
    if (typeof n !== "number") {
      return reject(new Error("Pomise - Not a number"))
    }
    return resolve()
  })
}

// isNumberAsync('1')
//   .catch(console.log)

async function run() {
  try {
    await isNumberAsync('1')
  } catch (error) {
    console.log(error)
  }
}

run()

