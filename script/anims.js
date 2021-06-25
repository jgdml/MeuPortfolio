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