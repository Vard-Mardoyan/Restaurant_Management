
import { useScrollTrigger } from "@material-ui/core"
import { useState } from "react"
import { SWEETS_DATA } from "../service/data"

export default function Controlmenu () {
    const [newname, setNewname] = useState('')
      
    const takeInputValue = (ev) => {
      setNewname(ev.target.value)
      console.log(newname)
      
    }

    const sweetnames = SWEETS_DATA.map(({name, id}) =>  <li key = {id.toString()}>{name},    <button>Change name</button>    <input onChange = {takeInputValue}/> </li>)
    return sweetnames
}