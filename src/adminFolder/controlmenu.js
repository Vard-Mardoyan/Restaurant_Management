import { useState } from "react";
import Menuitemscontrol from "./components";
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
        <Menuitemscontrol data = {SWEETS_DATA_FROM_LOCAL_STORAGE} data1 = 'SWEETS_DATA_loc'/>
      </div>
    );
  } else if (!sweet && foods && !drink) {
    return (
      <div>
        {elements}
        <Menuitemscontrol data = {FOODS_DATA_FROM_LOCAL_STORAGE} data1 = 'FOODS_DATA_loc' />
      </div>
    );
  } else if (!sweet && !foods && drink) {
    return (
      <div>
        {elements}
        <Menuitemscontrol data = {DRINKS_DATA_FROM_LOCAL_STORAGE} data1 = 'DRINK_DATA_loc' />
      </div>
    );
  }
}
