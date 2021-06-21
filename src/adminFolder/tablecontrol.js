import { useState } from "react";
import "./admin.css"

export default function Tablecontrol() {
  const [aa, setAa] = useState(true);

  return (
    <div className = 'tablecontrolpage'>
      <div>
        <div>
          <h3>Table1</h3>
        </div>
        <div>
          <h4>Status: {localStorage.getItem("rezervStatus1")}</h4>
        </div>
        <div>
          <button
            className = 'tablebutton'
            onClick={() => {
              localStorage.setItem("rezervStatus1", "rezerved");
              setAa((prev) => !prev);
              localStorage.setItem("admintab1", "1");
            }}
          >
            Rezerve
          </button>
          <button
            className = 'tablebutton'
            onClick={() => {
              if (localStorage.getItem("Table1") !== null) {
                localStorage.removeItem("Table1");
              }
              localStorage.setItem("rezervStatus1", "notRezerved");
              setAa((prev) => !prev);
              localStorage.removeItem("admintab1");
            }}
          >
            Onrezerv
          </button>
        </div>
      </div>
      <div>
        <div>
          <h3>Table2</h3>
        </div>
        <div>
          <h4>Status: {localStorage.getItem("rezervStatus2")}</h4>
        </div>
        <button
          className = 'tablebutton'
          onClick={() => {
            localStorage.setItem("rezervStatus2", "rezerved");
            setAa((prev) => !prev);
            localStorage.setItem("admintab2", "1");
          }}
        >
          Rezerve
        </button>
        <button
          className = 'tablebutton'
          onClick={() => {
            if (localStorage.getItem("Table2") !== null) {
              localStorage.removeItem("Table2");
            }
            localStorage.setItem("rezervStatus2", "notRezerved");
            setAa((prev) => !prev);
            localStorage.removeItem("admintab2");
          }}
        >
          Onrezerv
        </button>
      </div>
      <div>
        <div>
          <h3>Table3</h3>
        </div>
        <div>
          <h4>Status: {localStorage.getItem("rezervStatus3")}</h4>
        </div>
        <button
          className = 'tablebutton'
          onClick={() => {
            localStorage.setItem("rezervStatus3", "rezerved");
            setAa((prev) => !prev);
            localStorage.setItem("admintab3", "1");
          }}
        >
          Rezerve
        </button>
        <button
          className = 'tablebutton'
          onClick={() => {
            if (localStorage.getItem("Table3") !== null) {
              localStorage.removeItem("Table3");
            }
            localStorage.setItem("rezervStatus3", "notRezerved");
            setAa((prev) => !prev);
            localStorage.removeItem("admintab3");
          }}
        >
          Onrezerv
        </button>
      </div>
      <div>
        <div>
          <h3>Table4</h3>
        </div>
        <div>
          <h4>Status: {localStorage.getItem("rezervStatus4")}</h4>
        </div>
        <button
          className = 'tablebutton'
          onClick={() => {
            localStorage.setItem("rezervStatus4", "rezerved");
            setAa((prev) => !prev);
            localStorage.setItem("admintab4", "1");
          }}
        >
          Rezerve
        </button>
        <button
          className = 'tablebutton'
          onClick={() => {
            if (localStorage.getItem("Table3") !== null) {
              localStorage.removeItem("Table3");
            }
            localStorage.setItem("rezervStatus4", "notRezerved");
            setAa((prev) => !prev);
            localStorage.removeItem("admintab4");
          }}
        >
          Onrezerv
        </button>
      </div>
      <div>
        <div>
          <h3>Table5</h3>
        </div>
        <div>
          <h4>Status: {localStorage.getItem("rezervStatus5")}</h4>
        </div>
        <button
          className = 'tablebutton'
          onClick={() => {
            localStorage.setItem("rezervStatus5", "rezerved");
            setAa((prev) => !prev);
            localStorage.setItem("admintab5", "1");
          }}
        >
          Rezerve
        </button>
        <button
          className = 'tablebutton'
          onClick={() => {
            if (localStorage.getItem("Table5") !== null) {
              localStorage.removeItem("Table5");
            }
            localStorage.setItem("rezervStatus5", "notRezerved");
            setAa((prev) => !prev);
            localStorage.removeItem("admintab5");
          }}
        >
          Onrezerv
        </button>
      </div>
      <div>
        <div>
          <h3>Table6</h3>
        </div>
        <div>
          <h4>Status: {localStorage.getItem("rezervStatus6")}</h4>
        </div>
        <button
          className = 'tablebutton'
          onClick={() => {
            localStorage.setItem("rezervStatus6", "rezerved");
            setAa((prev) => !prev);
            localStorage.setItem("admintab6", "1");
          }}
        >
          Rezerve
        </button>
        <button
          className = 'tablebutton'
          onClick={() => {
            if (localStorage.getItem("Table6") !== null) {
              localStorage.removeItem("Table6");
            }
            localStorage.setItem("rezervStatus6", "notRezerved");
            setAa((prev) => !prev);
            localStorage.removeItem("admintab6");
          }}
        >
          Onrezerv
        </button>
      </div>
    </div>
  );
}
