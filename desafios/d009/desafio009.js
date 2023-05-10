function reajustar() {
    let name = prompt('Qual é o nome do funcionário?')
    let wage = Number(prompt(`Qual é o salário de ${name}?`))
    let adjustment = Number(prompt(`O salário de ${name} vai ser reajustado em qual porcentagem?`))

    document.querySelector('#reajuste').innerHTML = `<h2>${name} recebeu um aumento salarial!</h2>`
    document.querySelector('.salario').textContent = `O salário atual era de R$${wage}.`

    let wageAdjustment = (wage * adjustment) / 100
    let round_wageAdjustment = Math.round(wageAdjustment)
    document.querySelector('.aumento').textContent = `Com um aumento de ${adjustment}%, o salário vai aumentar de R$${round_wageAdjustment} no próximo mes.`

    let newWage = wage + wageAdjustment
    let total_newWage = newWage.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    
    document.querySelector('.total').textContent = `E a partir daí, ${name} vai passar a ganhar R$${total_newWage}.`
}