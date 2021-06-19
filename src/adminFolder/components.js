import { useState } from "react";

export default function MenuControlComponent(props) {
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [aa, setAa] = useState(0)
  

  const nameInputListener = (event) => {
    setNewName(event.target.value);
  }

  const passwordInputListener = (event) => {
    setNewPrice(Number(event.target.value));
  };

  const handleOnClickname = (id) => {
    const newLocalStorageResult = [];
    props.data.map((el) => {
        if (Number(id) === Number(el.id)) {
            el.name = newName;
          newLocalStorageResult.push(el);
        } else {
          newLocalStorageResult.push(el);
        }
    });
    localStorage.setItem(
      props.localStorageData,
      JSON.stringify(newLocalStorageResult)
    );
    if(newName){
      setNewName('')
    }
    return newLocalStorageResult;
  };

  const handleOnClickprice = (id) => {
    const newLocalStorageResult = [];
    props.data.map((el) => {
        if (Number(id) === Number(el.id)) {
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
    if(newPrice){
      setNewPrice(0)
    }
    return newLocalStorageResult;
  };

  return (
    <>
      {props.data.map(({ name, id, price }) => {
        return (
          <li key={id}>
            <div>
              <div>
                {name} <input onChange={nameInputListener} />
                <button
                onClick={() => {handleOnClickname(id)}}
              >
                Change name
              </button>
              </div>
              <div>
                {price} <input onChange={passwordInputListener} />
                <button
                onClick={() => {handleOnClickprice(id)}}
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
