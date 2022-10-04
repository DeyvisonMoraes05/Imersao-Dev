var tentativas = 1;
var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = document.getElementById("valor");
    var valorChute = parseInt(chute.value);
    var btn = document.getElementById("btn_chute")
    var paragrafo = document.getElementById("exibir")

    elementoResultado.innerHTML = "";

    // Verificar se o número ta dentro do valor especificado
    if (valorChute > 10 || valorChute < 0 || typeof(valorChute) == NaN) {
        elementoResultado.innerHTML = "Você deve digitar um número entre 0 e 10";
    } else if (valorChute == numeroSecreto && tentativas <= 3) {
        elementoResultado.innerHTML = `Você acertou na ${tentativas}º tentativa, recarregue a pagina!!!`;
        chute.readOnly = true;
        btn.disabled = true;
    } else if (tentativas >= 3) {
        elementoResultado.innerHTML = `Errou, o número secreto era ${numeroSecreto}, recarregue a pagina!!!`;
        chute.readOnly = true;
        btn.disabled = true;
    } else {
        if (valorChute > numeroSecreto) {
            paragrafo.innerHTML = `O número secreto é menor que ${valorChute}`;
        } else {
            paragrafo.innerHTML = `o número secreto é maior que ${valorChute} `;
        }
        tentativas++;
    }
}