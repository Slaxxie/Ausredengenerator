let part1: String[] = [
    "Ey, voll nett, dass du fragst, aber",
    "Ich wünschte, ich hätte Zeit, aber",
    "Danke für die Einladung, aber",
    "Also, leider ist es so,",
    "Ganz schlecht,",
    "voll nice von dir, aber",
    "Puuuh, wäre so geil, nur",
    "Schaaade,"
];
let part2: String[] = [
    "die Baustelle an der S-Bahn-Station",
    "meine Bartagame",
    "mein Horoskop",
    "meine Tante",
    "der E-Roller",
    "die Weltuhr",
    "mein Goldfisch",
    "meine Nachbarin"
];
let part3: String[] = [
    "hat ne Wette verloren und muss die eine Wand am Kotti ablecken.",
    "hat mich zu nem Break-Dance-Battle eingeladen.",
    "hat nen Schwindelanfall in der Ringbahn bekommen.",
    "ist umgefallen und ich muss helfen.",
    "braucht Hilfe beim Club-Outfit-Aussuchen.",
    "muss Gassigehen.", "feiert runden Geburtstag.",
    "erlaubt es mir nicht."
];

function getComponent1(): String {
    return part1[Math.floor(Math.random() * part1.length)];
}

function getComponent2(): String {
    return part2[Math.floor(Math.random() * part2.length)];
}
function getComponent3(): String {
    return part3[Math.floor(Math.random() * part3.length)];
}

function showResult(): void {
    let result: string = getComponent1() + " " + getComponent2() + " " + getComponent3()
    let textarea: HTMLElement | undefined = document.getElementById("ausrede") as HTMLElement;
    textarea.innerHTML = result;
}


function CopyToClipboard() {
    let copyText: HTMLElement = document.getElementById("ausrede") as HTMLElement;
    navigator.clipboard.writeText
        (copyText?.innerHTML);
}

