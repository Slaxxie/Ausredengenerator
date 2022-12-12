"use strict";
let part1 = [
    "Ey, voll nett, dass du fragst, aber",
    "Ich wünschte, ich hätte Zeit, aber",
    "Danke für die Einladung, aber",
    "Also, leider ist es so,",
    "Ganz schlecht,",
    "voll nice von dir, aber",
    "Puuuh, wäre so geil, nur",
    "Schaaade,"
];
let part2 = [
    "die Baustelle an der S-Bahn-Station",
    "meine Bartagame",
    "mein Horoskop",
    "meine Tante",
    "der E-Roller",
    "die Weltuhr",
    "mein Goldfisch",
    "meine Nachbarin"
];
let part3 = [
    "hat ne Wette verloren und muss die eine Wand am Kotti ablecken.",
    "hat mich zu nem Break-Dance-Battle eingeladen.",
    "hat nen Schwindelanfall in der Ringbahn bekommen.",
    "ist umgefallen und ich muss helfen.",
    "braucht Hilfe beim Club-Outfit-Aussuchen.",
    "muss Gassigehen.", "feiert runden Geburtstag.",
    "erlaubt es mir nicht."
];
function getComponent1() {
    return part1[Math.floor(Math.random() * part1.length)];
}
function getComponent2() {
    return part2[Math.floor(Math.random() * part2.length)];
}
function getComponent3() {
    return part3[Math.floor(Math.random() * part3.length)];
}
function showResult() {
    let result = getComponent1() + " " + getComponent2() + " " + getComponent3();
    let textarea = document.getElementById("ausrede");
    textarea.innerHTML = result;
}
function CopyToClipboard() {
    let copyText = document.getElementById("ausrede");
    navigator.clipboard.writeText(copyText === null || copyText === void 0 ? void 0 : copyText.innerHTML);
}
