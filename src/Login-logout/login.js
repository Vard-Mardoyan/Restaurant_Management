import React, { useState } from "react";
import { CreatingNewUser } from "./createNewUser";
import { Tablelist } from "../RezervFolder/tablelist";

export function Singin() {
  const [loginStatus, setLoginStatus] = useState(
    localStorage.getItem("loginStatus")
  );
  const [login, setLogin] = useState("");
  const [generalError, setGeneralError] = useState("");
  const [pageControl, setPageacaontrol] = useState(false);
  const [rezervepage, setRezervepage] = useState(false);
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
          localStorage.setItem("logindUser", JSON.stringify(element));
          localStorage.setItem("loginStatus", "logind");
          setLoginStatus(localStorage.getItem("loginStatus"));
          setLogin("logind");
          setUser({
            name: "",
            password: "",
          });
        }
      }
    });
  };

  function Pagecontrol() {
    const newUserlist = [];
    const usersList = JSON.parse(localStorage.getItem("usersArray"));
    const logindUser = JSON.parse(localStorage.getItem("logindUser"));

    usersList.forEach((element) => {
      if (
        element.name !== logindUser.name &&
        element.password !== logindUser.password
      ) {
        newUserlist.push(element);
      }
    });

    localStorage.setItem("usersArray", JSON.stringify(newUserlist));

    return (
      <div>
        <button
          onClick={() => {
            setLogin("");
            localStorage.removeItem("logindUser");
            localStorage.setItem("loginStatus", "tologin");
            setLoginStatus(localStorage.getItem("loginStatus"));
          }}
        >
          Delete page
        </button>
      </div>
    );
  }

  if (!login && loginStatus === "tologin") {
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
  } else if (loginStatus === "logind") {
    return (
      <div>
        <h4>{JSON.parse(localStorage.getItem("logindUser")).name}</h4>
        <button
          onClick={() => {
            setLogin("");
            localStorage.removeItem("logindUser");
            localStorage.setItem("loginStatus", "tologin");
            setLoginStatus(localStorage.getItem("loginStatus"));
          }}
        >
          Logout
        </button>
        <button onClick={() => setRezervepage(true)}>Rezerv Table</button>
        <button onClick={() => setPageacaontrol(true)}>Page cotrol</button>
        {rezervepage && <Tablelist />}
        {pageControl && <Pagecontrol />}
      </div>
    );
  }
}
