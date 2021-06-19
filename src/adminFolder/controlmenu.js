import { useState } from "react";
import MenuControlComponent from "./components";





export default function Menucontrol() {
  const SWEETS_DATA_FROM_LOCAL_STORAGE1 = JSON.parse(localStorage.getItem('SWEETS_DATA_loc'));
  const FOODS_DATA_FROM_LOCAL_STORAGE1 = JSON.parse(localStorage.getItem('FOODS_DATA_loc'));
  const DRINKS_DATA_FROM_LOCAL_STORAGE1 = JSON.parse(localStorage.getItem('DRINK_DATA_loc'));

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
        <MenuControlComponent data = {SWEETS_DATA_FROM_LOCAL_STORAGE1} localStorageData = 'SWEETS_DATA_loc'/>
      </div>
    );
  } else if (!sweet && foods && !drink) {
    return (
      <div>
        {elements}
        <MenuControlComponent data = {FOODS_DATA_FROM_LOCAL_STORAGE1} localStorageData = 'FOODS_DATA_loc'/>
      </div>
    );
  } else if (!sweet && !foods && drink) {
    return (
      <div>
        {elements}
        <MenuControlComponent data = {DRINKS_DATA_FROM_LOCAL_STORAGE1} localStorageData = 'DRINK_DATA_loc' />
      </div>
    );
  }
}
