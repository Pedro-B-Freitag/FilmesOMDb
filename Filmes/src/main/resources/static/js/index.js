function mostrarResultados() {
    document.getElementById('resultadosPesquisa').style.display = 'block';
}

function esconderResultados() {
    setTimeout(() => {
        document.getElementById('resultadosPesquisa').style.display = 'none';
    }, 200);
}

function pesquisarFilme() {

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("pesquisa");
    filter = input.value.toUpperCase();
    ul = document.getElementById("resultadosPesquisa");
    li = ul.getElementsByTagName("li");
    document.querySelector('.Filmes').innerHTML = '';
    

    fetch('http://www.omdbapi.com/?apikey=83f3aebc&s=' + filter, 
    {method: 'GET'})
    .then(response => response.json())
    .then(data => {
            
        if (data.Response === 'True') {
            data.Search.forEach(filme => {
                const filmeNome = filme.Title;
                const filmePoster = filme.Poster;
                const filmeID = filme.imdbID;
                const filmeHtml = `<li><a href='Detalhes?filmeId=${filmeID}'><div class = "poster-filme"> <img  src="${filmePoster}" alt="${filmeNome}"></div><h2>${filmeNome}</h2></a></li>`;
                document.querySelector('.Filmes').innerHTML += filmeHtml;
        })
        
    }})
    .catch(err => {
        console.log(err);
    });

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if(filmePoster.toString() === "N/A"){
            li[i].style.display = "none";
        }
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}
