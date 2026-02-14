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
    const isHome = path === '/' || path.endsWith('index.html') || path === '/english-flow-homepage/';
    
    const hero = document.getElementById('dynamic-hero');
    const title = document.getElementById('header-title');
    const subtitle = document.getElementById('header-subtitle');

    if (!isHome && hero) {
        // APLICA VERSÃO LEAN (Páginas Internas)
        hero.classList.add('lean');
        
        if (path.includes('contato.html')) {
            title.innerText = "Vamos conversar";
            subtitle.innerText = "Sem compromisso, sem pressão. Apenas clareza.";
        } else if (path.includes('planos.html')) {
            title.innerText = "Nossos Planos";
            subtitle.innerText = "Escolha o ritmo ideal para o seu progresso.";
        } else if (path.includes('sobre.html')) {
            title.innerText = "Sobre o English Flow";
            subtitle.innerText = "Clareza e constância no aprendizado.";
        } else if (path.includes('dicas.html')) {
            title.innerText = "Dicas & Reflexões";
            subtitle.innerText = "Aprenda com consciência e contexto.";
        } else if (path.includes('teste-nivel.html')) {
            title.innerText = "Teste de Nível";
            subtitle.innerText = "Avaliação rápida do A1 ao C2.";
        }
    }
}

// Inicia tudo
carregarComponentes();