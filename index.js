let counter = 0;

const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
const plus = document.getElementById("plus");
const $counter = document.getElementById("counter");

function render() {
    $counter.textContent = counter;
}

render();

reset.addEventListener('click', () => {
   counter = 0;
   render();
}) 

minus.addEventListener('click', () => {
    counter--;
    render();
 }) 

 plus.addEventListener('click', () => {
    counter++;
    render();
 }) 


 
