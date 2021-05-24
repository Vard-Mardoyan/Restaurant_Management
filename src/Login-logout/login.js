import React, { useState } from "react";
import { CreatingNewUser } from "./createNewUser";

export function Singin() {

  
  if(localStorage.getItem('usersArray') === null){
    localStorage.setItem('usersArray', JSON.stringify([]) )
  }

  
  
  
  const [login, setLogin] = useState("");
  const [generalError, setGeneralError] = useState("");
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  
  
  

  const onInputchange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const loginnFunction = () => {
    const usersArray = JSON.parse(localStorage.getItem("usersArray"));
    usersArray.forEach((element) => {
      
      if (
        user.name.trim().toLowerCase() !== element.name ||
        user.password !== element.password
      ) {
        setGeneralError("Incorrect password or login");
      }
      if (
        user.name.trim().toLowerCase() === element.name &&
        user.password.trim().toLowerCase() === element.password
      ) {
        {
          setLogin("logind");
          setUser({
            name: "",
            password: "",
          });
        }
      }
    });
  };

  if (!login) {
    return (
      <div>
        <button onClick={() => setLogin("toLogin")}>Log in</button>

      </div>
    );
  } else if (login === "toLogin") {
    return (
      <div>
        <label>
          Username :
          <input onChange={onInputchange} name="name" value={user.name}></input>
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            onChange={onInputchange}
            name="password"
            value={user.password}
            type="password"
          ></input>
        </label>
        <br />
        {generalError && <p>{generalError}</p>}
        <br />
        <button onClick={loginnFunction}>Log in</button>

        <button onClick={() => setLogin("createAccaunt")}>
          Create new accaunt
        </button>
      </div>
    );
  } else if (login === "createAccaunt") {
    return <CreatingNewUser />;
  } else if (login === "logind") {
    return (
      <div>
        <h1>Welcome</h1>
        <button onClick={() => setLogin("")}>Logout</button>
      </div>
    );
  }
}
