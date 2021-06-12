import React, { useState } from "react";
import { CreatingNewUser } from "./createNewUser";
import { Link } from "react-router-dom";
import "./Login.css";

export function Singin() {
  const [loginStatus, setLoginStatus] = useState(
    localStorage.getItem("loginStatus")
  );
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

  const loginFunction = () => {
    const usersArray = JSON.parse(localStorage.getItem("usersArray"));
    usersArray.forEach((element) => {
      if (
        user.name.trim().toLowerCase() !== element.name ||
        user.password !== element.password
      ) {
        setGeneralError("Incorrect username or password ");
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
    setLogin("");
    localStorage.removeItem("logindUser");
    localStorage.setItem("loginStatus", "tologin");
    setLoginStatus(localStorage.getItem("loginStatus"));

    return ''
  }

  const clozeLogin = () => {
    setLogin('')
    setLoginStatus('tologin')
  }

  const logout = () => {
    setLogin("");
    localStorage.removeItem("logindUser");
    localStorage.setItem("loginStatus", "tologin");
    setLoginStatus(localStorage.getItem("loginStatus"));
    setGeneralError('')
  }

  if (!login && loginStatus === "tologin") {
    return (
      <div>
        <Link to="/" onClick={() => setLogin("toLogin")} className="link">
          Login
        </Link>
      </div>
    );
  } else if (login === "toLogin") {
    return (
      <div className="logindiv">
        <div>
          <Link to="/" className = 'clozeLink' onClick = {clozeLogin}>X</Link>
        </div>
        <div>
          <h2 className="logintitel">Login</h2>
        </div>
        <div className="inutsdiv">
          <input
            placeholder = 'Username'
            className="input"
            onChange={onInputchange}
            name="name"
            value={user.name}
          ></input>

          <input
            placeholder = 'Password'
            className="input"
            onChange={onInputchange}
            name="password"
            value={user.password}
            type="password"
          />
        </div>
        <div className = 'errorMessage'>{generalError && <p className = 'errorText'>Incorrect username or password</p>}</div>
        <div className = 'loginlink'>
          <Link to="/" onClick={loginFunction} className="link">
            Login
          </Link>
        </div>

        <div className = 'createAccauntlink'>
          <Link to="/" className="link" onClick={() => setLogin("createAccaunt")}>
            Create new accaunt
          </Link>
        </div>
      </div>
    );
  } else if (login === "createAccaunt") {
    return <CreatingNewUser />;
  } else if (loginStatus === "logind") {
    return (
      <div>
        <h4 className = 'usersname'>{JSON.parse(localStorage.getItem("logindUser")).name}</h4>
        <Link to="/" className = 'link' onClick = {logout}>Logout</Link>
        <Link to="/" className = 'link'>Rezerve Table</Link>
        <Link to="/" className = 'link' onClick = {Pagecontrol}>Delete Accaunt</Link>
      </div>
    );
  }
}
