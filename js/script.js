let elForm = document.querySelector('form')
let elSpanResult = document.getElementById('result')

elForm.addEventListener('submit', (e) =>{
  e.preventDefault()
  let el = e.target
  let elInputX = Number(el.querySelector('[name="x"]').value)
  let elInputY = Number(el.querySelector('[name="y"]').value)
  let elSelectOperator = el.querySelector('[name="operator"]').value
  let output
  let strOperator
  // console.log(`${elInputX} ${elSelectOperator} ${elInputY}`)
  switch (elSelectOperator) {
    case 'plus':
      output = elInputX + elInputY
      strOperator = '+'
      break;
    case 'minus':
      output = elInputX - elInputY
      strOperator = '-'
      break;
    case 'multiply':
      output = elInputX * elInputY
      strOperator = '×'
      break;
    case 'divide':
      output = elInputX / elInputY
      strOperator = '÷'
      break;
  }
  elSpanResult.innerText = `${elInputX} ${strOperator} ${elInputY} = ${output}`
})
