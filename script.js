import { block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15 } from "./vars.js";

// import { random1 ,random2, random3, random4 ,random5, random6, random7 ,random8, random9, random10 ,random11, random12, random13 ,random14, random15 } from "./random.js";

// console.log(random1 ,random2, random3, random4 ,random5, random6, random7 ,random8, random9, random10 ,random11, random12, random13 ,random14, random15 );

import f10 from "./kombination.js"

let random1; let random2; let random3; let random4; let random5; let random6; let random7; let random8;let random9; let random10; let random11; let random12; let random13; let random14; let random15;

const imgArr = ["dracon.png", "head1.png", "head2.png", "orel.png", "lion.png", "lyagushka.png", "kukuruza.png", "yajer.png", "ptichka.png", "tomato.png", "bonus.png", "piramida.png"]

const imgArr2 = ["dracon.png", "head1.png", "head2.png", "orel.png", "lion.png", "lyagushka.png", "kukuruza.png", "yajer.png", "ptichka.png", "tomato.png", "piramida.png"]


const btnStart = document.querySelector('.start');
const column = document.querySelector('.column');
const column2 = document.querySelector('.column2');
const column3 = document.querySelector('.column3');
const column4 = document.querySelector('.column4');
const column5 = document.querySelector('.column5');

const finish_img = document.querySelector('.finish-img');

const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const line4 = document.querySelector('.line4');
const line5 = document.querySelector('.line5');

btnStart.addEventListener("click",animStart)

function animStart() {

   rotation();
  

btnStart.setAttribute("disabled","true");
setTimeout(()=>{
   btnStart.removeAttribute("disabled")
},4000)

line1.classList.add("opacity");
line2.classList.add("opacity");
line3.classList.add("opacity");
line4.classList.add("opacity");
line5.classList.add("opacity");

function random () {
      random1 = Math.round(Math.random() * 9);
      random2 = Math.round(Math.random() * 9);
      random3 = Math.round(Math.random() * 9);
      random4 = Math.round(Math.random() * 10);
      random5 = Math.round(Math.random() * 10);
      random6 = Math.round(Math.random() * 10);
      random7 = Math.round(Math.random() * 11);
      random8 = Math.round(Math.random() * 11);
      random9 = Math.round(Math.random() * 11);
      random10 = Math.round(Math.random() * 11);
      random11 = Math.round(Math.random() * 11);
      random12 = Math.round(Math.random() * 11);
      random13 = Math.round(Math.random() * 10);
      random14 = Math.round(Math.random() * 10);
      random15 = Math.round(Math.random() * 10);
}
random (); 
   
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

function f1() {
   block1.innerHTML = ("");
   block2.innerHTML = ("");
   block3.innerHTML = ("");

   line1.classList.remove("opacity");
   block1.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random1]} class="red" alt="">`);
   block2.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random2]} class="red">`);
   block3.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random3]} class="red">`);
 
   console.log(block1);
}

function f2 (){
   block4.innerHTML = ("");
   block5.innerHTML = ("");
   block6.innerHTML = ("");

   line2.classList.remove("opacity");
   block4.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random4]} class="red" alt="">`);
   block5.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random5]} class="red">`);
   block6.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random6]} class="red">`);
}

function f3 (){
   block7.innerHTML = ("");
   block8.innerHTML = ("");
   block9.innerHTML = ("");

   line3.classList.remove("opacity");
   block7.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random7]} class="red" alt="">`);
   block8.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random8]} class="red">`);
   block9.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random9]} class="red">`);
}

function f4 (){
   block10.innerHTML = ("");
   block11.innerHTML = ("");
   block12.innerHTML = ("");

   line4.classList.remove("opacity");
   block10.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random10]} class="red" alt="">`);
   block11.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random11]} class="red">`);
   block12.insertAdjacentHTML("afterbegin",`<img src=${imgArr[random12]} class="red">`);
}

function f5 (){
   block13.innerHTML = ("");
   block14.innerHTML = ("");
   block15.innerHTML = ("");

   line5.classList.remove("opacity");
   block13.insertAdjacentHTML("afterbegin",`<img src=${imgArr2[random13]} class="red" alt="">`);
   block14.insertAdjacentHTML("afterbegin",`<img src=${imgArr2[random14]} class="red">`);
   block15.insertAdjacentHTML("afterbegin",`<img src=${imgArr2[random15]} class="red">`);
}

setTimeout(function removeAnim() {
   column.classList.remove("anim")
   column2.classList.remove("anim")
   column3.classList.remove("anim")
   column4.classList.remove("anim")
   column5.classList.remove("anim")
} ,4000 )

f10();

}



// function dracon () {
//    random2 = 0;
//    random5 = 0;
//    random8 = 0;
//    random11 = 0;
//    random14 = 0;
//    }
//    dracon();  



   let bet = 1
   const bet_display = document.querySelector('.bet-display');
   const bet__btn = document.querySelector('.bet__btn');
   bet__btn.addEventListener("click",()=>{
      if (bet == 20) {
         bet = 0
      }
      else {
         bet = bet + 1;
      bet_display.innerHTML=bet;
      totalBetPrint ();
      }
     
   })


   let lines = 1
   const lines_display = document.querySelector('.lines-display');
   
  const lines__btn = document.querySelector('.lines__btn');
  
   lines__btn.addEventListener("click",()=>{
      if (lines == 21) {
         lines = 0
      }
      else {
         lines = lines + 1;
      lines_display.innerHTML=lines;
      totalBetPrint ();
      }
     
   })
   

      
      const credit_display  = document.querySelector('.credit-display');
      let credit = 1000;
      function rotation () {
         
          credit = credit - bet * lines;
         credit_display.innerHTML = credit;
      }
   
      const totalBetDisplay = document.querySelector('.total__bet-display');
       function totalBetPrint () {
         let totalBet = lines * bet
         totalBetDisplay.innerHTML = totalBet;
       }