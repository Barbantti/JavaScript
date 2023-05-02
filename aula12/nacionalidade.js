function verificar() {
    var txtpais = document.getElementById('pais')
    var res = document.querySelector('div#res')
    res.innerHTML = `<p>Voce mora em ${txtpais.value}.</p>`
    if (txtpais.value == 'Brasil'){
        res.innerHTML += `<p>Voce é Brasileiro!</p>`
    } else {
        res.innerHTML += `<p>Voce é estrangeiro!</p>`
    }
}