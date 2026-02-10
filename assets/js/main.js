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

function configurarHeader() {
    const path = window.location.pathname;
    const title = document.getElementById('header-title');
    const subtitle = document.getElementById('header-subtitle');
    const video = document.getElementById('heroVideo');
    const source = document.getElementById('videoSource');

    if (path.includes('contato.html')) {
        title.innerText = "Vamos conversar";
        subtitle.innerText = "Sem compromisso, sem pressão. Apenas clareza.";
        video.style.display = "none"; // Exemplo: esconde vídeo no contato
    } 
    else if (path.includes('dicas.html')) {
        title.innerText = "Dicas & Reflexões";
        subtitle.innerText = "Aprender inglês com consciência, método e contexto.";
        source.src = "videos/english_flow_header.mp4#t=7";
        video.load();
    } 
    else if (path.includes('planos.html')) {
        title.innerText = "Planos English Flow";
        subtitle.innerText = "Escolha o ritmo ideal para o seu inglês fluir.";
        source.src = "videos/english_flow_header.mp4#t=7";
        video.load();
    } 
    else if (path.includes('sobre.html')) {
        title.innerText = "Sobre o English Flow";
        subtitle.innerText = "Clareza, constância e propósito no aprendizado de inglês.";
        source.src = "videos/english_flow_header.mp4#t=7";
        video.load();
    } 
    else if (path.includes('teste-nivel.html')) {
        title.innerText = "Teste de Nível de Inglês";
        subtitle.innerText = "Avaliação rápida e indicativa do A1 ao C2.";
        source.src = "videos/english_flow_header.mp4#t=7";
        video.load();
    } 
    else {
        // Padrão (Homepage)
        title.innerText = "Fluência no inglês para sua carreira.";
        subtitle.innerText = "Aulas curtas e objetivas para profissionais ocupados.";
        source.src = "videos/english_flow_header.mp4#t=7";
        video.load();
    }
}