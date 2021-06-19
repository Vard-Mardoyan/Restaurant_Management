import React from 'react';
import { useEffect, useState } from "react"
import Userscontrol from "./usercontrol"
import Menucontrol from "./controlmenu"
import "./admin.css"
import Button from '@material-ui/core/Button';
import Tablecontrol from './tablecontrol';



export function Adminpage({ changeStat }){
    const [useerscontrol, setUserscontrol] = useState(false)
    const [tablecontrol, setTableControl] = useState(false)
    const [menucontrol, setMenucontrol] = useState(false)
    
    const buttonselement = <div className = 'pagediv'>
         <button className = 'button' onClick = {() => {setUserscontrol(true); setTableControl(false); setMenucontrol(false)}} variant="contained">Usercontrol</button>
         <button className = 'button' onClick = {() => {setTableControl(true); setUserscontrol(false); setMenucontrol(false)}} variant="contained">Tablecontrol</button>
         <button className = 'button' onClick = {()=> {setMenucontrol(true); setUserscontrol(false); setTableControl(false)}} variant="contained">Menucontrol</button>
         <button className = 'button' onClick = {changeStat} variant="contained">Logout</button>
    </div>
     
     
     if(!useerscontrol && !tablecontrol && !menucontrol){
         return (
             <div>
                 {buttonselement}
             </div>
         )
     }else if(useerscontrol && !tablecontrol && !menucontrol){
         return (
             <div>
                {buttonselement}
                <Userscontrol/>
             </div>
         )
     }else if(tablecontrol && !useerscontrol && !menucontrol){
         return (
             <div>
                 {buttonselement}
                 <Tablecontrol/>
             </div>
         )
     }else if(menucontrol && !useerscontrol && !tablecontrol){
         return (
             <div>
                 {buttonselement}
                 <Menucontrol/>
             </div>
         )
     }


    
}