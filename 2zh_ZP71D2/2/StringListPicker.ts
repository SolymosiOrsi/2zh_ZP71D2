import * as readlineSync from 'readline-sync';

function valasszVeletlenszeruen(lista: string[]): string[] {
    if (lista.length < 3) {
        console.error("Hiba: A bemeneti lista nem tartalmaz elég elemet.");
        return [];
    }

    const valasztottak = lista.sort(() => Math.random() - 0.5).slice(0, 3);
    return valasztottak;
}

// Felhasználótól bemeneti lista kérése
const bemenetString = readlineSync.question("Adjon meg egy vesszovel elvalasztott sztring listat (pl.: elso, masodik, harmadik): ");
const bemenet: string[] = bemenetString.split(',').map(s => s.trim());

// Véletlenszerűen kiválasztott 3 elem
const eredmeny: string[] = valasszVeletlenszeruen(bemenet);

// Kiírjuk az eredményt
console.log("Véletlenszerűen kiválasztott elemek:", eredmeny);

