function Converter() {
    var valorElemento = document.getElementById("valor"); // PEGANDO O NÚMERO DIGITADO 
    var valor = valorElemento.value; // PASSANDO PARA VALOR NUMÉRICO

    var valorEmDolarNumerico = parseFloat(valor); // PASSANDO PARA UM NÚMERO PONTO FLUTUANTE
    //var valorEmEuroNumerico = parseFloat(valor); // PASSANDO PARA UM NÚMERO PONTO FLUTUANTE
    //var valorEmBitcoinNumerico = parseFloat(valor); // PASSANDO PARA UM NÚMERO PONTO FLUTUANTE

    var valorEmDolar = valorEmDolarNumerico / 5.2398; // CONVERTENDO O NÚMERO PARA SUA TAXA 
    var valorEmEuro = valorEmDolarNumerico / 6.1863; // CONVERTENDO O NÚMERO PARA SUA TAXA
    var valorEmBitcoin = valorEmDolarNumerico / 251194.68; // CONVERTENDO O NÚMERO PARA SUA TAXA


    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Dólar é U$" + valorEmDolar.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
    var elementoValorConvertido2 = document.getElementById("valorConvertido2");
    var valorConvertido2 = "O resultado em Euro é €" + valorEmEuro.toFixed(2);
    elementoValorConvertido2.innerHTML = valorConvertido2;
    var elementoValorConvertido3 = document.getElementById("valorConvertido3");
    var valorConvertido3 = "O resultado em Bitcoin é ₿" + valorEmBitcoin.toFixed(5);
    elementoValorConvertido3.innerHTML = valorConvertido3;

}