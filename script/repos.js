function formatDate(str) {
    var dt = new Date(str)
    return "Ultimo commit em "+ dt.toLocaleDateString()
}

function createRepoLangImg(langName){
    var langs = [
        {
            nome: "Dart",
            alt: "Logotipo da linguagem Dart",
            logo_url: "./img/dart.png"
        },
        {
            nome: "JavaScript",
            alt: "Logotipo da linguagem Javascript",
            logo_url: "./img/js.png"
        },
        {
            nome: "Python",
            alt: "Logotipo da linguagem Python",
            logo_url: "./img/py.png"
        },
        {
            nome: "Java",
            alt: "Logotipo da linguagem Java",
            logo_url: "./img/java.png"
        },
        {
            nome: "C++",
            alt: "Logotipo da linguagem C++",
            logo_url: "./img/cpp.png"
        },
        {
            nome: "C#",
            alt: "Logotipo da linguagem C Sharp",
            logo_url: "./img/cs.png"
        }
    ]

    var langImg = document.createElement("p")
    langImg.innerHTML = langName

    langs.forEach(lang => {
        if (lang.nome == langName){
            langImg = document.createElement("img")
            langImg.src = lang.logo_url
            langImg.title = lang.nome
            langImg.alt = lang.alt
            langImg.className = "langIcon"
            return true
        }
    })

    return langImg
}

function createRepoCard(repoInfo){

    var card = document.createElement("div")
    var cardBody = document.createElement("div")
    var title = document.createElement("h5")
    var updated = document.createElement("p")
    var button = document.createElement("a")
    
    card.className = "card repoCard"
    card.style="width: 18rem"
    
    cardBody.className = "card-body"
    title.className = "card-title"
    updated.className = "card-text"
    button.className = "btn btn-primary repoButton"
    
    title.innerHTML = repoInfo.name

    updated.innerHTML = formatDate(repoInfo.updated_at)
    button.innerHTML = "Ir para repositório"
    button.href = repoInfo.html_url
    button.target = "_blank"

    card.appendChild(cardBody)
    cardBody.appendChild(title)
    cardBody.appendChild(createRepoLangImg(repoInfo.language))
    cardBody.appendChild(updated)
    cardBody.appendChild(button)

    
    return card
}

function addToRepoSection(repo){
    // localizar elemento da seçao de repositorio
    var repoSection = document.getElementById("reposContainer")

    repoSection.appendChild(repo)
}

function showError(code){
    var repoSection = document.getElementById("reposContainer")

    var err = document.createElement("p")

    err.innerHTML = "Ocorreu um erro ao buscar os repositórios. Erro "+code
    err.className = "normalText"

    repoSection.appendChild(err)
}

async function getRepos (){
    
    // fetch para pegar repositórios da API
    // ou do cache se existir
    var request = await fetch("https://api.github.com/users/jgdml/repos", {cache: "force-cache"})

    // em caso de sucesso
    if (request.status == 200){

        // converter para json
        await request.json().then(json => {

            // ordenar por data
            json.sort((a, b) => {
                return new Date(b.updated_at) - new Date(a.updated_at)
            })

            // para cada repositório criar um card e adicionar na secao
            json.forEach(async repoInfo => {
                addToRepoSection(createRepoCard(repoInfo))
            })
        })
    }
    else{
        // caso nao for sucesso, mostrar erro
        showError(request.status)
    }
}

getRepos()
