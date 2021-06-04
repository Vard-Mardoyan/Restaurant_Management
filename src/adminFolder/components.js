import { useState } from "react";
import { SWEETS_DATA_FROM_LOCAL_STORAGE, FOODS_DATA_FROM_LOCAL_STORAGE, DRINKS_DATA_FROM_LOCAL_STORAGE} from "../helper/local-storage";

// export const sweet_data_log = JSON.parse(
//   localStorage.getItem("SWEETS_DATA_loc")
// );
// export const foods_data_loc = JSON.parse(
//   localStorage.getItem("FOODS_DATA_loc")
// );
// export const drink_data_loc = JSON.parse(
//   localStorage.getItem("DRINK_DATA_loc")
// );




export default function Menuitemscontrol(props) {
  const [newname, setNewname] = useState("");
  const [newprice, setNewprice] = useState(0);

  const nameInputlissener = (event) => {
    setNewname(event.target.value);
    console.log(newname);
  };

  const passwordInputlissner = (event) => {
    setNewprice(Number(event.target.value));
    console.log(newprice);
  };
  console.log(props.data, 'data::');

  const newsweet_data_loc = props.data.map(({ name, id, price }) => (

    <li key={id}>
      <div>
        <div>
          {name} <input onChange={nameInputlissener} />{" "}
          <button
            onClick={() => {
              const new_sweet_data_log = [];

              props.data.map((el) => {
                if (Number(id) === Number(el.id)) {
                  el.name = newname;
                  new_sweet_data_log.push(el);
                } else {
                  new_sweet_data_log.push(el);
                }
              });
              localStorage.setItem(
                props.data1,
                JSON.stringify(new_sweet_data_log)
              );
              
            }}
          >
            Change name
          </button>
        </div>
        <div>
          {price} <input onChange={passwordInputlissner} />{" "}
          <button
            onClick={() => {
              const new_sweet_data_log = [];
              SWEETS_DATA_FROM_LOCAL_STORAGE.map((el) => {
                if (Number(id) === Number(el.id)) {
                  el.price = newprice;
                  new_sweet_data_log.push(el);
                } else {
                  new_sweet_data_log.push(el);
                }
              });

              localStorage.setItem(
                props.data1,
                JSON.stringify(new_sweet_data_log)

              );
            }}
          >
            Change price
          </button>
        </div>
      </div>
    </li>
  ));

  return newsweet_data_loc;
}


// export default function Menuitemscontrol(props) {
//   const [newname, setNewname] = useState("");
//   const [newprice, setNewprice] = useState(0);

//   const nameInputlissener = (event) => {
//     setNewname(event.target.value);
//     console.log(newname);
//   };

//   const passwordInputlissner = (event) => {
//     setNewprice(Number(event.target.value));
//     console.log(newprice);
//   };

//   const newsweet_data_loc = props.data.map(({ name, id, price }) => (

//     <li key={id}>
//       <div>
//         <div>
//           {name} <input onChange={nameInputlissener} />{" "}
//           <button
//             onClick={() => {
//               const new_sweet_data_log = [];

//               props.data.map((el) => {
//                 if (Number(id) === Number(el.id)) {
//                   el.name = newname;
//                   new_sweet_data_log.push(el);
//                 } else {
//                   new_sweet_data_log.push(el);
//                 }
//               });
//               localStorage.setItem(
//                 props.data1,
//                 JSON.stringify(new_sweet_data_log)
//               );
              
//             }}
//           >
//             Change name
//           </button>
//         </div>
//         <div>
//           {price} <input onChange={passwordInputlissner} />{" "}
//           <button
//             onClick={() => {
//               const new_sweet_data_log = [];
//               SWEETS_DATA_FROM_LOCAL_STORAGE.map((el) => {
//                 if (Number(id) === Number(el.id)) {
//                   el.price = newprice;
//                   new_sweet_data_log.push(el);
//                 } else {
//                   new_sweet_data_log.push(el);
//                 }
//               });

//               localStorage.setItem(
//                 props.data1,
//                 JSON.stringify(new_sweet_data_log)

//               );
//             }}
//           >
//             Change price
//           </button>
//         </div>
//       </div>
//     </li>
//   ));

//   return newsweet_data_loc;
// }



// export default function Menuitemscontrol(props) {
//   const [newname, setNewname] = useState("");
//   const [newprice, setNewprice] = useState(0);

//   const nameInputlissener = (event) => {
//     setNewname(event.target.value);
//     console.log(newname);
//   };

//   const passwordInputlissner = (event) => {
//     setNewprice(Number(event.target.value));
//     console.log(newprice);
//   };

//   const newsweet_data_loc = props.data.map(({ name, id, price }) => (
    
//     <li key={id}>
//       <div>
//         <div>
//           {name} <input onChange={nameInputlissener} />{" "}
//           <button
//             onClick={() => {
//               const new_sweet_data_log = [];

//               SWEETS_DATA_FROM_LOCAL_STORAGE.map((el) => {
//                 if (Number(id) === Number(el.id)) {
//                   el.name = newname;
//                   new_sweet_data_log.push(el);
//                 } else {
//                   new_sweet_data_log.push(el);
//                 }
//               });
//               localStorage.setItem(
//                 props.data1,
//                 JSON.stringify(new_sweet_data_log)
//               );
              
//             }}
//           >
//             Change name
//           </button>
//         </div>
//         <div>
//           {price} <input onChange={passwordInputlissner} />{" "}
//           <button
//             onClick={() => {
//               const new_sweet_data_log = [];
//               SWEETS_DATA_FROM_LOCAL_STORAGE.map((el) => {
//                 if (Number(id) === Number(el.id)) {
//                   el.price = newprice;
//                   new_sweet_data_log.push(el);
//                 } else {
//                   new_sweet_data_log.push(el);
//                 }
//               });

//               localStorage.setItem(
//                 props.data1,
//                 JSON.stringify(new_sweet_data_log)

//               );
//             }}
//           >
//             Change price
//           </button>
//         </div>
//       </div>
//     </li>
//   ));

//   return newsweet_data_loc;
// }
