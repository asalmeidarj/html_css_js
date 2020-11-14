var time = Math.random() * 23.99
var hours = Number.parseInt(time)
var minutes = Number.parseInt(time * 60)
var minutes = minutes % 60 

function timeformat(){
    hours = ('0'+ hours).slice(-2)
    minutes = ('0' + minutes).slice(-2)
}

function dinamicImage(){
    var imageTemporal = window.document.getElementById("imgtime")
    if (hours < 12 && hours > 6){
        imageTemporal.src="_imagens/morning-small.jpg"
    }
    else if (hours < 18){
        imageTemporal.src="_imagens/afternoon-small.jpg"
        window.document.body.style.background = "orange"

        
    }
    else {
        var fot = window.document.getElementById("footer")
        fot.style.color = "white"
        imageTemporal.src="_imagens/night-small.jpg"
        window.document.body.style.background = "black"

        
    }
}

timeformat()
var mensage = window.document.getElementById("msgtime")
mensage.innerText = `It is ${hours} hours and ${minutes} minutes`
dinamicImage()