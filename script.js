function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 16
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'manha.jpg'
        document.body.style.background = '#D2B48C'
    } else if 
        (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#F4A460'
    } else {
        //Boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#6959CD' 
    }
}
