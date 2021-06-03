import { DATA } from "../../service/data";
import CardComponent from "../card/Card";
import './CardListStyle.css';

export default function CardList({onItemClick, dataType}) {

  console.log(dataType, 'dataType');

  if(DATA[dataType] === 'SWEETS_DATA' ||  DATA[dataType] === 'FOODS_DATA' ) {

    return (
      <div>
      <ul className="list">
      {DATA[dataType].map(({ id, name, image, kitchen }) => {
        return (
          <>
            <CardComponent {...{id, name, image, kitchen}} onItemClick={onItemClick}/>
          </>
        );
      })}
      </ul>
    </div>
    );
  }
  
  return (
    <div>
      <ul className="list">
      {DATA[dataType].map(({ id, name, image, kitchen,description }) => {
        return (
          <>
            <CardComponent {...{id, name, image, kitchen, description}} onItemClick={onItemClick}/>
          </>
        );
      })}
      </ul>
    </div>
  );

}






