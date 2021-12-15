let container = document.querySelector('.container');
let kate = document.querySelectorAll('.kate');

let count = 0;
let x = 'x';
let o = 'o';

let xo = [x, o, x, o, x, o, x, o, x];

let arr = [];

let reset = false;


kate.forEach(item => {
   item.addEventListener('click', function clicked(e) {
      if (e.target.textContent == '') {
         e.target.append(document.createTextNode(xo[count]))
         count++;

         arr.push(e.target);
         for (let i of arr) {
            let el1 = i.id.slice(1);
            let el2 = i.id.slice(0, 1);

            if ((el1 == arr[0].id.slice(1) && el1 == arr[2].id.slice(1) && el1 == arr[4].id.slice(1)) || (el1 == arr[0].id.slice(1) && el1 == arr[4].id.slice(1) && el1 == arr[6].id.slice(1)) || (el1 == arr[0].id.slice(1) && el1 == arr[4].id.slice(1) && el1 == arr[8].id.slice(1)) || (el1 == arr[0].id.slice(1) && el1 == arr[2].id.slice(1) && el1 == arr[8].id.slice(1)) || (el1 == arr[0].id.slice(1) && el1 == arr[6].id.slice(1) && el1 == arr[8].id.slice(1)) || (el1 == arr[2].id.slice(1) && el1 == arr[4].id.slice(1) && el1 == arr[6].id.slice(1)) || (el1 == arr[2].id.slice(1) && el1 == arr[4].id.slice(1) && el1 == arr[8].id.slice(1)) && e.target.textContent == x) {
               let span = document.createElement('span');
               span.append(document.createTextNode('X is WINNER !!!'))
               container.appendChild(span);
               reset = true;

               if (reset == true) {
                  let t = document.createElement('span');
                  t.classList.add('txt');
                  t.append(document.createTextNode('restart game'));
                  container.appendChild(t);
                  t.addEventListener('click', () => {
                     container.innerHTML = `<div id="11" class="kate"></div>
                     <div id="12" class="kate"></div>
                     <div id="13" class="kate"></div>
                     <div id="21" class="kate"></div>
                     <div id="22" class="kate"></div>
                     <div id="23" class="kate"></div>
                     <div id="31" class="kate"></div>
                     <div id="32" class="kate"></div>
                     <div id="33" class="kate"></div>`;
                     reset = false;
                     count = 0;
                     clicked();
                  });
               }
            }


            if ((el2 == arr[0].id.slice(0, 1) && el2 == arr[2].id.slice(0, 1) && el2 == arr[4].id.slice(0, 1)) || (el2 == arr[0].id.slice(0, 1) && el2 == arr[4].id.slice(0, 1) && el2 == arr[6].id.slice(0, 1)) || (el2 == arr[0].id.slice(0, 1) && el2 == arr[4].id.slice(0, 1) && el2 == arr[8].id.slice(0, 1)) || (el2 == arr[0].id.slice(0, 1) && el2 == arr[2].id.slice(0, 1) && el2 == arr[8].id.slice(0, 1)) || (el2 == arr[0].id.slice(0, 1) && el2 == arr[6].id.slice(0, 1) && el2 == arr[8].id.slice(0, 1)) || (el2 == arr[2].id.slice(0, 1) && el2 == arr[4].id.slice(0, 1) && el2 == arr[6].id.slice(0, 1)) || (el2 == arr[2].id.slice(0, 1) && el2 == arr[4].id.slice(0, 1) && el2 == arr[8].id.slice(0, 1)) && e.target.textContent == x) {
               let span = document.createElement('span');
               span.append(document.createTextNode('X is WINNER !!!'))
               container.appendChild(span);
               reset = true;

               if (reset == true) {
                  let t = document.createElement('span');
                  t.classList.add('txt');
                  t.append(document.createTextNode('restart game'));
                  container.appendChild(t);
                  t.addEventListener('click', () => {
                     container.innerHTML = `<div id="11" class="kate"></div>
                     <div id="12" class="kate"></div>
                     <div id="13" class="kate"></div>
                     <div id="21" class="kate"></div>
                     <div id="22" class="kate"></div>
                     <div id="23" class="kate"></div>
                     <div id="31" class="kate"></div>
                     <div id="32" class="kate"></div>
                     <div id="33" class="kate"></div>`;
                     reset = false;
                     count = 0;
                     clicked();
                  })
               }
            }
         }
      }
   })
})