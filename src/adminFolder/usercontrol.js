
import { useEffect, useState } from "react";



export default function Userscontrol () {
    const userlist = JSON.parse(localStorage.getItem('usersArray'))
    const [count, setCount] = useState(1)
    
    

    const a = userlist.map(({name, password}, index) => <li key={password.toString()}>{name}, <button onClick = {() => {
       let newuserlist = [];
       
       userlist.forEach((user) => {
           console.log(user.password)
          if(user.name !== name && user.password !== password){
             newuserlist.push(user)
          }
          setCount(count + 1)
      })
          
      localStorage.setItem('usersArray',JSON.stringify(newuserlist))


    }}>Delete</button></li>)
    
    if(!userlist.length){
        return <h3>No logind users</h3>
    }
    
        return a
    
}