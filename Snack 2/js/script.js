// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

var squadre = [
    {
        nome : "juve",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "roma",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "milan",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "inter",
        puntiFatti : 0,
        falliSubiti : 0
    },
]

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

var squadreDopo = [];

for (i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = getRandomNumber (0, 100);
    squadre[i].falliSubiti = getRandomNumber (0, 100);

    var {nome, falliSubiti} = squadre[i];
    squadreDopo.push({nome, falliSubiti});
}

console.log(squadreDopo);