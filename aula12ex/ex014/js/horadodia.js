function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()  
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = './imagens/morning.png'
        document.body.style.background = '#f6E4C3'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = './imagens/afternoon.png'
        document.body.style.background = '#ECC25C'
    } else {
        //BOA NOITE!
        img.src = './imagens/evening.png'
        document.body.style.background = '#03588C'
    } 
}
