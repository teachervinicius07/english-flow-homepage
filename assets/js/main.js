function carregarComponentes() {
    // O caminho é relativo ao index.html, que está na raiz
    fetch('components/header.html') 
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar o header');
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(err => console.error(err));

    fetch('components/footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar o footer');
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(err => console.error(err));
}

window.onload = carregarComponentes;