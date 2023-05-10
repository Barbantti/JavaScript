
function converter() {
    let distancia = Number(prompt('Digite uma distancia em metro (m)'))

    let paragrafo = document.querySelector('#txt')

    paragrafo.textContent = `A distancia de ${distancia} metros, corresponde a...`

    let calc_quilometros = distancia / 1000
    let arredonda_Km = calc_quilometros.toLocaleString()
    document.querySelector('.km').textContent = `${arredonda_Km} quilômetros (km)`

    let calc_hectometros = distancia / 100
    let arredonda_Hm = calc_hectometros.toLocaleString()
    document.querySelector('.hm').textContent = `${arredonda_Hm} hectômetros (Hm)`

    let calc_decametros = distancia / 10
    document.querySelector('.dam').textContent = `${calc_decametros} decâmetros (Dam)`

    let calc_decimetros = distancia * 10
    let arredonda_Dm = calc_decimetros.toLocaleString()
    document.querySelector('.dm').textContent = `${arredonda_Dm} decímetros (Dm)`

    let calc_centimetros = distancia * 10000
    let arredonda_Cm = calc_centimetros.toLocaleString()
    document.querySelector('.cm').textContent = `${arredonda_Cm} centímetros (cm)`

    let calc_milimetros = distancia * 1000
    let arredonda_Mm = calc_milimetros.toLocaleString()
    document.querySelector('.mm').textContent = `${arredonda_Mm} milímetros (mm)`
}





//O método toLocaleString() retorna uma string com uma representação sensível a linguagem deste número.

