function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`


    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = '3.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = '2.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //boa noite
        img.src = '1.jpg'
        document.body.style.background = '#515154'
    }
}

