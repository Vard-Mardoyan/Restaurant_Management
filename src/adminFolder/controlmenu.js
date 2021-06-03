import { useState } from "react";
import Sweetcontrol from "./components";

const sweet_data_log = JSON.parse(localStorage.getItem("SWEETS_DATA_loc"));
const foods_data_loc = JSON.parse(localStorage.getItem("FOODS_DATA_loc"));
const drink_data_loc = JSON.parse(localStorage.getItem("DRINK_DATA_loc"));

export default function Menucontrol() {
  const [sweet, setSweet] = useState(false);
  const [foods, setFoods] = useState(false);
  const [drink, setDrink] = useState(false);

  const elements = (
    <div>
      <button
        onClick={() => {
          setSweet(true);
          setFoods(false);
          setDrink(false);
        }}
      >
        SWEETS
      </button>
      <button
        onClick={() => {
          setSweet(false);
          setFoods(true);
          setDrink(false);
        }}
      >
        FOODS
      </button>
      <button
        onClick={() => {
          setSweet(false);
          setFoods(false);
          setDrink(true);
        }}
      >
        DRINK
      </button>
    </div>
  );

  if (!sweet && !foods && !drink) {
    return elements;
  } else if (sweet && !foods && !drink) {
    return (
      <div>
        {elements}
        <Sweetcontrol/>
      </div>
    );
  } else if (!sweet && foods && !drink) {
    return (
      <div>
        {elements}
        <p>foods</p>
      </div>
    );
  } else if (!sweet && !foods && drink) {
    return (
      <div>
        {elements}
        <p>drink</p>
      </div>
    );
  }
}