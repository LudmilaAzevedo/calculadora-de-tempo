document.getElementById("calcular").addEventListener("click", function() {
    const nome = document.getElementById("nome").value;
    const dataNascimento = new Date(document.getElementById("dataNascimento").value);
    const dataFalecimentoInput = document.getElementById("dataFalecimento").value;
    const dataAtual = new Date();
    let dataFinal = dataAtual;
    
    if (dataFalecimentoInput) {
        dataFinal = new Date(dataFalecimentoInput);
        if (dataFinal < dataNascimento) {
            document.getElementById("resultado").innerHTML = "A data de falecimento deve ser posterior à data de nascimento.";
            return;
        }
    }
    
    if (dataNascimento >= dataAtual) {
        document.getElementById("resultado").innerHTML = "A data de nascimento deve ser anterior à data atual.";
        return;
    }
    
    const diffMs = dataFinal - dataNascimento;
    const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffSemanas = Math.floor(diffDias / 7);
    const diffMeses = Math.floor(diffDias / 30.44);
    const diffAnos = Math.floor(diffDias / 365.25);
    
    document.getElementById("resultado").innerHTML = `
        <p>Olá ${nome}!</p>
        <p>Você já viveu aproximadamente:</p>
        <ul>
            <li>${diffDias} dias</li>
            <li>${diffSemanas} semanas</li>
            <li>${diffMeses} meses</li>
            <li>${diffAnos} anos</li>
        </ul>
    `;
});