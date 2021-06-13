import React, { useEffect, useState } from "react";
import { Singin } from "./login";
import { Link } from "react-router-dom";


export function CreatingNewUser() {
  const usersList = JSON.parse(localStorage.getItem("usersArray"));
  const [usersStatus, setUserstatus] = useState("correct");
  const [isAdding, setIsAdding] = useState(false);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const correctUsername = user.name.toLocaleLowerCase().trim();
  const correctPassword = user.password.toLocaleLowerCase().trim();

  const takeUserInfo = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value.toLowerCase().trim(),
    });
  };

  const nameControl = () => {
    if (correctUsername.length < 4) {
      return false;
    }
    return true;
  };

  const namerepControl = () => {
    let usernameCount = 0;

    for (let key of usersList) {
      if (key.name === correctUsername) {
        usernameCount = usernameCount + 1;
      }
    }

    if (usernameCount) {
      return false;
    }
    return true;
  };
  
  const passwordControl = () => {
    if (correctPassword.length < 5) {
      return false;
    }
    return true;
  };

  const addNewuser = () => {
    if (!nameControl()) {
      setUserstatus("incorrect");
      return "";
    }
    if (!passwordControl()) {
      setUserstatus("incorrectpassword");
      return "";
    }
    if (!namerepControl()) {
      setUserstatus("busy");
      return "";
    }

    let newUserList = [...usersList, user];
    localStorage.setItem("usersArray", JSON.stringify(newUserList));
    setIsAdding(true);
  };


  if (!isAdding) {
    return (
      <div className="logindiv">
        <div className="loginorcreate">
          <h2 className="logintitel">Creat personal accaunt</h2>
          <div className="inpustform">
            <input
              placeholder="Username"
              className="input"
              onChange={takeUserInfo}
              name="name"
              value={user.value}
            />

            <div className="incUsname">
              {usersStatus === "incorrect" && (
                <p className="errorText">Incorrect Username</p>
              )}
            </div>
            <div>
              {usersStatus === "busy" && (
                <p className="errorText">This username is busy</p>
              )}
            </div>
            <input
              placeholder="Password"
              className="input"
              onChange={takeUserInfo}
              name="password"
              value={user.password}
              type="password"
            />
            <div className="incUsname">
              {usersStatus === "incorrectpassword" && (
                <p className="errorText">Incorrect Password</p>
              )}
            </div>
            <div className="loginlinkstyle">
              <Link to="/" onClick={addNewuser} className="link">
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
