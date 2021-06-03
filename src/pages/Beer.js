import { useEffect, useState } from "react"

export default function Beer() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers`)
    .then((response) => response.json())
    .then((info) => {
      console.log(info, 'infoDrink:::');

      setData(info);
    })
  }, []);

  console.log(data, 'data');


  return (
    <div>
      <h1>Drink</h1>
      {data.map(({id, name, description, image_url, volume}) => {

        return (
          <div key={id}>
            <h4 >{name}</h4>
            <p>{description}</p>
            <p>{volume.value} {volume.unit}</p>
            <img src={image_url} alt={name}  width="100" /> 
          </div>
        )
      })}
    </div>
  )
}