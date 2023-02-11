// Ex 1
fetch('https://fakerapi.it/api/v1/persons')
  .then((response)=>{
    response.json()
      .then((data)=>{
        console.log('REAL DATA 1 \n',data)
      })
  })

// Ex 2
async function run() {
  try {
    let response = await fetch('https://fakerapi.it/api/v1/persons')
    let data = response.json()
    console.log('!!!!!',data)
  } catch (error) {
    console.log('?????',error)
  }
}

run()
