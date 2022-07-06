import { dracon, head1, head2, orel, bonus, kukuruza, lion, lyagushka, piramida, ptichka, tomato, yajer} from "./vars.js";

import { random1 ,random2, random3, random4 ,random5, random6, random7 ,random8, random9, random10 ,random11, random12, random13 ,random14, random15 } from "./random.js";

console.log(random1 ,random2, random3, random4 ,random5, random6, random7 ,random8, random9, random10 ,random11, random12, random13 ,random14, random15 );

const imgArr = ["dracon.png", "head1.png", "head2.png", "orel.png", "lion.png", "lyagushka.png", "kukuruza.png", "yajer.png", "ptichka.png", "tomato.png", "bonus.png", "piramida.png"]

const imgArr2 = ["dracon.png", "head1.png", "head2.png", "orel.png", "lion.png", "lyagushka.png", "kukuruza.png", "yajer.png", "ptichka.png", "tomato.png", "piramida.png"]


const block1 = document.querySelector('.block1');
const block2 = document.querySelector('.block2');
const block3 = document.querySelector('.block3');
const block4 = document.querySelector('.block4');
const block5 = document.querySelector('.block5');
const block6 = document.querySelector('.block6');
const block7 = document.querySelector('.block7');
const block8 = document.querySelector('.block8');
const block9 = document.querySelector('.block9');
const block10 = document.querySelector('.block10');
const block11 = document.querySelector('.block11');
const block12 = document.querySelector('.block12');
const block13 = document.querySelector('.block13');
const block14 = document.querySelector('.block14');
const block15 = document.querySelector('.block15');


const start = document.querySelector('.start');
const column = document.querySelector('.column');
const column2 = document.querySelector('.column2');
const column3 = document.querySelector('.column3');
const column4 = document.querySelector('.column4');
const column5 = document.querySelector('.column5');

function f1() {
   block1.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random1]} class="red" alt="">`);
   block2.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random2]} class="red">`);
   block3.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random3]} class="red">`);
 
}

function f2 (){
   block4.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random4]} class="red" alt="">`);
   block5.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random5]} class="red">`);
   block6.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random6]} class="red">`);
}

function f3 (){
   block7.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random7]} class="red" alt="">`);
   block8.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random8]} class="red">`);
   block9.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random9]} class="red">`);
}

function f4 (){
   block10.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random10]} class="red" alt="">`);
   block11.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random11]} class="red">`);
   block12.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random12]} class="red">`);
}

function f5 (){
   block13.insertAdjacentHTML("afterbegin",`<img src=${imgArr2[random13]} class="red" alt="">`);
   block14.insertAdjacentHTML("afterbegin",`<img src=${imgArr2[random14]} class="red">`);
   block15.insertAdjacentHTML("afterbegin",`<img src=${imgArr2[random15]} class="red">`);
}

start.addEventListener("click",animStart)

function animStart() {
   column.classList.add("anim")
   column2.classList.add("anim")
   column3.classList.add("anim")
   column4.classList.add("anim")
   column5.classList.add("anim")
   setTimeout(f1,2000)
   setTimeout(f2,2500)
   setTimeout(f3,3000)
   setTimeout(f4,3500)
   setTimeout(f5,4000)
   
}

