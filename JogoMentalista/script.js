var tentativas = 1;
var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = document.getElementById("valor");
    var valorChute = parseInt(chute.value);
    var btn = document.getElementById("btn_chute")

    elementoResultado.innerHTML = "";

    if (valorChute > 10 || valorChute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else if (valorChute == numeroSecreto && tentativas <= 3) {
        elementoResultado.innerHTML = `Você acertou na ${tentativas}º tentativa, recarregue a pagina!!!`;
        chute.readOnly = true;
        btn.disabled = true;
    } else if (tentativas >= 3) {
        elementoResultado.innerHTML = `Errou, o número secreto era ${numeroSecreto}, recarregue a pagina!!!`;
        chute.readOnly = true;
        btn.disabled = true;
    } else {
        tentativas++;
    }
}