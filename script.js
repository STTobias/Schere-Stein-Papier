let spielerWahl;
const optionen = ["Schere", "Stein", "Papier"];
let spielerPunkte = 0;
let computerPunkte = 0;

//Schere
document.getElementById("schere").addEventListener("click", function(){
    spielerWahl = "Schere";

    const computerWahl = optionen[Math.floor(Math.random() * optionen.length)];
    bestimmeGewinner(spielerWahl, computerWahl);
});

//Stein
document.getElementById("stein").addEventListener("click", function(){
    spielerWahl = "Stein";

    const computerWahl = optionen[Math.floor(Math.random() * optionen.length)];
    bestimmeGewinner(spielerWahl, computerWahl);
});

//Stein
document.getElementById("papier").addEventListener("click", function(){
    spielerWahl = "Papier";

    const computerWahl = optionen[Math.floor(Math.random() * optionen.length)];
    bestimmeGewinner(spielerWahl, computerWahl);
});

function bestimmeGewinner(spielerWahl, computerWahl) {
    const ergebnisElement = document.getElementById("ergebnis");
    console.log("Spieler:", spielerWahl, "Computer:", computerWahl);

    highlightComputerChoice(computerWahl); // Highlight Computerwahl
    ergebnisElement.classList.remove("text-winner", "text-loser", "text-draw");

    if (spielerWahl === computerWahl) {
        document.getElementById("ergebnis").textContent = "Unentschieden!";
        console.log("Unentschieden: Highlighting 'draw'");
        highlightButton(spielerWahl.toLowerCase(), "draw");
        ergebnisElement.classList.add("text-draw");
    } else if (
        (spielerWahl === "Schere" && computerWahl === "Papier") ||
        (spielerWahl === "Stein" && computerWahl === "Schere") ||
        (spielerWahl === "Papier" && computerWahl === "Stein")
    ) {
        document.getElementById("ergebnis").textContent = "Spieler Gewinnt!";
        spielerPunkte++;
        console.log("Spieler gewinnt: Highlighting 'winner'");
        highlightButton(spielerWahl.toLowerCase(), "winner");
        document.getElementById("spielerPunktZahl").textContent = spielerPunkte;
        ergebnisElement.classList.add("text-winner");
    } else {
        document.getElementById("ergebnis").textContent = "Computer gewinnt!";
        computerPunkte++;
        console.log("Computer gewinnt: Highlighting 'loser'");
        highlightButton(spielerWahl.toLowerCase(), "loser");
        document.getElementById("computerPunktZahl").textContent = computerPunkte;
        ergebnisElement.classList.add("text-loser");
    }
}

document.getElementById("resetbutton").addEventListener("click", function(){
    const ergebnisElement = document.getElementById("ergebnis");
    spielerPunkte = 0
    computerPunkte = 0
    document.getElementById("spielerPunktZahl").textContent = spielerPunkte;
    document.getElementById("computerPunktZahl").textContent = computerPunkte;
    document.getElementById("ergebnis").textContent = "Spiel Zurückgesetzt";
    ergebnisElement.classList.remove("text-winner", "text-loser", "text-draw");
});

function highlightButton(buttonId, resultClass) {
    const button = document.getElementById(buttonId);
    button.classList.remove("winner", "loser", "draw");
    button.classList.add(resultClass);

    setTimeout(() => {
        button.classList.remove(resultClass);
    }, 3000);
}

function highlightComputerChoice(ComputerWahl) {
    console.log("Highlighting:", ComputerWahl);
    const buttonId = "computer" + ComputerWahl.toLowerCase();
    const button = document.getElementById(buttonId);
    button.classList.add("highlight");

    setTimeout(() => {
        button.classList.remove("highlight");
        console.log("Highlight entfernt:", button.classList);
    }, 3000);
}



