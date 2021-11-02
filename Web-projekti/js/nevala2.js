//Vaihtoehtojen haku
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const hidden = document.getElementById('hidden')
let vastaus = 0

//Laskujen ja vastauksien luonti sekä vastauksien sekoitus taulukoissa
function generate_equation () {
  let num1 = Math.floor(Math.random() * 13)
  let num2 = Math.floor(Math.random() * 13)
  let erivastaus1 = Math.floor(Math.random() * 13)
  let erivastaus2 = Math.floor(Math.random() * 16)

  let kaikkiVastaukset = []
  let vaihdaVastaukset = []

  vastaus = num1 + num2

  document.getElementById('num1').innerHTML = num1
  document.getElementById('num2').innerHTML = num2

  kaikkiVastaukset = [vastaus, erivastaus1, erivastaus2]

  for (i = kaikkiVastaukset.length; i--; ) {
    vaihdaVastaukset.push(
      kaikkiVastaukset.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
    )
  }

  option1.innerHTML = vaihdaVastaukset[0]
  option2.innerHTML = vaihdaVastaukset[1]
  option3.innerHTML = vaihdaVastaukset[2]
}

//taustaväri esille
option1.addEventListener('click', function () {
  if (option1.innerHTML == vastaus) {
    $().prop((this.style.backgroundColor = 'green'))
    generate_equation()
  } else {
    $().prop((this.style.backgroundColor = 'red'))
  }
})

option2.addEventListener('click', function () {
  if (option2.innerHTML == vastaus) {
    $().prop((this.style.backgroundColor = 'green'))
    generate_equation()
  } else {
    $().prop((this.style.backgroundColor = 'red'))
  }
})

option3.addEventListener('click', function () {
  if (option3.innerHTML == vastaus) {
    $().prop((this.style.backgroundColor = 'green'))
    generate_equation()
  } else {
    $().prop((this.style.backgroundColor = 'red'))
  }
})
//Funktion kutsuminen
generate_equation()
