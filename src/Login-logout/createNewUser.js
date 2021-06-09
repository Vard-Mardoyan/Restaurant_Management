import React, { useEffect, useState } from "react";
import { Singin } from "./login";
import { Link } from "react-router-dom";

export function CreatingNewUser() {
  const [isAdding, setIsAdding] = useState(false);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const userNameControl = () => {
    const name = user.name;
    const correctName = name.toLowerCase().trim();
    if (correctName.length > 4) {
      return true;
    } else {
      return false;
    }
  };

  const userPasswordControl = () => {
    const password = user.password;
    const correctPassword = password.toLowerCase().trim();
    if (correctPassword.length > 4) {
      return true;
    } else {
      return false;
    }
  };

  const takeUserInfo = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value.toLowerCase().trim(),
    });
  };

  const addNewUser = () => {
    setIsAdding(true);
    const usersList = JSON.parse(localStorage.getItem("usersArray"));
    if (!userNameControl()) {
      alert("This username is incorrect");
      setIsAdding(false);
      return "";
    } else if (!userPasswordControl()) {
      alert("This pssword is incorect");
      setIsAdding(false);
      return "";
    } else {
      usersList.forEach((elem) => {
        if (elem.name === user.name) {
          alert("This username is ....");
          setIsAdding(false);
          return "";
        } else if (elem.password === user.password) {
          alert("This password is ...");
          setIsAdding(false);
          return "";
        }
      });

      let newUserList = [...usersList, user];
      localStorage.setItem("usersArray", JSON.stringify(newUserList));
    }
  };

  if (!isAdding) {
    return (
      <div className="logindiv">
        <div className="loginorcreate">
          <h2 className="logintitel">Creat personal accaunt</h2>
          <div className="inpustform">
            <input
              className="input"
              onChange={takeUserInfo}
              name="name"
              value={user.value}
            ></input>
            <input
              className="input"
              onChange={takeUserInfo}
              name="password"
              value={user.password}
              type="password"
            ></input>
            <div className="loginlinkstyle">
              <Link onClick={addNewUser} to="/" className="link">
                Create accaunt
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Singin />;
  }
}
