// Funzione per la creazione elementi con id/classi
function createDOMElement(tagName, option) {     
    const element = document.createElement(tagName);

    if (option) {
      if (option.className){
        element.className = option.className;
      }
      if (option.id){
        element.id = option.id;
      }
      if (option.innerHTML) {
        element.innerHTML = option.innerHTML;
      }
    }
    return element;
  }

  // Funzione button con event delegation
  let counter = 0;  
  
  function setupButton(){   
    counterDiv.addEventListener('click', (event) => { 
      const target = event.target;    
  
            if (target.id === 'increment-btn') {
                counter++;
                counterValueDiv.innerHTML = counter;
            } else if (target.id === 'decrement-btn' && counter > 0){ // > 0 per non andare in negativo 
                counter--;
                counterValueDiv.innerHTML = counter;
            } else if (target.id === 'reset'){              
                 reset();
            }
        }
      )}
      
  function reset(){
    counter = 0;
    counterValueDiv.innerHTML = counter;
  } 

// div 
const containerDiv = createDOMElement('div', {
  className: 'container'
});
const counterDiv = createDOMElement('div', {
  className: 'counter'
});
const counterValueDiv = createDOMElement('div', {
  id: 'counter-value', 
  innerHTML: '0'
});

// h1
const titleElement = createDOMElement('h1',{
  id: '',
  innerHTML: 'Counter'
});

// Button incremento, decremento e reset
const incrementButton = createDOMElement('button',{
  id: 'increment-btn', 
  innerHTML: '+'
});
const decrementButton = createDOMElement('button', {
  id: 'decrement-btn', 
  innerHTML: '-'
});
const resetButton = createDOMElement('button',{
  id: 'reset', 
  innerHTML: 'Reset'
});

// Aggiungo elementi al DOM
counterDiv.appendChild(titleElement);
counterDiv.appendChild(incrementButton);
counterDiv.appendChild(counterValueDiv);
counterDiv.appendChild(decrementButton);
counterDiv.appendChild(resetButton);

containerDiv.appendChild(counterDiv);

// Container nell'elemento body
document.body.appendChild(containerDiv);

setupButton();


