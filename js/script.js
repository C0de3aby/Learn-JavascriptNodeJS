function getDataShow (){
  let e = new Date()
  console.log(e.toLocaleDateString('en-GB'))
  console.log(e.toLocaleTimeString('en-GB'))
}

setInterval(getDataShow,10000)

