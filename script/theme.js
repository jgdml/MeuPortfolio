function changeTheme(str){
    // salvar o tema
    localStorage.setItem("theme", str)

    // mudar a tema
    document.documentElement.className = localStorage.getItem("theme")
}

function initTheme(){
    // se o tema nao existe, setar o padrao
    if (!localStorage.getItem("theme")){
        localStorage.setItem("theme", "dark")
    }

    var theme = localStorage.getItem("theme")
    document.documentElement.className = theme
    document.getElementById("input-"+theme).checked = true
}

initTheme()

