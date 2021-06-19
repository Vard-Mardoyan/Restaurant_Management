import { useEffect, useState } from "react";
import "./admin.css";

export default function Userscontrol() {
  const userlist = JSON.parse(localStorage.getItem("usersArray"));
  const [count, setCount] = useState(1);

  const users = userlist.map(({ name, password }, index) => (
    <li key={password.toString()}>
      {name},{" "}
      <button
        onClick={() => {
          let newuserlist = [];

          userlist.forEach((user) => {
            console.log(user.password);
            if (user.name !== name && user.password !== password) {
              newuserlist.push(user);
            }
            setCount(count + 1);
          });

          localStorage.setItem("usersArray", JSON.stringify(newuserlist));
        }}
      >
        Delete user
      </button>
    </li>
  ));

  if (!userlist.length) {
    return (
      <div className="a">
        <h3>No logind users</h3>
      </div>
    );
  }

  return (
    <div className="logindusersdiv">
      <h3>Logind users</h3>
      {users}
    </div>
  );
}
