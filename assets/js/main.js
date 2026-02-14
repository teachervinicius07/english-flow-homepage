async function carregarComponentes() {
    const isGitHub = window.location.hostname.includes('github.io');
    const repoName = '/english-flow-homepage/';
    const base = isGitHub ? repoName : '/';

    try {
        // 1. Carrega o Header
        const respHeader = await fetch(base + 'components/header.html');
        if (respHeader.ok) {
            const htmlHeader = await respHeader.text();
            document.getElementById('header-placeholder').innerHTML = htmlHeader;
            
            // AGORA SIM: Com o header na tela, configuramos os textos
            configurarHeader();
        }

        // 2. Carrega o Footer
        const respFooter = await fetch(base + 'components/footer.html');
        if (respFooter.ok) {
            const htmlFooter = await respFooter.text();
            document.getElementById('footer-placeholder').innerHTML = htmlFooter;
        }
    } catch (err) {
        console.error("Erro ao carregar componentes:", err);
    }
}

function configurarHeader() {
    const path = window.location.pathname;
    
    // Referências aos elementos (agora eles existem no DOM)
    const title = document.querySelector('.hero-content h1');
    const subtitle = document.querySelector('.hero-sub');
    const video = document.getElementById('heroVideo');

    // Se não encontrar os elementos básicos, para a execução para não dar erro
    if (!title || !subtitle) return;

    if (path.includes('contato.html')) {
        title.innerText = "Vamos conversar";
        subtitle.innerText = "Sem compromisso, sem pressão. Apenas clareza.";
        if(video) video.style.display = "none"; 
    } 
    else if (path.includes('dicas.html')) {
        title.innerText = "Dicas & Reflexões";
        subtitle.innerText = "Aprender inglês com consciência, método e contexto.";
    } 
    else if (path.includes('planos.html')) {
        title.innerText = "Planos English Flow";
        subtitle.innerText = "Escolha o ritmo ideal para o seu inglês fluir.";
    } 
    else if (path.includes('sobre.html')) {
        title.innerText = "Sobre o English Flow";
        subtitle.innerText = "Clareza, constância e propósito no aprendizado de inglês.";
    } 
    else if (path.includes('teste-nivel.html')) {
        title.innerText = "Teste de Nível de Inglês";
        subtitle.innerText = "Avaliação rápida e indicativa do A1 ao C2.";
    }
    // O vídeo já carrega o padrão do HTML, não precisa de "else" forçando load
}

// Inicia tudo
carregarComponentes();