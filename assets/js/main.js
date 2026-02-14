function carregarComponentes() {
    const isGitHub = window.location.hostname.includes('github.io');
    const repoName = '/english-flow-homepage/';
    
    // 1. Define a base do repositório (apenas para GitHub)
    const baseRepo = isGitHub ? repoName : '/';

    // 2. Verifica se o ficheiro atual está dentro da pasta 'pages'
    // Se estiver, precisamos de '../' para voltar à raiz antes de buscar components
    const isInsidePages = window.location.pathname.includes('/pages/');
    const pathPrefix = isInsidePages ? '../' : '';

    // 3. O caminho final combina a base do repo (se houver) com o prefixo de subpasta
    // No GitHub, em /pages/, o caminho será: /english-flow-homepage/components/...
    // No Local, em /pages/, o caminho será: ../components/...
    
    const finalPath = isGitHub ? (baseRepo + 'components/') : (pathPrefix + 'components/');

    console.log("A carregar componentes de:", finalPath);

    // Carregar Header
    fetch(finalPath + 'header.html')
        .then(response => {
            if (!response.ok) throw new Error('Header não encontrado');
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(err => console.error(err));

    // Carregar Footer
    fetch(finalPath + 'footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Footer não encontrado');
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