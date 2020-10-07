function carregar() {
var mens = document.getElementById('msg')
var imag = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours() //hora do sistema

//var hora = 15 forçar horario

mens.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 5){
    imag.src = 'fotomadruga.png'
    document.body.style.background ='#2d1412'
}
//BOA MADDRUGADA
else if(hora >= 5 && hora <12) {
    imag.src = 'fotomanha.png'
    document.body.style.background ='#e7e6ce'
}
// BOM DIA
else if(hora>=12 && hora < 18){
    imag.src = 'fototarde.png'
    document.body.style.background ='#da7445'
}
//BOA TARDE
else{
    imag.src = 'fotonoite.png'
    document.body.style.background ='#303133'
}//BOA NOITE
}