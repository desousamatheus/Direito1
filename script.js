document.addEventListener('DOMContentLoaded', () => {
    const actionButton = document.getElementById('btnAction');
    const hiddenFact = document.getElementById('hiddenFact');
    
    if (actionButton && hiddenFact) {
        actionButton.addEventListener('click', () => {
            hiddenFact.classList.toggle('show');
            
            if (hiddenFact.classList.contains('show')) {
                actionButton.innerHTML = 'Fechar Detalhes <i class="fa-solid fa-chevron-up" style="margin-left: 8px;"></i>';
                actionButton.style.backgroundColor = '#ef4444'; // Fica vermelho ao abrir
            } else {
                actionButton.innerHTML = 'Ver Impacto Real';
                actionButton.style.backgroundColor = '#3b82f6'; // Volta a ser azul
            }
        });
    }
});
