import { useState } from "react";

export const sweet_data_log = JSON.parse(localStorage.getItem("SWEETS_DATA_loc"));
export const foods_data_loc = JSON.parse(localStorage.getItem("FOODS_DATA_loc"));
export const drink_data_loc = JSON.parse(localStorage.getItem("DRINK_DATA_loc"));

export const menu_info_loc = {sweet_data_log, foods_data_loc, drink_data_loc}

export default function Sweetcontrol () {
  const [newname, setNewname] = useState('')
 
  const inputlissener = (event) => {
     setNewname(event.target.value)
     console.log(newname)
  } 
    
  
  
  const newsweet_data_loc = sweet_data_log.map(({name, id, price}) => <li key = {id}>
      <div>
          <div>{name} <input onChange = {inputlissener}/> <button onClick = {() => {
              const new_sweet_data_log = []
              sweet_data_log.map((el) => {
                  if(Number(id) === Number(el.id)){
                      el.name = newname;
                      new_sweet_data_log.push(el)
                  }else{
                      new_sweet_data_log.push(el)
                  }
                  
              })
              console.log(new_sweet_data_log)
              localStorage.setItem('SWEETS_DATA_loc', JSON.stringify(new_sweet_data_log))
          }} >Change name</button></div>
          <div>{price} <input onChange = {inputlissener}/> <button>Change price</button></div>
      </div>
  </li>)
  
  

  return newsweet_data_loc
}