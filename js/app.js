let counter = 0;

// div con classe "container"
const containerDiv = document.createElement("div");
containerDiv.className = "container";

// div con classe "counter"
const counterDiv = document.createElement("div");
counterDiv.className = "counter";

// Creo h1
const titleElement = document.createElement("h1");
titleElement.textContent = "Counter";

// Creo bottone incremento con id
const incrementButton = document.createElement("button");
incrementButton.id = "increment-btn";
incrementButton.textContent = "+";
// Incremento valore counter
incrementButton.addEventListener('click', () => {
    counter++;
    counterValueDiv.innerHTML = counter;
})

// Creo il div e id per valore predefinito 0
const counterValueDiv = document.createElement("button");
counterValueDiv.id = "counter-value";
counterValueDiv.textContent= "0";

// Creo bottone decremento e id
const decrementButton = document.createElement("button");
decrementButton.id = "decrement-btn";
decrementButton.textContent = "-";
// Decremento valore counter
decrementButton.addEventListener('click', () => {
    if(counter > 0){ // Evita che il counter vado sotto lo zero
    counter--;
    counterValueDiv.innerHTML = counter;
    }
})

// Creo bottone reset e id
const resetButton = document.createElement("button");
resetButton.id = "reset";
resetButton.textContent = "Reset";
// Reset counter
resetButton.addEventListener('click', reset)

function reset(){
    counter = 0 ;
    counterValueDiv.innerHTML = counter
}

// Aggiungo elementi al DOM
counterDiv.appendChild(titleElement);
counterDiv.appendChild(incrementButton);
counterDiv.appendChild(counterValueDiv);
counterDiv.appendChild(decrementButton);
counterDiv.appendChild(resetButton);

containerDiv.appendChild(counterDiv);

// Container nell'elemento body
document.body.appendChild(containerDiv);




