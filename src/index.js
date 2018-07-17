 import './style.css';
 import { cube } from './math.js';

 function component() {
     const pre = document.createElement('pre');

     pre.innerHTML = '5 cubed is equal to ' + cube(5);

     return pre;
 }

 document.body.appendChild(component());
