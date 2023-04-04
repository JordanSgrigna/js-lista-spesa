/* PRIMO ESERCIZIO

let listaDellaSpesa = ['Burro' , 'Pane', 'Latte', 'Uova', 'Gelato', 'Acqua'];

for(let i=0; i<listaDellaSpesa.length; i++){
    console.log((i+1) + ". " + listaDellaSpesa[i])
}



let contatore = 0;

while(contatore < listaDellaSpesa.length){
    console.log((contatore+1) + ". " + listaDellaSpesa[contatore]);
    contatore++;
}

*/
let userItem = document.getElementById('itemInput').value

function listGeneration(event){
    event.preventDefault()

    document.getElementById("container-for-list").innerHTML = `
    <div class="flex border-bottom border-dark mt-3 mb-3 h-30 px-4">

        <div class="me-2">
        <p>${userItem}</p>
        </div>
    
        <div>
        <button type="submit" class="border border-0 bg-white text-danger mb-3 fw-bold">X</button>
        </div>

    </div>
    `;
}
