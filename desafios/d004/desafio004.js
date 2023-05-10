
function troco() {
    let produto = prompt('Que produto voce está comprando?')

    let valor = Number(prompt(`Quanto custa o ${produto} que voce está comprando?`))
    let conv = valor.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

    let pag = Number(prompt(`Qual foi o valor que voce deu para pagar ${produto}?`))
    let convp = pag.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

    let dife = pag -= valor
    let troco = dife.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

   alert(`Voce comprou ${produto} que custou ${conv}. \n Deu ${convp} em dinheiro e vai receber ${troco} de troco. \n Volte Sempre!`)
}