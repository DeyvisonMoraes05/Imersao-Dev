function Converter() {
    var valorElemento = document.getElementById("temperatura"); // PEGANDO O NÚMERO DIGITADO 
    var temperatura = valorElemento.value; // PASSANDO PARA VALOR NUMÉRICO

    var temperaturaEmCelsis = parseFloat(temperatura); // PASSANDO PARA UM NÚMERO PONTO FLUTUANTE

    var graufahrenheit = (temperaturaEmCelsis * 9 / 5) + 32; // CONVERTENDO PARA FAHRENHEIT 
    var grauKelvin = temperaturaEmCelsis + 273.15; // CONVERTENDO PARA  KELVIN

    var elementoValorConvertido = document.getElementById("valorConvertido");
    if (graufahrenheit >= 86.00) {
        var valorConvertido = `<p style="color: red">A temperatura é  ${graufahrenheit.toFixed(2)} ºF</p>`;
    } else {
        if (graufahrenheit <= 59.00) {
            var valorConvertido = `<p style="color: blue">A temperatura é  ${graufahrenheit.toFixed(2)} ºF</p>`;
        } else {
            var valorConvertido = `<p style="color: orange">A temperatura é  ${graufahrenheit.toFixed(2)} ºF</p>`;
        }
    }
    elementoValorConvertido.innerHTML = valorConvertido;

    var elementoValorConvertido2 = document.getElementById("valorConvertido2");
    if (grauKelvin >= 303.15) {
        var valorConvertido2 = `<p style="color: red">A temperatura é  ${grauKelvin.toFixed(2)} K</p>`;
    } else {
        if (grauKelvin <= 288.15) {
            var valorConvertido2 = `<p style="color: blue">A temperatura é  ${grauKelvin.toFixed(2)} K</p>`;
        } else {
            var valorConvertido2 = `<p style="color: orange">A temperatura é  ${grauKelvin.toFixed(2)} K</p>`;
        }
    }
    elementoValorConvertido2.innerHTML = valorConvertido2;
}