function formatDate(str) {
    var dt = new Date(str)
    return "Ultimo commit em "+ dt.toLocaleDateString()
}

function createRepoCard(repoInfo){

    var card = document.createElement("div")
    var cardBody = document.createElement("div")
    var title = document.createElement("h5")
    var linguagens = document.createElement("p")
    var updated = document.createElement("p")
    var button = document.createElement("a")
    
    card.className = "card repoCard"
    card.style="width: 18rem"
    
    cardBody.className = "card-body"
    title.className = "card-title"
    linguagens.className = "card-text"
    updated.className = "card-text"
    button.className = "btn btn-primary repoButton"
    
    title.innerHTML = repoInfo.name
    linguagens.innerHTML = repoInfo.language
    updated.innerHTML = formatDate(repoInfo.updated_at)
    button.innerHTML = "Ir para repositório"
    button.href = repoInfo.html_url
    button.target = "_blank"

    card.appendChild(cardBody)
    cardBody.appendChild(title)
    cardBody.appendChild(linguagens)
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
