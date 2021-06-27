function changeName (changeTo){
    // localizar elemento nome
    var nameHeader = document.getElementById("nome")

    // trocar valor do elemento
    if (changeTo == "full"){
        nameHeader.innerHTML = "João Gabriel Durante Marques de Lima"
    }
    else {
        nameHeader.innerHTML = "jgdml"
    }
}

function setAge(){
    // locallizar o elemento de idade
    var age = document.getElementById("age")
    // dt nascimento
    var dt = new Date(2001, 0, 28)
    var currentDt = new Date()

    // subtração da data de hoje e 
    // data de nascimento convertido para anos
    age.innerHTML = Math.trunc((currentDt - dt) / (1000 * 3600 * 24)/360)
}

setAge()