import React, { useEffect, useState } from "react";



export function RezervationFunction () {
    
  const [tableStatus1, setTableStatus1] = useState(localStorage.getItem('rezervStatus'))
  
  const table1 = <h1>Table1</h1>
  const free = <h3>Free</h3>
  const rezerved = <h3>Rezerved</h3>
  
  
   function RezervOnrezerv (props) {
       if(tableStatus1 === 'notRezerved'){
           return <div>
             {table1}
             {free}
             <button onClick = {() => {localStorage.setItem('rezervStatus', 'rezerved'); setTableStatus1(localStorage.getItem('rezervStatus'))}}>Rezerv</button>
           </div> 
       } 
       
         if(tableStatus1 === 'rezerved'){
           return <div>
               {table1}
               {rezerved}
               <button onClick = {() => {localStorage.setItem('rezervStatus', 'notRezerved'); setTableStatus1(localStorage.getItem('rezervStatus'))}}>Onrezerv</button>
           </div>
       }
   }
     return <RezervOnrezerv/>
  
}
      

