import * as readlineSync from 'readline-sync';

function szamolTeruletMagassaggal(alap: number, magassag: number): number {
    return alap * magassag;
}

function szamolTeruletEsOldallal(oldalA: number, oldalB: number, szogRad: number): number {
    return oldalA * oldalB * Math.sin(szogRad);
}

// Felhasználótól adatok bekérése
const alap = parseFloat(readlineSync.question("Adja meg a paralelogramma alapjat (szam): "));
const magassag = parseFloat(readlineSync.question("Adja meg a paralelogramma magassagat (szam): "));
const oldalA = parseFloat(readlineSync.question("Adja meg az elso oldalt (szam): "));
const oldalB = parseFloat(readlineSync.question("Adja meg a masodik oldalt (szam): "));
const szog = parseFloat(readlineSync.question("Adja meg a szoget fokban (szam): "));

// Szög átváltása radiánba
const szogRad = (szog * Math.PI) / 180;

// Terület kiszámolása mindkét módszerrel
const terulet1 = szamolTeruletMagassaggal(alap, magassag);
const terulet2 = szamolTeruletEsOldallal(oldalA, oldalB, szogRad);

// Eredmény kiírása
console.log(`Paralelogramma területe magassággal: ${terulet1}`);
console.log(`Paralelogramma területe oldallal és szöggel: ${terulet2}`);
