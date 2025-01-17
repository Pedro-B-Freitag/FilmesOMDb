document.addEventListener('DOMContentLoaded', function () {
    const parametroURL = new URLSearchParams(window.location.search);
    const filmeID = parametroURL.get('filmeId');

    if (filmeID) {
        fetch('https://www.omdbapi.com/?apikey=83f3aebc&i=' + filmeID, { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                if (data.Response === 'True') {
                    const filmeNome = data.Title;
                    const filmePoster = data.Poster;
                    const filmeDescricao = data.Plot;
                    const filmePosterHtml = `<img src="${filmePoster}" alt="${filmeNome}" >`;
                    document.getElementById('posterFilme').innerHTML += filmePosterHtml;
                    document.getElementById('tituloFilme').innerHTML = filmeNome;
                    document.getElementById('descricaoFilme').innerHTML = filmeDescricao;
                    ajustarTamanhoFonte(50,10,'tituloFilme', '.titulo');
                    ajustarTamanhoFonte(25,5,'descricaoFilme', '.descricao');
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    function ajustarTamanhoFonte(maxFontSize, minFontSize, id, div) {
        const element = document.getElementById(id);
        const container = document.querySelector(div);
        let fontSize = maxFontSize;
    
        element.style.fontSize = `${fontSize}px`;
        while ((element.scrollWidth > container.clientWidth || element.scrollHeight > container.clientHeight) && fontSize > minFontSize) {
            fontSize -= 1;
            element.style.fontSize = `${fontSize}px`;
        }
    }

    window.addEventListener('resize', ajustarTamanhoFonte);
});
