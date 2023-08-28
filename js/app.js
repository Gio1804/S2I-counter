let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.querySelector('#reset')

//Per incrementare il valore del counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});

//Per diminuire il valore del counter
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
})

//Per azzerare il counter
resetBtn.addEventListener('click', reset)

function reset(){
    counter = 0;
    counterValue.innerHTML = counter;
}