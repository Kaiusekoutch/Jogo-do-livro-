const botoes = document.querySelectorAll('.btn-proximo');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const passoAtual = botao.closest('.passo');
        const proximoPasso = document.getElementById(`passo-${botao.dataset.proximo}`);
        
        passoAtual.classList.remove('ativo');
        proximoPasso.classList.add('ativo');
    });
});
