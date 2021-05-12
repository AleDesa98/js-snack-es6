// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

var bici = [
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

var biciLeggera = bici[0];

for (let i = 1; i < bici.length; i++) {
    var biciCorrente = bici[i];

    if (biciCorrente.peso < biciLeggera.peso) {
        biciLeggera = biciCorrente;
    }
}
console.log(biciLeggera);