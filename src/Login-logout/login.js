import React, { useState } from "react";
import { CreatingNewUser } from "./createNewUser";
import { Tablelist } from "../RezervFolder/tablelist";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./style.css";
import CloseIcon from "@material-ui/icons/Close";

export function Singin( {changeRezerveagestat} ) {
  const [loginStatus, setLoginStatus] = useState(
    localStorage.getItem("loginStatus")
  );
  const [login, setLogin] = useState("");
  const [generalError, setGeneralError] = useState("");
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

  function pagecontrol() {
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
    return "";
  }


  if (!login && loginStatus === "tologin") {
    return (
      <div>
        <Link onClick={() => setLogin("toLogin")} to="/" className="link">
          Login
        </Link>
      </div>
    );
  } else if (login === "toLogin") {
    return (
      <div className="logindiv">
        <div className="closelink">
          <Link
            onClick={() => {
              setLogin("");
              localStorage.removeItem("logindUser");
              localStorage.setItem("loginStatus", "tologin");
              setLoginStatus(localStorage.getItem("loginStatus"));
            }}
            to="/"
            className="link"
          >
            X
          </Link>
        </div>
        <div className="loginorcreate">
          <h2 className="logintitel">Login</h2>
          <div className="inpustform">
            <input
              placeholder="Username"
              className="input"
              onChange={onInputchange}
              name="name"
              value={user.name}
            ></input>
            <input
              placeholder="Password"
              className="input"
              onChange={onInputchange}
              name="password"
              value={user.password}
              type="password"
            ></input>
            <div>
              <div className="loginlinkstyle">
                <Link onClick={loginnFunction} to="/" className="link">
                  Login
                </Link>
              </div>

              {generalError && (
                <p className="errortext">Incorrect username or password</p>
              )}

              <div className="newaccbtn">
                <Link
                  onClick={() => setLogin("createAccaunt")}
                  to="/"
                  className="link"
                >
                  Create accaunt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (login === "createAccaunt") {
    return <CreatingNewUser />;
  } else if (loginStatus === "logind") {
    return (
      <div>
        <div className="usersname">
          <h4>{JSON.parse(localStorage.getItem("logindUser")).name}</h4>
        </div>
        <div>
          <Link
            onClick={() => {
              setLogin("");
              localStorage.removeItem("logindUser");
              localStorage.setItem("loginStatus", "tologin");
              setLoginStatus(localStorage.getItem("loginStatus"));
            }}
            to="/"
            className="link"
          >
            Logout
          </Link>
          <Link onClick={changeRezerveagestat} to="/" className="link">
                  Rezetve table
          </Link>
          <Link onClick={pagecontrol} to="/" className="link">
                  Delete accaunt
          </Link>

        </div>
        {rezervepage && <Tablelist />}
      </div>
    );
  }
}
