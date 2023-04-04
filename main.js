const davor = document.getElementById('davor');
const danach = document.getElementById('danach');

let outputVorne = document.getElementById('outputVordererTeil');
let outputHinten = document.getElementById('outputHintererTeil');


const trennen = () =>{
    let ganzerSatz = document.getElementById('inputSentence').value;
    let trennungsWort = document.getElementById('inputTrennungsWort').value;

    if (davor.checked) {
        outputHinten.innerHTML = ganzerSatz.slice(ganzerSatz.indexOf(trennungsWort))
        outputVorne.innerHTML = ganzerSatz.slice(0, (ganzerSatz.indexOf(trennungsWort)))

    } else if (danach.checked){
        outputHinten.innerHTML = ganzerSatz.split(trennungsWort)[1];
        outputVorne.innerHTML = (ganzerSatz.slice(0, (ganzerSatz.indexOf(trennungsWort)))) + trennungsWort
    }
    else {
        console.log("Ein Radio-Button muss ausgewählt sein");
    }
}