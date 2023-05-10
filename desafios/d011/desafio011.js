function verificar()    {
    let year = Number(prompt('Qual é o ano que voce quer verificar?'))

    document.querySelector('#bissexto').innerHTML = `<h2>Analisando o ano de ${year}...</h2>`

    if (year%400 == 0 || year%4 == 0) {
        let true_leapyear =  document.querySelector('.simeBissexto').innerHTML = `O ano de ${year} SIM É BISSEXTO✅`
        return true_leapyear     
    } else if (year%100 != 0) {   
        let false_leapyear = document.querySelector('.naoeBissesto').innerHTML = `O ano de ${year} NÃO É BISSEXTO❌`
        return false_leapyear      
    }   
}