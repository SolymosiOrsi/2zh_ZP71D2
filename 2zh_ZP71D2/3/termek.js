// Függvény a legolcsóbb termék nevének meghatározásához
function legolcsobbTermek(termekek) {
    if (termekek.length === 0) {
        return "Nincs termék megadva.";
    }
    var legolcsobb = termekek[0];
    for (var i = 1; i < termekek.length; i++) {
        if (termekek[i].ar < legolcsobb.ar) {
            legolcsobb = termekek[i];
        }
    }
    return legolcsobb.nev;
}
// Függvény az átlagár kiszámolásához
function atlagAr(termekek) {
    if (termekek.length === 0) {
        return 0;
    }
    var osszeg = termekek.reduce(function (acc, termek) { return acc + termek.ar; }, 0);
    return osszeg / termekek.length;
}
// Függvény az árak szórásának kiszámolásához
function arakSzorasa(termekek) {
    if (termekek.length <= 1) {
        return 0;
    }
    var atlag = atlagAr(termekek);
    var negyzetekOsszege = termekek.reduce(function (acc, termek) { return acc + Math.pow(termek.ar - atlag, 2); }, 0);
    return Math.sqrt(negyzetekOsszege / (termekek.length - 1));
}
// HTML elemekre való hivatkozások
var nevInput = document.getElementById("nevInput");
var arInput = document.getElementById("arInput");
var hozzaadButton = document.getElementById("hozzaadButton");
var eredmenyDiv = document.getElementById("eredmenyDiv");
var tablaBody = document.getElementById("tablaBody");
// Termékek tömbje
var termekek = [];
// Hozzáadás gomb eseménykezelője
hozzaadButton === null || hozzaadButton === void 0 ? void 0 : hozzaadButton.addEventListener("click", function () {
    var nev = nevInput.value;
    var ar = parseFloat(arInput.value);
    if (!nev || isNaN(ar)) {
        alert("Kérlek adj meg egy érvényes fantázianevet és árat!");
        return;
    }
    var ujTermek = { nev: nev, ar: ar };
    termekek.push(ujTermek);
    // Frissítjük az eredményeket
    frissitEredmenyeket();
    // Frissítjük a táblázatot
    frissitTabla();
});
// Eredmények frissítése
function frissitEredmenyeket() {
    var legolcsobb = legolcsobbTermek(termekek);
    var atlag = atlagAr(termekek);
    var szoras = arakSzorasa(termekek);
    if (eredmenyDiv) {
        eredmenyDiv.innerHTML = "\n      <p>Legolcs\u00F3bb term\u00E9k: ".concat(legolcsobb, "</p>\n      <p>\u00C1tlag\u00E1r: ").concat(atlag.toFixed(2), "</p>\n      <p>\u00C1rak sz\u00F3r\u00E1sa: ").concat(szoras.toFixed(2), "</p>\n    ");
    }
    else {
        console.error("Az eredmenyDiv elem nem található.");
    }
}
// Táblázat frissítése
function frissitTabla() {
    // Töröljük a táblázat tartalmát
    tablaBody.innerHTML = "";
    // Táblázat feltöltése a termékekkel
    termekek.forEach(function (termek, index) {
        var sor = tablaBody.insertRow();
        // Név cella
        var nevCella = sor.insertCell(0);
        nevCella.textContent = termek.nev;
        // Ár cella
        var arCella = sor.insertCell(1);
        arCella.textContent = termek.ar.toFixed(2);
        // Törlés gomb cella
        var torlesCella = sor.insertCell(2);
        var torlesGomb = document.createElement("button");
        torlesGomb.textContent = "Törlés";
        torlesGomb.addEventListener("click", function () { return torlesTermek(index); });
        torlesCella.appendChild(torlesGomb);
    });
}
// Termék törlése
function torlesTermek(index) {
    termekek.splice(index, 1);
    frissitEredmenyeket();
    frissitTabla();
}
