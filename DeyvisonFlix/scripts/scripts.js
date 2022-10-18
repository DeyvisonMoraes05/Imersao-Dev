var listaFilmes = [
    `./images/${"1pedra.jpg"}`,
    `./images/${"2camara.jpg"}`,
    `./images/${"3prisioneiro.jpg"}`,
    `./images/${"4calice.jpg"}`,
    `./images/${"5ordem.jpg"}`,
    `./images/${"6enigma.jpg"}`,
    `./images/${"7.0reliquias1.jpg"}`,
    `./images/${"7.1reliquias2.jpg"}`,
]

for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">")
}