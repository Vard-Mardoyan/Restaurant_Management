import { useEffect, useState } from "react";
import {
  SWEETS_DATA_FROM_LOCAL_STORAGE,
  FOODS_DATA_FROM_LOCAL_STORAGE,
  DRINKS_DATA_FROM_LOCAL_STORAGE,
} from "../helper/local-storage";

export default function MenuControlComponent(props) {
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState(0);

  const nameInputListener = (event) => {
    setNewName(event.target.value);
    console.log(newName);
  };

  const passwordInputListener = (event) => {
    setNewPrice(Number(event.target.value));
    console.log(newPrice);
  };

  useEffect(() => {
    setNewName("");
  }, []);

  console.log(props.data, "props.data:::");

  const handleOnClick = (id) => {

    const newLocalStorageResult = [];

    props.data.map((el) => {
      console.log(el.id, "elem.id::::")
      console.log(id, "id:::");
      //console.log(el.price, 'el.price:::');

      if (Number(id) === Number(el.id)) {
        el.name = newName;
        el.price = newPrice;
        newLocalStorageResult.push(el);
      } else {
        newLocalStorageResult.push(el);
      }
    });

    localStorage.setItem(
      props.localStorageData,
      JSON.stringify(newLocalStorageResult)
    );

    return newLocalStorageResult;

  };



  return (
    <>
      {props.data.map(({ name, id, price }) => {
        console.log(id, "id");
        //console.log(name, "name:::");
        return (
          <li key={id}>
            <div>
              <div>
                {name} <input onChange={nameInputListener} />
                <button
                onClick={() => {handleOnClick(id)}}
              >
                Change name
              </button>
              </div>
              <div>
                {price} <input onChange={passwordInputListener} />
                <button
                onClick={() => {handleOnClick(id)}}
              >
               Change price
              </button>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
  
}    
