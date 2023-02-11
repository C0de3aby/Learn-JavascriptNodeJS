function getData(url) {
  return new Promise((resolve,reject) => {
    fetch(url)
      .then(response => response.json())
      .then(resolve)
      .catch(reject)
  })
}

let url = [
  getData('https://reqres.in/api/users/1?delay=2'),
  getData('https://reqres.in/api/users/2?delay=4'),
  getData('https://reqres.in/api/users/3?'),
  getData('https://reqres.in/api/users/4?delay=1')
]

// async function run() {
//   let result1 = await url[0]
//   let result2 = await url[1]
//   let result3 = await url[2]
//   let result4 = await url[3]
//   console.log('Ex1 \n',result1,result2,result3,result4)
// }

// run()

// async function runPomiseAll() {
//   let result = await Promise.all(url)
//   console.log('Ex2 \n',result)
// }

// runPomiseAll()

async function runPomiseRace() {
  let result = await Promise.race(url)
  console.log('Ex2 \n',result)
}

runPomiseRace()
