import React, { useEffect, useState } from "react";



export function RezervationFunction () {
    // if(localStorage.getItem('id') === null){
    //     localStorage.setItem('id', 1)
    //    }


    
   const [tableStatus1, setTableStatus1] = useState(localStorage.getItem('id'))
   
   const table1 = <h1>Table1</h1>
   const free = <h3>Free</h3>
   const rezerved = <h3>Rezerved</h3>
   
   
    function RezervOnrezerv (props) {
        if(Number(tableStatus1)){
            return <div>
              {table1}
              {free}
              <button onClick = {() => setTableStatus1(localStorage.setItem('id',0))}>Rezerv</button>
            </div> 
        } 
        
          if(!Number(tableStatus1)){
            return <div>
                {table1}
                {rezerved}
                <button onClick = {() => setTableStatus1(localStorage.setItem('id', 1))}>Onrezerv</button>
            </div>
        }
    }
    
   return <div><RezervOnrezerv/></div>
   
}
       
