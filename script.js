

const block1 = document.querySelector('.block1');
const block2 = document.querySelector('.block2');
const block3 = document.querySelector('.block3');
const start = document.querySelector('.start');
const column = document.querySelector('.column');

const dracon = document.querySelector('.dracon');
const head1 = document.querySelector('.head1');
const head2 = document.querySelector('.head2');




function f1() {
   
   block1.insertAdjacentElement("afterbegin",dracon)
   block2.insertAdjacentElement("afterbegin",head1)
   block3.insertAdjacentElement("afterbegin",head2)
}



start.addEventListener("click",f2)

function f2() {
   column.classList.add("anim")
   setTimeout(f1,2000)
}