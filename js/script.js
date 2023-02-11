// Callback Ex 1 - Async

// setTimeout(()=> console.log(1) , 3000)
// setTimeout(()=> console.log(2) , 1000)
// setTimeout(()=> console.log(3) , 2000)

// console.log('END 1')

// Promise Ex 1 - Async

// fetch('https://fakerapi.it/api/v1/persons')
//   .then((response)=>{
//     response.json()
//       .then((data)=>{
//         console.log('REAL DATA 1 \n',data)
//       })
//   })

// fetch('https://fakerapi.it/api/v1/persons')
//   .then((response)=>{
//     response.json()
//       .then((data)=>{
//         console.log('REAL DATA 2 \n',data)
//       })
//   })

// console.log('END 2')

// Promise Ex 2 - Async : Create Promise
function setDelayPromise(second) {
  // Format : 1
  // let handle = (resolve,reject) => {

  // }
  // return new Promise(handle)

  // Format : 2
  // *resolve -> return
  // *reject -> throw
  return new Promise((resolve, reject) => {
    if (typeof second !== "number") {
      return reject(new Error("Promise : Not a number"));
    }
    setTimeout(() => {
      return resolve("Promise : Success " + second);
    }, second * 1000);
  });
}

// let whenSuccess = (string) => {
//   console.log("Data ?", string);
// };

// let whenError = (err) => {
//   console.log("Error ?", err);
// };

// setDelayPromise(3).then(whenSuccess).catch(whenError);
// setDelayPromise(2).then(whenSuccess).catch(whenError);
// setDelayPromise(1).then(whenSuccess).catch(whenError);

// Create : async fucntion
// let run = async function () {}
// let run = ()=> {}

async function run() {
  try {
    let str1 = await setDelayPromise(3)
    console.log(str1)
    let str2 = await setDelayPromise(2)
    console.log(str2)
    let str3 = await setDelayPromise(1)
    console.log(str3)
  } catch (error) {
    console.log('Error ? :', error)
  }
}

run()


// Callback Ex 2

// function setDelayCallback(second, success, error) {
//   if (typeof second !== "number") {
//     return error(new Error("Callback : Not a number"));
//   }
//   setTimeout(() => {
//     return success("Callback : Success " + second);
//   }, second * 1000);
// }

// setDelayCallback(3, whenSuccess, whenError)
// setDelayCallback(2, whenSuccess, whenError)
// setDelayCallback(1, whenSuccess, whenError)

// Callback Hell
// setDelayCallback(3, (str1) => {
//   console.log(str1)
//   setDelayCallback(2, (str2) => {
//     console.log(str2)
//     setDelayCallback(1, (str3) => {
//       console.log(str3)
//     }  , whenError)
//   }  , whenError)
// }  , whenError)
