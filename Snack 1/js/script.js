// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

var inventarioBici = [
    {
        nome : "bici1",
        peso : 15
    },
    {
        nome : "bici2",
        peso : 10
    },
    {
        nome : "bici3",
        peso : 20
    }
]
var pesoBici = [];

for (i = 0; i < inventarioBici.length; i++) {
    pesoBici.push (inventarioBici[i].peso);
    pesoBici.sort();
}
var nomeBiciLeggera = ""

for (i = 0; i < inventarioBici.length; i++) {
    if (pesoBici[0] == inventarioBici[i].peso) {
        var {nome} = inventarioBici[i];
    }
}

console.log(
    `La bici con il peso minore è: ${nome}`
);