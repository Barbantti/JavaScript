
function verificar() {
    let numero = Number(prompt('Digite um número inteiro qual quer'))
    let antes = `Antes de ${numero}, temos o número ${numero -= 1}`
    let depois = `Depois de ${numero += 1}, temos o número ${numero += 1}`
    alert(`${antes} \n${depois}`)
}