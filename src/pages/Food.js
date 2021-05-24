import { useEffect, useState } from "react";

export default function Food() {
  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("https://tasty.p.rapidapi.com/feeds/list?from=0&vegetarian=%3CREQUIRED%3E&timezone=%2B0700&size=20", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "5b3eacaae4mshe2292345e422eb9p13df91jsn72e8541f80bf",
        "x-rapidapi-host": "tasty.p.rapidapi.com"
      }
    })
    .then(response => {
      console.log(response);
      return response.json();//feeds
    })
    .then((info) => {
      console.log(info, 'infoo:::');
      setData(info);
  
    })
    .catch(err => {
      console.error(err);
    });


  }, []);

  console.log(data, "data::::");//

  return (
    <div>
      <h1>Food</h1>
    </div>
  );
}