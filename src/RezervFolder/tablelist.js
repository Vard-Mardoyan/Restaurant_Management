import React, { useEffect, useState } from "react";

export function Tablelist(props) {
  const [tablestatus1, setTablestatus1] = useState(
    localStorage.getItem("rezervStatus1")
  );
  const [tablestatus2, setTablestatus2] = useState(
    localStorage.getItem("rezervStatus2")
  );
  const [tablestatus3, setTablestatus3] = useState(
    localStorage.getItem("rezervStatus2")
  );
  const [tablestatus4, setTablestatus4] = useState(
    localStorage.getItem("rezervStatus2")
  );

  const a = <h3>free</h3>;
  const b = <h3>rezerved</h3>;

  function Tab1() {
    if (tablestatus1 === "notRezerved") {
      return (
        <div>
          <h2>table1</h2>
          {a}
          <button
            onClick={() => {
              localStorage.setItem("rezervStatus1", "rezerved");
              setTablestatus1(localStorage.getItem("rezervStatus1"));
            }}
          >
            Rezerve
          </button>
        </div>
      );
    } else if (tablestatus1 === "rezerved") {
      return (
        <div>
          <h2>table1</h2>
          {b}
          <button
            onClick={() => {
              localStorage.setItem("rezervStatus1", "notRezerved");
              setTablestatus1(localStorage.getItem("rezervStatus1"));
            }}
          >
            Onrezerv
          </button>
        </div>
      );
    }
  }

  function Tab2() {
    if (tablestatus2 === "notRezerved") {
      return (
        <div>
          <h2>table2</h2>
          {a}
          <button
            onClick={() => {
              localStorage.setItem("rezervStatus2", "rezerved");
              setTablestatus2(localStorage.getItem("rezervStatus2"));
            }}
          >
            Rezerve
          </button>
        </div>
      );
    } else if (tablestatus2 === "rezerved") {
      return (
        <div>
          <h2>table2</h2>
          {b}
          <button
            onClick={() => {
              localStorage.setItem("rezervStatus2", "notRezerved");
              setTablestatus2(localStorage.getItem("rezervStatus2"));
            }}
          >
            Onrezerv
          </button>
        </div>
      );
    }
  }

  function Tab3() {
    if (tablestatus3 === "notRezerved") {
      return (
        <div>
          <h2>table3</h2>
          {a}
          <button
            onClick={() => {
              localStorage.setItem("rezervStatus3", "rezerved");
              setTablestatus3(localStorage.getItem("rezervStatus3"));
            }}
          >
            Rezerve
          </button>
        </div>
      );
    } else if (tablestatus3 === "rezerved") {
      return (
        <div>
          <h2>table3</h2>
          {b}
          <button
            onClick={() => {
              localStorage.setItem("rezervStatus3", "notRezerved");
              setTablestatus3(localStorage.getItem("rezervStatus3"));
            }}
          >
            Onrezerv
          </button>
        </div>
      );
    }
  }

  function Tab4() {
    if (tablestatus4 === "notRezerved") {
      return (
        <div>
          <h2>table4</h2>
          {a}
          <button
            onClick={() => {
              localStorage.setItem("rezervStatus4", "rezerved");
              setTablestatus4(localStorage.getItem("rezervStatus4"));
            }}
          >
            Rezerve
          </button>
        </div>
      );
    } else if (tablestatus4 === "rezerved") {
      return (
        <div>
          <h2>table4</h2>
          {b}
          <button
            onClick={() => {
              localStorage.setItem("rezervStatus4", "notRezerved");
              setTablestatus4(localStorage.getItem("rezervStatus4"));
            }}
          >
            Onrezerv
          </button>
        </div>
      );
    }
  }

  return (
    <div>
      <Tab1 />

      <div>
        <Tab2 />
      </div>

      <div>
        <Tab3 />
      </div>

      <div>
        <Tab4 />
      </div>
    </div>
  );
}
