function converter() {
    let quote = Number(prompt('Antes de mais nada. Quanto está a cotação do dollar agora?'))
    let wallet = parseFloat(prompt('Quantos R$ voce tem na carteira?')).toFixed(2)
    let USD = wallet / quote
    let USD_Value = USD.toFixed(2)
    document.querySelector('#valor').innerHTML = `<p>Voce tem R$(${wallet}) em reais. E convertido para dólar são US$${USD_Value}.</p>`
}