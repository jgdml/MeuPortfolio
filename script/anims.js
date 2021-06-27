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
    var age = document.getElementById("age")
    var dt = new Date(2001, 0, 28)
    var currentDt = new Date()

    age.innerHTML = Math.trunc((currentDt - dt) / (1000 * 3600 * 24)/360)
}

setAge()