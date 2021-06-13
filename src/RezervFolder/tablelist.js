import React, { useContext, useEffect, useState } from "react";
import { tabledata } from "./data";
import { Rezervcontext } from "../App";
import "./Tables.css";
import { Link } from "react-router-dom";

export function Tablelist( {changeRezerveagestat} ) {
  const [tablestatus1, setTablestatus1] = useState(
    localStorage.getItem("rezervStatus1")
  );
  const [tablestatus2, setTablestatus2] = useState(
    localStorage.getItem("rezervStatus2")
  );
  const [tablestatus3, setTablestatus3] = useState(
    localStorage.getItem("rezervStatus3")
  );
  const [tablestatus4, setTablestatus4] = useState(
    localStorage.getItem("rezervStatus4")
  );
  const [tablestatus5, setTablestatus5] = useState(
    localStorage.getItem("rezervStatus5")
  );
  const [tablestatus6, setTablestatus6] = useState(
    localStorage.getItem("rezervStatus6")
  );

  const rezStast = useContext(Rezervcontext);
  const user = JSON.parse(localStorage.getItem("logindUser"));

  const free = <h3>Free</h3>;
  const rezerved = <h3>Rezerved</h3>;

  function Tab1(props) {
    const tablestate = JSON.parse(localStorage.getItem(props.data.name));
    if (tablestate === null || tablestate.user === user.name) {
      if (props.tablstatus === "notRezerved") {
        return (
          <div className="table">
            <h2>{props.data.name}</h2>
            <h4>Places {props.data.places}</h4>
            {free}
            <button
              onClick={() => {
                localStorage.setItem(
                  props.data.name,
                  JSON.stringify({ user: user.name, id: props.data.id })
                );
                localStorage.setItem(props.rezervstatus, "rezerved");
                props.changestatus(localStorage.getItem(props.rezervstatus));
              }}
            >
              Rezerve
            </button>
          </div>
        );
      } else if (props.tablstatus === "rezerved") {
        return (
          <div className="table">
            <h2>{props.data.name}</h2>
            <h4>Places {props.data.places}</h4>
            {rezerved}
            <button
              onClick={() => {
                localStorage.removeItem(props.data.name);
                localStorage.setItem(props.rezervstatus, "notRezerved");
                props.changestatus(localStorage.getItem(props.rezervstatus));
              }}
            >
              Onrezerv
            </button>
          </div>
        );
      }
    }else{
      return (
        <div className = 'table'>
          <h2>{props.data.name}</h2>
          <h4>Places {props.data.places}</h4>
          {rezerved}
        </div>
      )
    }
  }
  if (rezStast) {
    return (
      <div className="tablesConteiner">
        <div className = 'cloze'>
          <Link className = 'link' to = "/" onClick = {() => {
            if(rezStast){
              changeRezerveagestat()
            }
          }}>X</Link>
        </div>
        <div className="tablesDiv">
          <div className="table">
            <Tab1
              tablstatus={tablestatus1}
              rezervstatus="rezervStatus1"
              changestatus={setTablestatus1}
              data={tabledata[0]}
            />
          </div>
          <div className="table">
            <Tab1
              tablstatus={tablestatus2}
              rezervstatus="rezervStatus2"
              changestatus={setTablestatus2}
              data={tabledata[1]}
            />
          </div>
          <div className="table">
            <Tab1
              tablstatus={tablestatus3}
              rezervstatus="rezervStatus3"
              changestatus={setTablestatus3}
              data={tabledata[2]}
            />
          </div>
          <div className="table">
            <Tab1
              tablstatus={tablestatus4}
              rezervstatus="rezervStatus4"
              changestatus={setTablestatus4}
              data={tabledata[3]}
            />
          </div>
          <div className="table">
            <Tab1
              tablstatus={tablestatus5}
              rezervstatus="rezervStatus5"
              changestatus={setTablestatus5}
              data={tabledata[4]}
            />
          </div>
          <div className="table">
            <Tab1
              tablstatus={tablestatus6}
              rezervstatus="rezervStatus6"
              changestatus={setTablestatus6}
              data={tabledata[5]}
            />
          </div>
        </div>
      </div>
    );
  }
  return "";
}
