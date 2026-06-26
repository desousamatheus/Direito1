// script.js
document.addEventListener('DOMContentLoaded', () => {
    const actionButton = document.getElementById('btnAction');
    const hiddenFact = document.getElementById('hiddenFact');
    
    if (actionButton && hiddenFact) {
        actionButton.addEventListener('click', () => {
            hiddenFact.classList.toggle('show');
            
            if (hiddenFact.classList.contains('show')) {
                actionButton.textContent = 'Fechar Detalhes';
            } else {
                actionButton.textContent = 'Ver Impacto Real';
            }
        });
    }
});
