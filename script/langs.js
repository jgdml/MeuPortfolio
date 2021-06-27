function showLangImages(){
    // lista de logos
    var langs = [
        {
            nome: "Dart logo",
            alt: "Logotipo da linguagem Dart",
            logo_url: "./img/dart.png"
        },
        {
            nome: "Javascript logo",
            alt: "Logotipo da linguagem Javascript",
            logo_url: "./img/js.png"
        },
        {
            nome: "Python logo",
            alt: "Logotipo da linguagem Python",
            logo_url: "./img/py.png"
        },
        {
            nome: "Java logo",
            alt: "Logotipo da linguagem Java",
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
        langImg.alt = lang.alt
        langImg.className = "borderImg"

        langList.appendChild(langImg)
    })
}

showLangImages()
