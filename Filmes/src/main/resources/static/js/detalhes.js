document.addEventListener('DOMContentLoaded',function(){
    const parametroURL = new URLSearchParams(window.location.search);
    const filmeID = parametroURL.get('filmeId');
    var container = document.getElementById('detalhesFilme');

    if(filmeID){
        fetch('https://www.omdbapi.com/?apikey=83f3aebc&i=' + filmeID, 
        {method: 'GET'})
        .then(response => response.json())
        .then(data => {  
            if (data.Response === 'True') {
                
                const filmeNome = data.Title;
                const filmePoster = data.Poster;
                const filmePosterHtml = `<div><img src="${filmePoster}" alt="${filmeNome}"></div>`;
                document.getElementById('posterFilme').innerHTML += filmePosterHtml;
                document.getElementById('tituloFilme').innerHTML = filmeNome;


        }})
        .catch(err => {
            console.log(err);
        });
    }
})