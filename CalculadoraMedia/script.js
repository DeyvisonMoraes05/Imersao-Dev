function media() {
    var notaPB = document.getElementById('notaPrimeiroBimestre')
    var notaSB = document.getElementById('notaSegundoBimestre')
    var notaTB = document.getElementById('notaTerceiroBimestre')
    var notaQB = document.getElementById('notaQuartoBimestre')
    var result = document.getElementById('resultado')

    if (notaPB.value.length == 0 && notaSB.value.length == 0 && notaTB.value.length == 0 && notaQB.value.length == 0) {
        result.innerHTML = 'Impossível calcular média sem notas'
        window.alert('[ERRO] Faltam as Notas')
    } else {
        result.innerHTML = 'Calculando a Média...<br>'
        var nPB = Number(notaPB.value)
        var nSB = Number(notaSB.value)
        var nTB = Number(notaTB.value)
        var nQB = Number(notaQB.value)
        var media = (nPB + nSB + nTB + nQB) / 4
        if (media >= 6) {
            result.innerHTML += `A sua Média é ${media}, você está APROVADO!`
        } else {
            result.innerHTML += `A sua Média é ${media}, você está REPROVADO!`
        }
    }

}

/*
var nome = "Deyvison"
var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 4
var notaDoQuartoBimestre = 2

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFizada = notaFinal.toFixed(1) // tratando o número com uma casa deciomal

console.log("Bem vindo, " + nome)
console.log("Sua nota final é " +notaFizada)

// REVISÃO
// VARIÁVEIS, STRINGS, CONSOLE.LOG, TOFIXED, OPERAÇÕES MATEMÁTICAS, CONCATENAÇÃO
 */