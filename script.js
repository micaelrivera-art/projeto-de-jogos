document.addEventListener('DOMContentLoaded', () => {
    const btnTema = document.getElementById('btnTema');
    const btnAumentar = document.getElementById('btnAumentarFonte');
    const btnDiminuir = document.getElementById('btnDiminuirFonte');
    const btnCalcular = document.getElementById('btnCalcular');
    const inputHoras = document.getElementById('horasTrabalho');
    const divResultado = document.getElementById('resultado');
    const textoResultado = document.getElementById('textoResultado');

    let tamanhoFonte = 16;

    // Aumentar / Diminuir Fonte
    if (btnAumentar && btnDiminuir) {
        btnAumentar.addEventListener('click', () => {
            if (tamanhoFonte < 26) {
                tamanhoFonte += 2;
                document.documentElement.style.fontSize = `${tamanhoFonte}px`;
            }
        });

        btnDiminuir.addEventListener('click', () => {
            if (tamanhoFonte > 12) {
                tamanhoFonte -= 2;
                document.documentElement.style.fontSize = `${tamanhoFonte}px`;
            }
        });
    }

    // Alternar Modo Claro / Escuro
    if (btnTema) {
        btnTema.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            btnTema.textContent = document.body.classList.contains('light-mode')
                ? 'Modo Claro'
                : 'Modo Escuro';
        });
    }

    // Lógica do Simulador de Desenvolvimento de Jogos (Considerando um escopo médio de 500 horas)
    if (btnCalcular) {
        btnCalcular.addEventListener('click', () => {
            const horasPorDia = parseFloat(inputHoras.value);

            if (isNaN(horasPorDia) || horasPorDia <= 0) {
                alert("Por favor, digite um valor válido de horas diárias.");
                return;
            }

            const horasTotaisProjeto = 500; // Média de horas para um jogo indie de pequeno/médio porte
            const diasNecessarios = Math.round(horasTotaisProjeto / horasPorDia);
            const mesesNecessarios = (diasNecessarios / 30).toFixed(1);

            textoResultado.innerHTML = `
                Dedicando <strong>${horasPorDia} horas por dia</strong>, você acumulará cerca de <strong>${Math.round(horasPorDia * 365)} horas de treino em 1 ano</strong>!<br>
                Para lançar um protótipo completo de jogo Indie (aprox. 500h de trabalho), você levará cerca de <strong>${diasNecessarios} dias</strong> (aproximadamente <strong>${mesesNecessarios} meses</strong>).
            `;

            divResultado.classList.remove('hidden');
        });
    }
});