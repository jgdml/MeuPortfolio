function showLangImages(){
    // lista de logos
    var langs = [
        {
            nome: "Dart logo",
            logo_url: "./img/dart.png",
        },
        {
            nome: "Javascript logo",
            logo_url: "./img/js.png",
        },
        {
            nome: "Python logo",
            logo_url: "./img/py.jpg"
        },
        {
            nome: "Java logo",
            logo_url: "./img/java.png"
        }
    ]

    // identificar secao de logos
    var langList = document.getElementById("langList")

    // loop para colocar imagens
    langs.forEach(lang => {
        var langImg = document.createElement("img")
        langImg.src = lang.logo_url
        langImg.title = lang.nome
        langImg.alt = lang.nome
        langImg.className = "langImg"

        langList.appendChild(langImg)
    })
}

showLangImages()
