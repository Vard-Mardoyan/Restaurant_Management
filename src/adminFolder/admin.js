import { useEffect, useState } from "react"
import Userscontrol from "./usercontrol"
import Menucontrol from "./controlmenu"


export function Adminpage({ changeStat }){
    const [useerscontrol, setUserscontrol] = useState(false)
    const [tablecontrol, setTableControl] = useState(false)
    const [menucontrol, setMenucontrol] = useState(false)
    
    const buttonselement = <div>
        <button onClick = {changeStat}>Logout</button>
        <button onClick = {() => {setUserscontrol(true); setTableControl(false); setMenucontrol(false)}}>Usercontrol</button>
        <button onClick = {() => {setTableControl(true); setUserscontrol(false); setMenucontrol(false)}}>Tablecontrol</button>
        <button onClick = {()=> {setMenucontrol(true); setUserscontrol(false); setTableControl(false)}}>Menucontrol</button>
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