function carregarComponentes() {
    // 1. Detecta o ambiente (GitHub Pages vs Local)
    const isGitHub = window.location.hostname.includes('github.io');
    const repoName = '/english-flow-homepage/';
    
    // 2. Define a base: se estiver no GitHub, usa o nome do repo. Se local, usa raiz.
    const base = isGitHub ? repoName : '/';

    // 3. Carregar Header
    fetch(base + 'components/header.html')
        .then(response => {
            if (!response.ok) throw new Error(`Header não encontrado em: ${base}components/header.html`);
            return response.text();
        })
        .then(data => {
            const headerEl = document.getElementById('header-placeholder');
            if (headerEl) headerEl.innerHTML = data;
        })
        .catch(err => console.error('Erro ao carregar o header:', err));

    // 4. Carregar Footer
    fetch(base + 'components/footer.html')
        .then(response => {
            if (!response.ok) throw new Error(`Footer não encontrado em: ${base}components/footer.html`);
            return response.text();
        })
        .then(data => {
            const footerEl = document.getElementById('footer-placeholder');
            if (footerEl) footerEl.innerHTML = data;
        })
        .catch(err => console.error('Erro ao carregar o footer:', err));
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