import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css'
import Bases from './crono'

const Counter=false;

let Num1=0;
let Num2=0;
let Num3=0;
let Num4=0;
let Num5=0;
let Num6=0;

setInterval(()=>{
    
    if(Counter===false){
        Num6 += 1;
    }
    if(Counter===false && Num6===10){
        Num5 += 1;
        Num6=0
    }
    if(Counter===false && Num5===6){
        Num4 += 1;
        Num5=0
    }
    if(Counter===false && Num4===10){
        Num3 += 1;
        Num4=0
    }
    if(Counter===false && Num3===6){
        Num2 += 1;
        Num3=0
    }
    if(Counter===false && Num2===10){
        Num1 += 1;
        Num2=0
    }
    if(Counter===false && Num1===10){
        Num6 += 1;
        Num1=0
    }

    ReactDOM.render(
        <>
            <ul className="list-group list-group-horizontal-md clocket">

                <li className="list-group-item clockit"><i class="fas fa-stopwatch"></i></li>
                <Bases nu6={Num6}  nu5={Num5} nu4={Num4} nu3={Num3} nu2={Num2}nu1={Num1}/>
            </ul>
        </>,
  document.getElementById('root')
);
},1000);
