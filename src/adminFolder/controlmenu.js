import { useState } from "react";
import MenuControlComponent from "./components";
import { SWEETS_DATA_FROM_LOCAL_STORAGE, FOODS_DATA_FROM_LOCAL_STORAGE, DRINKS_DATA_FROM_LOCAL_STORAGE} from "../helper/local-storage";





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
        <MenuControlComponent data = {SWEETS_DATA_FROM_LOCAL_STORAGE} localStorageData= 'SWEETS_DATA'/>
      </div>
    );
  } else if (!sweet && foods && !drink) {
    return (
      <div>
        {elements}
        <MenuControlComponent data = {FOODS_DATA_FROM_LOCAL_STORAGE} localStorageData = 'FOODS_DATA' />
      </div>
    );
  } else if (!sweet && !foods && drink) {
    return (
      <div>
        {elements}
        <MenuControlComponent data = {DRINKS_DATA_FROM_LOCAL_STORAGE} localStorageData = 'DRINK_DATA' />
      </div>
    );
  }
}
