
function formatDate(str) {
    var dt = new Date(str)
    return "Ultimo commit em "+ dt.toLocaleDateString()
}


function decodeReadme(rd) {
    var str = decodeURIComponent(escape(window.atob(rd)))
    return str
}


function formatReadme(rd, name){
    rd = rd.replace("#", "")
    rd = rd.replace("##", "")
    return rd.replace(name, "").substring(0, 100)+"...."
}


function createRepoCard(repoInfo, readme){

    // localizar elemento da seçao de repositorio
    var repoSection = document.getElementById("reposContainer")


    var card = document.createElement("div")
    var cardBody = document.createElement("div")
    var title = document.createElement("h5")
    var text = document.createElement("p")
    var updated = document.createElement("p")
    var button = document.createElement("a")
    
    card.className = "card repoCard"
    card.style="width: 18rem;"
    
    cardBody.className = "card-body"
    title.className = "card-title"
    text.className = "card-text"
    updated.className = "card-text"
    updated.style = "color: gray;"
    button.className = "btn btn-primary repoButton"
    
    title.innerHTML = repoInfo.name
    text.innerHTML = formatReadme(readme, repoInfo.name)
    updated.innerHTML = formatDate(repoInfo.updated_at)
    button.innerHTML = "Ir para repositório"
    button.href = repoInfo.html_url
    button.target = "_blank"

    card.appendChild(cardBody)
    cardBody.appendChild(title)
    cardBody.appendChild(text)
    cardBody.appendChild(updated)
    cardBody.appendChild(button)

    // adicionar card na secao
    repoSection.appendChild(card)
}


function showError(code){
    var repoSection = document.getElementById("reposContainer")

    var err = document.createElement("p")

    err.innerHTML = "Ocorreu um erro ao buscar os repositórios. Erro "+code
    err.className = "normalText"

    repoSection.appendChild(err)
}


async function getRepos (){
    // fazer get para pegar informaçao do repositorio
    var request = await fetch("https://api.github.com/users/jgdml/repos", {cache: "force-cache"})

    if (request.status == 200){
        await request.json().then(json => {

            json.sort((a, b) => {
                return new Date(b.updated_at) - new Date(a.updated_at)
            })
            
            // ver quantos contribuidores o repositorio tem
            json.forEach(async repoInfo => {
                var readme = await fetch(repoInfo.url+"/readme", {cache: "force-cache"})

                if (readme.status == 200){
                    readme.json().then(
                        // criar os cards
                        rd => createRepoCard(repoInfo, decodeReadme(rd.content))
                    )
                }
                else{
                    createRepoCard(repoInfo, "Não possui readme")
                }
    
            })
        })

    }
    else{
        showError(request.status)
    }
}

getRepos()
