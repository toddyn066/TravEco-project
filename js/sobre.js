let sobre = document.querySelector('#sobre');

function dinamicSobre() {
    sobre.innerHTML = ''
    for (let i = 0; i < noticias.length; i++) {
        if (i == 0 || i == noticias.length - 1) {
            sobre.innerHTML += `
                <div class="col-12 mb-3">
                    <h2 class="cor1">${noticias[i].titulo}</h2>
                    <p>${noticias[i].resumo}</p>
                </div>
            `;
        } else {
            sobre.innerHTML += `
                <div class="col-12 col-md-6 mb-3">
                    <h3 class="cor1">${noticias[i].titulo}</h3>
                    <p>${noticias[i].resumo}</p>
                </div>
            `;
        }

    }
}

dinamicSobre();