// Função para redirecionar ao formulário de reserva
function reservarQuarto() {
    alert('Você será redirecionado para a página de reservas!');
    window.location.href = 'https://www.exemplo.com/reserva';
}

// Função para chamada
function ligarAgora() {
    alert('Ligando para (31) 3197 8014...');
    window.location.href = 'tel:+3131978014';
}

// Calcula o total estimado de uma reserva
function calcularTotalEstimado() {
    const numNoitesInput = document.getElementById('num_noites');
    const numHospedesInput = document.getElementById('num_hospedes');
    const tipoQuartoSelect = document.getElementById('tipo_quarto');
    const totalEstimadoInput = document.getElementById('total_estimado');

    const numNoites = parseInt(numNoitesInput.value) || 0;
    const numHospedes = parseInt(numHospedesInput.value) || 0;
    const tipoQuarto = tipoQuartoSelect.value;

    // Preços fictícios para demonstração
    let precoPorNoite = 0;
    if (tipoQuarto === 'simples') {
        precoPorNoite = 100;
    } else if (tipoQuarto === 'duplo') {
        precoPorNoite = 150;
    } else if (tipoQuarto === 'triplo') {
        precoPorNoite = 200;
    } else if (tipoQuarto === 'suite') {
        precoPorNoite = 300;
    }

    const totalEstimado = numNoites * precoPorNoite * numHospedes;
    totalEstimadoInput.value = 'R$ ' + totalEstimado.toFixed(2);
}

// Chama a função para calcular o total ao carregar a página
window.onload = function() {
    const numNoitesInput = document.getElementById('num_noites');
    const numHospedesInput = document.getElementById('num_hospedes');
    const tipoQuartoSelect = document.getElementById('tipo_quarto');
    numNoitesInput.addEventListener('input', calcularTotalEstimado);
    numHospedesInput.addEventListener('input', calcularTotalEstimado);
    tipoQuartoSelect.addEventListener('change', calcularTotalEstimado);

    calcularTotalEstimado();
};
